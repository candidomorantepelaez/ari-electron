import { requestType, successType, failureType } from "fredux";
import { SAVE_SALE } from "sales/actions";
import { combineReducers } from 'redux';

const initialState = {
  saveSale: {
    saving: false,
    saleSaved: {},
  },
};

export function saving(state=initialState.saveSale.saving, { type }) {
  switch(type){
    case requestType(SAVE_SALE):
      return true;
    case successType(SAVE_SALE):
      return false;
    case failureType(SAVE_SALE):
      return false;
    default:
      return state;
  }
}

export function saleSaved(state=initialState.saveSale.saleSaved, { type, payload }) {
  switch(type){
    case requestType(SAVE_SALE):
      return state;
    case successType(SAVE_SALE):
      return payload.response;
    case failureType(SAVE_SALE):
      return state;
    default:
      return state;
  }
}

const getSaveSaleState = (state) => state.sales.saveSale;

export const getSaving = state => getSaveSaleState(state).saving;
export const getSaleSaved = state => getSaveSaleState(state).saleSaved

export default combineReducers({
  saving,
  saleSaved
});