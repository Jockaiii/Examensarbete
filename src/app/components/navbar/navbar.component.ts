import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    showHamburgermenu() {
        var x = document.getElementById('myTopnav')!;
        if (x.className === 'navbar') {
            x.className += ' responsive';
        } else {
            x.className = 'navbar';
        }
    }
}
