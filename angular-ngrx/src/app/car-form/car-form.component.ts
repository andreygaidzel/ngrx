import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Car } from '../car.model';
import * as moment from 'moment';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { AddCar } from '../redux/cars.action';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: [ './car-form.component.sass' ]
})
export class CarFormComponent implements OnInit {

  private id = 2;
  public carName = '';
  public carModel = '';

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  onAdd() {
    if (this.carName === '' || this.carModel === '') {
      return;
    }

    this.id = ++this.id;

    const car = new Car(
      this.carName,
      moment().format('DD.MM.YY'),
      this.carModel,
      false,
      this.id
    );

    this.store.dispatch( new AddCar(car) );

    this.carName = '';
    this.carModel = '';
  }

  onLoad() {

  }

}
