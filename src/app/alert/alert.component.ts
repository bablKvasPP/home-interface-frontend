import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit {

  constructor() { }
  alertTemperatureValue = 12
  lastUpdated: number | undefined = Date.now()
  ngOnInit(): void {
  }
  processEvent(event: Event) {
    // @ts-ignore
    this.alertTemperatureValue = event.target.value
  }
}
