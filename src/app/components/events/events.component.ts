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
}
