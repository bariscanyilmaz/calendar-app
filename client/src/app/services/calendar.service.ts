import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { EventView } from '../models/event-view';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {


  events: BehaviorSubject<EventView[]> = new BehaviorSubject<EventView[]>([  
    { id: 1, title: "HW1", start: new Date() }, 
    { id: 2, title: "Exam", start: (new Date(2022, 4, 4)) }, 
    { id: 2, title: "Interview", start: (new Date(2022, 3, 5)) }
  ]);

  constructor(private http: HttpClient) { }


  getEvents(): Observable<EventView[]> {
    return this.events.asObservable();
  }

  addEvent(event: EventView) {
    return this.http.post('', { event: event, username: '123' });
  }

  deleteEvent(eventId: number) {
    return this.http.post('', { eventId: eventId, username: '123' });
  }


}
