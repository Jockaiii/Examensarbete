import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../../Event';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css'],
})
export class EventItemComponent implements OnInit {
  @Input() event!: Event;
  @Output() onDeleteEvent: EventEmitter<Event> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Event> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  deleteEvent(event: Event) {
    this.onDeleteEvent.emit(event);
  }

  toggleReminder(event: Event) {
    this.onToggleReminder.emit(event);
  }
}
