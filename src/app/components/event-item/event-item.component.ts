import { Component, OnInit, Input } from '@angular/core';
import {Event} from '../../Event';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
  @Input() event!: Event;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
