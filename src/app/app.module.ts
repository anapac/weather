import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { LocationDataComponent } from './components/location-data/location-data.component';
import { WeatherDataComponent } from './components/weather-data/weather-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserFormComponent,
    LocationDataComponent,
    WeatherDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
