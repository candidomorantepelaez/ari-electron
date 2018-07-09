import { requestType, successType, failureType } from "fredux";
import { COUNT_ROUTES } from "routes/actions";
import { combineReducers } from 'redux';

const initialState = {
  countRoutes: {
    countingRoutes: false,
    numberOfRoutes: 0,
  },
};

export function countingRoutes(state = initialState.countRoutes.countingRoutes, { type }) {
  switch(type){
    case requestType(COUNT_ROUTES):
      return true;
    case successType(COUNT_ROUTES):
      return false;
    case failureType(COUNT_ROUTES):
      return false;
    default:
      return state;
  }
}

export function numberOfRoutes(state=initialState.countRoutes.numberOfRoutes, { type, payload }) {
  switch(type){
    case requestType(COUNT_ROUTES):
      return 0;
    case successType(COUNT_ROUTES):
      return payload.numeroRutas;
    case failureType(COUNT_ROUTES):
      return 0;
    default:
      return state;
  }
}

const getCountRoutes = (state) => state.routes.countRoutes;

export const getCountingRoutes = state => getCountRoutes(state).countingRoutes;
export const getNumberOfRoutes = state => getCountRoutes(state).numberOfRoutes;

export default combineReducers({
  countingRoutes,
  numberOfRoutes,
});