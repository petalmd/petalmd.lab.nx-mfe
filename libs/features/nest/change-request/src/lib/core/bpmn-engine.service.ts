import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import EventEmitter = require('events');
import { StateRepository } from '../ports/outbound/state-repository.interface';
import { State } from '../interfaces/state.interface';

@Injectable()
export class BpmnEngineService {
  public bpmn = require('bpmn-engine');

  constructor(
    private readonly httpService: HttpService,
    @Inject(StateRepository) private stateRepo: StateRepository
  ) {}

  public initiateTransfer(transaction: any) {
    return new Promise((res, rej) => {
      this.httpService.get('http://localhost:3001/api/workflow/1').subscribe(workflow => {
        const source = workflow.data.notation;
        const engine = this.getEngine('Change Request: Initiate Transfer', source);
        const listener = this.getListener(transaction, res);
        engine.execute({ listener }, (err: any) => {
          if (err) throw err;
        });
      });
    });
  }

  public answer(id: number, answer: string) {
    return new Promise(async (res, rej) => {
      const state = await this.stateRepo.get(id) as State;
      const transaction = { from: state.from, schedule: state.schedule, to: state.to, answer };
      const engine = this.getEngine('Change Request: Initiate Transfer', undefined).recover(JSON.parse(state.state));
      const listener = this.getListener(transaction, res);
      engine.execute({ listener }, (err: any) => {
        if (err) throw err;
      });
    });
  }

  private getEngine(name: string, source: string | undefined) {
    return new this.bpmn.Engine({ 
      name,
      source,
      moddleOptions: { camunda: require('camunda-bpmn-moddle/resources/camunda') },
      services: {},
      extensions: {},
    });
  }

  private getListener(transaction: any, res: any) {
    const listener = new EventEmitter();
    listener.on('activity.start', (elementApi) => {
      console.log(`Starting Activity: ${elementApi.name}.`);
      if (elementApi.name === 'End') res('COMPLETED');
      if (elementApi.name === 'Execute') {
        this.httpService.post(`http://localhost:3001/api/schedule/${ transaction.schedule }/change-owner`, transaction).subscribe(() => {
          console.log('Change Ownership executed');
        });
      }
    });
    listener.once('wait', async (elementApi, execution) => {
      console.log(`User Task: ${elementApi.name}.`);
      if (!!transaction.answer) {
        console.log(`Received answer: ${transaction.answer}.`);
        elementApi.signal({ answer: transaction.answer });  
      } else {
        execution.stop();
        const state = await this.stateRepo.create({ ...transaction, state: execution.getState() });
        console.log(`State Id (#${ state.id }) Saved.`);
        res('WAITING_ANSWER');  
      }
    });
    return listener;
  }

  /*
  public initiateTransfer(source: string) {
    return new Promise((res, rej) => {
      const listener = this.getListener(res);
  
      const engine = this.getEngine('Change Request: Initiate Transfer', source);
  
      engine.execute({ listener }, (err, execution) => {
        if (err) throw err;
        // console.log(execution.environment.output);
      });
    });
  }

  answer(answer: string) {
    return new Promise((res, rej) => {
      const listener = this.getListener(res, answer);

      console.log(`Resuming Saved State`);

      const engine = this.getEngine('Change Request: Initiate Transfer').recover(this.state);

      engine.resume({ listener });
    });
  }

  private getListener(res, answer = null) {
    const listener = new EventEmitter();

    listener.on('activity.start', (elementApi) => {
      if (elementApi.id === 'end') {
        res('COMPLETED');
      }
      console.log(`Starting Activity: ${elementApi.id}.`);
    });

    listener.on('activity.end', (elementApi, engineApi) => {
      if (elementApi.content.output) engineApi.environment.output[elementApi.id] = elementApi.content.output;
    });
  
    listener.once('wait', (elementApi, execution) => {
      if (!!answer) {
        console.log(`Received answer: ${answer}.`);
        elementApi.signal({ answer });  
      } else {
        execution.stop();
        this.state = execution.getState();
        console.log(`Saving State, waiting for answer.`);
        res('WAITING_ANSWER');  
      }
    });

    return listener;
  }

  private getEngine(name, source = undefined) {
    return new this.bpmn.Engine({ name, source,
      moddleOptions: {
        camunda: require('camunda-bpmn-moddle/resources/camunda')
      },
      services: { changeOwnership: this.changeOwnership, markPending: this.markPending },
      extensions: {
        saveToResultVariable(activity) {
          if (!activity.behaviour.resultVariable) return;
          activity.on('end', ({environment, content}) => {
            environment.output[activity.behaviour.resultVariable] = content.output[0];
          });
        },
      }
    });
  }

  public changeOwnership = async (scope, callback) => {
    console.log('Executing External Calls: Change Ownership');
    return callback(null, true);
  };

  public markPending = async (scope, callback) => {
    console.log('Executing External Calls: Mark Pending');
    return callback(null, true);
  };

  */
}
