import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-illumination',
  templateUrl: './illumination.component.html',
})
export class IlluminationComponent implements OnInit {

  lastUpdated: number | undefined = Date.now()
  illuminationValue: number | undefined = 33
  constructor() { }

  ngOnInit(): void {}
  update(): void {}
}


