import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Car} from '../car.model';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { BuyCar, RemoveCar } from '../redux/cars.action';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.sass']
})
export class CarComponent {

  @Input() car: Car;
  @Output() deleteCar = new EventEmitter<Car>();

  constructor(private store: Store<AppState>) {}

  onDelete(id: number) {
    this.store.dispatch( new RemoveCar(id) );
  }

  onBuy(id: number) {
    this.store.dispatch( new BuyCar(id) );
  }
}
