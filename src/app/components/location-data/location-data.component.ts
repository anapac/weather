import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-location-data',
  templateUrl: './location-data.component.html',
  styleUrls: ['./location-data.component.css']
})
export class LocationDataComponent implements OnInit {
  @Input() locData: Object;
  @Output() onHideLocations = new EventEmitter();

  public locationDataClasses: Object = {
    "inlineBlock": true,
    "showBorder": true,
    "transparentBackground": true,
    "centerContent": false
  }

  constructor() { }

  ngOnInit() {
  }

  closeLocations() {
    this.onHideLocations.emit();
  }
}
