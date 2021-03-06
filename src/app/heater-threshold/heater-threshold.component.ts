import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-heater-threshold',
  templateUrl: './heater-threshold.component.html',
})
export class HeaterThresholdComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  thresholdTemperatureValue = 12
  lastUpdated: number | undefined = Date.now()
  processEvent(event: Event) {
    // @ts-ignore
    this.thresholdTemperatureValue = event.target.value
    this.saveValue()
  }
  saveValue() {
    this.api.setHeaterThreshold(this.thresholdTemperatureValue).subscribe(() => {
      this.lastUpdated = Date.now()
    })
  }
}
