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

@NgModule({
  declarations: [
    AppComponent,
    RgbComponent,
    TemperatureComponent,
    IlluminationComponent,
    HeaderComponent,
    HeaterThresholdComponent,
    AbsPipe,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
