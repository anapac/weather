import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const WEATHER_API_KEY: string = '4645d40636c24bdab2492426171602';
const CUR_WEATHER_URL: string = 'https://api.apixu.com/v1/current.json?';

@Injectable()
export class GetWeatherService {

  constructor(private http: Http) {

  }

  fetchCurrentWeatherData(location: string): any {
    // https://api.apixu.com/v1/current.json?key=4645d40636c24bdab2492426171602&q=Paris
    const url: string = CUR_WEATHER_URL + 'key=' + WEATHER_API_KEY + '&q=' + location;

    return this.http.get(url).map(res => res.json());
  }
}
