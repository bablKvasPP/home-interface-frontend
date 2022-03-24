import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit {

  constructor(private api: ApiService) { }
  alertTemperatureValue = 12
  lastUpdated: number | undefined = Date.now()
  ngOnInit(): void {
  }
  processEvent(event: Event) {
    // @ts-ignore
    this.alertTemperatureValue = event.target.value
    this.saveValue()
  }
  saveValue() {
    this.api.setAlertThresholdValue(this.alertTemperatureValue).subscribe(() => {
      this.lastUpdated = Date.now()
    })
  }
}
