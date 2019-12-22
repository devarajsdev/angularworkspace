import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule,Routes } from '@angular/router'
import {FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { InteractionComponent } from './interaction/interaction.component';
import { TwowayComponent } from './twoway/twoway.component';
import { FormsComponent } from './forms/forms.component';
import { TripComponent } from './trip/trip.component';
import { from } from 'rxjs';
import { DivorceComponent } from './divorce/divorce.component';
import { NominationComponent } from './nomination/nomination.component';
import { StatueComponent } from './statue/statue.component';
import { FrozenComponent } from './frozen/frozen.component';
import { FrozenService } from './frozen/frozen.service';
import { DevopsComponent } from './devops/devops.component';
import { ColorChange } from './change.color';
import { HttpClientModule } from '@angular/common/http';
import { PersonComponent } from './person/person.component';
import { PersonService } from './person/person.service';
import { ShipService } from './service/ship.service';
import { RowdyComponent } from './rowdy/rowdy.component';
import { RowdyService } from './rowdy/rowdy.service';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { AppRouterModule } from './approuter.module';




@NgModule({
  declarations: [
    AppComponent,
    InteractionComponent,
    TwowayComponent,
    FormsComponent,
    TripComponent,
    DivorceComponent,
    NominationComponent,
    StatueComponent,
    FrozenComponent,
    DevopsComponent,
    ColorChange,
    PersonComponent,
    RowdyComponent,
    ReactiveformsComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,AppRouterModule,ReactiveFormsModule
  ],
  providers: [FrozenService,PersonService,ShipService,RowdyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
