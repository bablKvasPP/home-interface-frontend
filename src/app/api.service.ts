import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseResponse} from "./base-response";
import {TemperatureAndHumidity} from "./temperatureAndHumidity";
import {RgbModel} from "./rgb-model";
import {Illumination} from "./illumination";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "https://pp.ivanisplaying.xyz/"
  constructor(private http: HttpClient) { }

  generateEndpoint(path: string) {
    return this.baseUrl + path
  }

  getTemperature() {
    return this.http.get<BaseResponse<TemperatureAndHumidity>>(this.generateEndpoint("temperature"))
  }

  getLightsData() {
    return this.http.get<BaseResponse<RgbModel>>(this.generateEndpoint("lights"))
  }

  saveLightsData(rgb: RgbModel) {
    return this.http.put(this.generateEndpoint("lights"), rgb)
  }

  getIllumination() {
    return this.http.get<BaseResponse<Illumination>>(this.generateEndpoint("illumination/1"))
  }

  setAlertThresholdValue(value: number) {
    return this.http.put(this.generateEndpoint("fan/alert"), {temperature: value})
  }

  setFanThreshold(value: number) {
    return this.http.put(this.generateEndpoint("fan/threshold"), {temperature: value, humidity: 0})
  }

  setHeaterThreshold(value: number) {
    return this.http.put(this.generateEndpoint("heat/threshold"), {temperature: value, humidity: 0})
  }

}
