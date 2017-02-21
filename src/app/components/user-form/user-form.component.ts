import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Output() onLocation = new EventEmitter();

  public userFormClasses: Object = {
    "inlineBlock": true,
    "showBorder": true,
    "transparentBackground": true,
    "centerContent": true
  }

  public loc: string;

  constructor() { }

  ngOnInit() {
  }

  submitForm(ev) {
    ev.stopPropagation();
    ev.preventDefault();

    this.onLocation.emit(this.loc);
  }
}
