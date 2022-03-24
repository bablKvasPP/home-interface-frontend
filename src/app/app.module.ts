import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RgbComponent } from './rgb/rgb.component';
import { TemperatureComponent } from './temperature/temperature.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { IlluminationComponent } from './illumination/illumination.component';
import { HeaderComponent } from './header/header.component';
import { HeaterThresholdComponent } from './heater-threshold/heater-threshold.component';
import { AbsPipe } from './abs.pipe';
import { AlertComponent } from './alert/alert.component';
import { FanComponent } from './fan/fan.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    RgbComponent,
    TemperatureComponent,
    IlluminationComponent,
    HeaderComponent,
    HeaterThresholdComponent,
    AbsPipe,
    AlertComponent,
    FanComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
