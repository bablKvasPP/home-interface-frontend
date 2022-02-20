import { Component, OnInit } from '@angular/core';
import {RgbModel} from "../rgb-model";

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

  constructor() { }

  ngOnInit(): void {
  }

  update(): void {
    // @ts-ignore
    this.rgb = undefined
    this.lastUpdated = undefined
  }

  handleEvent(color: string, event: Event) {
    // @ts-ignore
    this.rgb[color] = (event.target.value)
  }
}
