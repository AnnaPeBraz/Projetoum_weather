import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '321d5cee4692c36069547c8ab88661b8 ';


  constructor(private http: HttpClient) { }

  getWeatherDatas(cityNames: string): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityNames}&units=metric&mode=json&appid=${this.apiKey}`, 
      {})
  }
}
