import { Component, OnInit } from '@angular/core';
import {RgbModel} from "../rgb-model";
import {ApiService} from "../api.service";
import {timeout} from "rxjs";

@Component({
  selector: 'app-rgb',
  templateUrl: './rgb.component.html',
  styleUrls: ['./rgb.component.scss']
})
export class RgbComponent implements OnInit {

  rgb: RgbModel = {
    r: 128,
    g: 128,
    b: 124
  }

  lastUpdated: number | undefined = Date.now()

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.update()
    }, 60000)
    this.update()
  }

  update(): void {
    // @ts-ignore
    this.api.getLightsData().subscribe((rgb) => {
      console.log(rgb.data)
      this.rgb = rgb.data
      this.lastUpdated = Date.now()
    })
    this.lastUpdated = undefined
  }

  save(): void {
    this.lastUpdated = undefined
    this.api.saveLightsData(this.rgb).subscribe(() => {
      this.lastUpdated = Date.now()
    })
  }

  handleEvent(color: string, event: Event) {
    // @ts-ignore
    this.rgb[color] = (event.target.value)
    this.save()
  }
}
