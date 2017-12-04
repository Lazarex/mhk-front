import { SET_CAR_LIST, SET_BROCHURES } from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function HomePageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CAR_LIST:
      return objectAssign({}, state, {carList: action.carList});

    case SET_BROCHURES:
      if (!action.brochures.brochureName) {
        return objectAssign({}, state, { brochures: [] });
      }

      if (state.brochures.some(
        i => i.brochureName === action.brochures.brochureName)
      ) {
        return objectAssign({}, state, {brochures: state.brochures.filter(
          i => i.brochureName !== action.brochures.brochureName
        )});
      }

      return objectAssign({}, state, {
        brochures: [...state.brochures, action.brochures]
      });

    default:
      return state;
  }
}
