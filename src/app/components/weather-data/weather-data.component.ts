import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {
  @Input() weatherData: Object;
  @Output() onHideWeather = new EventEmitter();

  public weatherDataClasses: Object = {
    "inlineBlock": true,
    "showBorder": true,
    "transparentBackground": true,
    "centerContent": false
  }

  constructor() { }

  ngOnInit() { }

  closeWeather() {
    this.onHideWeather.emit();
  }
}
