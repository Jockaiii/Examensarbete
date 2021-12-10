import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { EventsComponent } from './components/events/events.component';
import { EventItemComponent } from './components/event-item/event-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';

import { RouterModule } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { WhiskeyInventoryComponent } from './views/whiskey-inventory/whiskey-inventory.component';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    EventsComponent,
    EventItemComponent,
    NavbarComponent,
    HomeComponent,
    WhiskeyInventoryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {path: 'views/home', component: HomeComponent},
      {path: 'views/whiskey-inventory', component: WhiskeyInventoryComponent},
      {path: 'views/about', component: AboutComponent},
      {path: 'views/contact', component: ContactComponent},
      {path: 'views/login', component: LoginComponent},
      {path: '', redirectTo: 'views/home', pathMatch: 'full'},
      {path: '**', redirectTo: 'views/home', pathMatch: 'full'},

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
