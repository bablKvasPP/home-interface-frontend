import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-fan',
  templateUrl: './fan.component.html',
})
export class FanComponent implements OnInit {

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
    this.api.setAlertThresholdValue(this.thresholdTemperatureValue).subscribe(() => {
      this.lastUpdated = Date.now()
    })
  }
}
