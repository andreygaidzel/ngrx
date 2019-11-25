import { Action } from '@ngrx/store';
import { Car } from '../car.model';

export namespace CAR_ACTION {
  export const ADD_CAR = 'ADD_CAR';
  export const REMOVE_CAR = 'REMOVE_CAR';
  export const BUY_CAR = 'BUY_CAR';
}

export class AddCar implements Action {
  readonly type = CAR_ACTION.ADD_CAR;

  constructor(public payload: Car) {}
}

export class RemoveCar implements Action {
  readonly type = CAR_ACTION.REMOVE_CAR;

  constructor(public payload: number) {}
}

export class BuyCar implements Action {
  readonly type = CAR_ACTION.BUY_CAR;

  constructor(public payload: number) {}
}
