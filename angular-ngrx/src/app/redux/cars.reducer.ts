import { Car } from '../car.model';
import { CAR_ACTION, AddCar, BuyCar, RemoveCar } from './cars.action';

const initialState = {
  cars: [
    new Car('Ford', '12.12.12', 'Focus', false, 1),
    new Car('Audi', '08.08.12', 'A4', false, 2)
  ]
};

export function carsReducer(state = initialState, action: AddCar | RemoveCar | BuyCar) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      };
    case CAR_ACTION.REMOVE_CAR:
      return {
        ...state,
        cars: state.cars.filter( x => x.id !== action.payload )
      };
    case CAR_ACTION.BUY_CAR:
      return {
        ...state,
        cars: state.cars.map( x => {
          if (x.id === action.payload) {
            x.isSold = true;
          }
          return x;
        })
      };
    default:
      return state;
  }
}
