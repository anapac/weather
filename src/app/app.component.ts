import { Component } from '@angular/core';

import { GetWeatherService } from './services/get-weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetWeatherService]
})
export class AppComponent {
  public title: string = 'Weather';
  public displayLocations: boolean = false;
  public displayWeather: boolean = false;
  public locationData: Object = {};
  public weatherData: Object = {};

  constructor(private weatherApi: GetWeatherService) { }

  searchWeatherApi(location): void {
    this.weatherApi.fetchCurrentWeatherData(location)
      .subscribe(
        // locs => console.log(locs)
        locs => {
          this.showLocationData(locs.location);
          this.showWeatherData(locs.current);
        }
      );
  } // searchWeatherApi()

  showLocationData(data: Object): void {
    if (data["name"]) {
      this.locationData = data;
      this.displayLocations = true;
    } else {
      this.locationData = {};
      this.displayLocations = false;
    }
  } // showLocationData()

  showWeatherData(data: Object): void {
    if (data["last_updated"]) {
      this.weatherData = data;
      this.displayWeather = true;
    } else {
      this.weatherData = {};
      this.displayWeather = false;
    }
  } // showWeatherData()

  hideLocationData() {
    this.displayLocations = false;
  }

  hideWeatherData() {
    this.displayWeather = false;
  }
}
