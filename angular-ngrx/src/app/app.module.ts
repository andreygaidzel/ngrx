import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarFormComponent } from './car-form/car-form.component';
import { CarComponent } from './car/car.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { carsReducer } from './redux/cars.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CarFormComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ carPage: carsReducer })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
