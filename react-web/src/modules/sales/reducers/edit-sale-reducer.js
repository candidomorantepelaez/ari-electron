import { requestType, successType, failureType } from "fredux";
import { EDIT_SALE } from "sales/actions";
import { combineReducers } from 'redux';

const initialState = {
  editSale: {
    editing: false,
    saleEdited: {},
  },
};

export function editing(state=initialState.editSale.editing, { type }) {
  switch(type){
    case requestType(EDIT_SALE):
      return true;
    case successType(EDIT_SALE):
      return false;
    case failureType(EDIT_SALE):
      return false;
    default:
      return state;
  }
}

export function saleEdited(state=initialState.editSale.saleEdited, { type, payload }) {
  switch(type){
    case requestType(EDIT_SALE):
      return state;
    case successType(EDIT_SALE):
      return payload.response;
    case failureType(EDIT_SALE):
      return state;
    default:
      return state;
  }
}

const getEditSaleState = (state) => state.sales.editSale;

export const getEditing = state => getEditSaleState(state).editing;
export const getSaleEdited = state => getEditSaleState(state).saleEdited;

export default combineReducers({
  editing,
  saleEdited,
});
