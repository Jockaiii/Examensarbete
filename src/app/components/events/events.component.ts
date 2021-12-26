import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import {Event} from '../../Event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((events) => (this.events = events));
  }

  deleteEvent(event: Event){
    this.eventService
    .deleteEvent(event)
    .subscribe(
      () => (this.events = this.events.filter((e) => e.id !== event.id))
      );
  }

  toggleReminder(event: Event){
    event.reminder = !event.reminder;
    this.eventService.updateEventReminder(event).subscribe();
  }

  addEvent(event: Event) {
    this.eventService.addEvent(event).subscribe((event) => (this.events.push(event)));
  }
}
