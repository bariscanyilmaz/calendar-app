import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CalendarEvent, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import { Subject } from 'rxjs';
import { EventView } from 'src/app/models/event-view';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  viewDate: Date = new Date();

  locale: string = 'tr_TR';
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  weekendDays: number[] = [DAYS_OF_WEEK.SATURDAY, DAYS_OF_WEEK.SUNDAY];
  refresh: Subject<any> = new Subject<any>();
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;


  modalData: {
    action: string;
    event: CalendarEvent;
  };


  myEvents: CalendarEvent<EventView>[] = [

  ];

  activeDayIsOpen: boolean = false;

  displayedColumns: string[] = ['no', 'date', 'name', 'action'];
  dataSource: CalendarEvent<EventView>[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent<EventView>[] }): void {
    this.dataSource = events;
  }

  handleEvent(action: string, event: CalendarEvent): void {

  }

  eventTimesChanged($event: any) {

  }

  newEvent(): void {
    //this.router.navigate(['event']);
  }

  deleteEvent(eventToDelete: CalendarEvent) {

  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  getMonth() {
    //return this.calendarService.getMonth(this.viewDate.getMonth()).name;
  }

  delete(model: EventView) {
    const index = this.dataSource.indexOf(model);
    if (index > -1) {
      //this.calendarService.deleteEvent(model);
      this.dataSource.splice(index, 1);
      this.refresh.next();
    }
  }

}
