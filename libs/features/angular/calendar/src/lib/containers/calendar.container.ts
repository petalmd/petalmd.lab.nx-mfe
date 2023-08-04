import { Component } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { FeatureCalendarFacade } from '../facades/feature-calendar.facade';
import { TransferModalComponent } from '../modals/transfer.modal';

@Component({
  selector: 'petal-calendar',
  template: `<full-calendar [options]="calendarOptions" [events]="events$ | async"></full-calendar>`,
  styles: [`full-calendar { width: 400px; height: 100% }`],
})
export class CalendarContainerComponent {
  public id: number;
  public calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, bootstrap5Plugin, timeGridPlugin],
    initialView: 'timeGridDay',
    themeSystem: 'bootstrap5',
    eventClick: (info) => this.facade.openDialog(+info.event.id, TransferModalComponent),
    eventDidMount: (info) => {
      if (info.event.extendedProps['classes']) {
        info.el.classList.add(info.event.extendedProps['classes']);
      }
    },
  };
  public events$: Observable<EventInput> = this.facade.schedules();

  constructor(private route: ActivatedRoute, private facade: FeatureCalendarFacade) {
    this.route.params
      .pipe(takeUntilDestroyed())
      .subscribe((params: any) => {
        this.facade.load(params.id);
      });
  }
}
