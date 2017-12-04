import * as types from '../constants/actionTypes';

export function setCarList(carList) {
  return {
    type: types.SET_CAR_LIST,
    carList
  };
}

export function setBrochures(brochures) {
  return {
    type: types.SET_BROCHURES,
    brochures
  };
}

