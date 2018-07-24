import { requestType, successType, failureType } from "fredux";
import { COUNT_SALES } from "sales/actions";
import { combineReducers } from 'redux';

const initialState = {
  countSales: {
    countingSales: false,
    numberOfSales: 0,
  },
};

export function countingSales(state = initialState.countSales.countingSales, { type }) {
  switch(type){
    case requestType(COUNT_SALES):
      return true;
    case successType(COUNT_SALES):
      return false;
    case failureType(COUNT_SALES):
      return false;
    default:
      return state;
  }
}

export function numberOfSales(state=initialState.countSales.numberOfSales, { type, payload }) {
  switch(type){
    case requestType(COUNT_SALES):
      return 0;
    case successType(COUNT_SALES):
      return payload.numeroVentas;
    case failureType(COUNT_SALES):
      return 0;
    default:
      return state;
  }
}

const getCountSales = (state) => state.sales.countSales;

export const getCountingSales = state => getCountSales(state).countingSales;
export const getNumberOfSales = state => getCountSales(state).numberOfSales;

export default combineReducers({
  countingSales,
  numberOfSales,
});