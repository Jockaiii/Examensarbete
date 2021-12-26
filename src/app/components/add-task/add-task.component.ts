import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Event } from '../../Event'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddEvent: EventEmitter<Event> = new EventEmitter();
  text: string = "";
  day: string = "";
  reminder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text){
      alert('Please add an event!');
      return;
    }

    const newEvent = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

      this.onAddEvent.emit(newEvent);

      this.text = "";
      this.day = "";
      this.reminder = false;
  }
}