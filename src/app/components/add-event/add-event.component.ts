import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Event } from '../../Event';

@Component({
    selector: 'app-add-event',
    templateUrl: './add-event.component.html',
    styleUrls: ['./add-event.component.css'],
})
export class AddEventComponent implements OnInit {
    @Output() onAddEvent: EventEmitter<Event> = new EventEmitter();
    text!: string;
    day!: string;
    reminder!: boolean;
    showAddEvent!: boolean;
    subscription: Subscription;

    constructor(private uiService: UiService) {
        this.subscription = this.uiService
            .onToggle()
            .subscribe((value) => (this.showAddEvent = value));
    }

    ngOnInit(): void {}

    onSubmit() {
        if (!this.text) {
            alert('Please add an event!');
            return;
        }

        const newEvent: Event = {
            text: this.text,
            day: this.day,
            reminder: this.reminder,
        };

        this.onAddEvent.emit(newEvent);

        this.text = '';
        this.day = '';
        this.reminder = false;
    }
}
