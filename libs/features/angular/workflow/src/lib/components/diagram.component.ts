import { MatButtonModule } from '@angular/material/button';
import { AfterContentInit, Component, ElementRef, Input, OnDestroy, ViewChild, EventEmitter, Output } from '@angular/core';
import BpmnModeler from 'bpmn-js/lib/Modeler';

@Component({
  selector: 'petal-workflow-diagram',
  standalone: true,
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss'],
  imports: [MatButtonModule]
})
export class DiagramComponent implements AfterContentInit, OnDestroy {
  @ViewChild('canvas', { static: true }) private canvas: ElementRef;
  @ViewChild('properties', { static: true }) private properties: ElementRef;
  @Input() public notation?: string;
  @Output() public update = new EventEmitter<string>();
  private bpmnJS: BpmnModeler;

  constructor() {}

  ngAfterContentInit(): void {
    this.bpmnJS = new BpmnModeler({
      additionalModules: [
        // BpmnPropertiesPanelModule,
        // BpmnPropertiesProviderModule,
      ],
      container: this.canvas.nativeElement,
      propertiesPanel: {
        parent: '#js-properties-panel',
      },
    });  
    setTimeout(() => this.openDiagram(this.notation!), 100);
  }

  ngOnDestroy(): void {
    this.bpmnJS.destroy();
  }

  save() {
    this.bpmnJS.saveXML({format: true}).then((a) => this.update.emit(a.xml));
  }

  public async openDiagram(xml: string) {
    try {
      await this.bpmnJS.importXML(xml);
    } catch (err) {
      console.error(err);
    }
  }
}
