import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heater-threshold',
  templateUrl: './heater-threshold.component.html',
})
export class HeaterThresholdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  thresholdTemperatureValue = 12
  lastUpdated: number | undefined = Date.now()
  processEvent(event: Event) {
    // @ts-ignore
    this.thresholdTemperatureValue = event.target.value
  }
}
