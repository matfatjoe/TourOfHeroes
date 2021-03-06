import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroService } from './hero.service';
import { HeroFbService } from './hero-fb.service';
import { MessageService } from './message.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationService } from './authentication.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HeroAddComponent } from './hero-add/hero-add.component';
import { HomePageComponent } from './home-page/home-page.component';

const config = {
    apiKey: "AIzaSyAIhIHHZJXCL_lkqpJ1Cx6RSw4vkb1o_K8",
    authDomain: "angular-6dcfc.firebaseapp.com",
    databaseURL: "https://angular-6dcfc.firebaseio.com",
    projectId: "angular-6dcfc",
    storageBucket: "angular-6dcfc.appspot.com",
    messagingSenderId: "309534384903"
  };

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroAddComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    AngularFireModule,
    AngularFireAuthModule
  ],
  providers: [HeroService, MessageService, HeroFbService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
