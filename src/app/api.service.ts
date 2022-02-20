import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseResponse} from "./base-response";
import {Temperature} from "./temperature";

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
    return this.http.get<BaseResponse<Temperature>>(this.generateEndpoint("temperature"))
  }
}
