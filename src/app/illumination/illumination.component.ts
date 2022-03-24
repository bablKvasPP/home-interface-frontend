import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-illumination',
  templateUrl: './illumination.component.html',
})
export class IlluminationComponent implements OnInit {

  lastUpdated: number | undefined = Date.now()
  illuminationValue: number | undefined = 33
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.update()
    setInterval(() => {this.update()}, 15000)
  }
  update(): void {
    this.illuminationValue = undefined
    this.lastUpdated = undefined
    this.api.getIllumination().subscribe((model)=>{
      this.illuminationValue = parseInt(model.data.illumination)
      this.lastUpdated = Date.now()
    })
  }
}


