import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Car } from '../car.model';
import * as moment from 'moment';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: [ './car-form.component.sass' ]
})
export class CarFormComponent implements OnInit {

  private id = 2;
  public carName = '';
  public carModel = '';

  @Output() addCar = new EventEmitter<Car>();

  constructor() {
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

    this.addCar.emit(car);

    this.carName = '';
    this.carModel = '';
  }

  onLoad() {

  }

}
