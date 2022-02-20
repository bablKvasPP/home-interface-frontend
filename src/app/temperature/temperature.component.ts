import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
})
export class TemperatureComponent implements OnInit {

  constructor(private api: ApiService) { }
  tempValue: number | undefined = 12
  lastUpdated: number | undefined = Date.now()
  ngOnInit(): void {
    // this.update()
  }

  update(): void {
    this.tempValue = undefined
    this.lastUpdated = undefined
    this.api.getTemperature().subscribe((resp) => {
      this.tempValue = resp.data.temperature
      this.lastUpdated = Date.now()
    })
  }


}
