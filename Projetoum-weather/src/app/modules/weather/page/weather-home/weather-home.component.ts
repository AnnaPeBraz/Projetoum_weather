import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit {
  initialCityName = 'Sao Paulo';
  weatherDatas!: WeatherDatas;

  constructor(private weatherService: WeatherService){}
  
  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName)
    .subscribe({
      next: (response) => {
        response && (this.weatherDatas = response);
      },
      error: (err) => console.log(err),
    })
  }
  
}
