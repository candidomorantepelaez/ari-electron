import { requestType, successType, failureType } from "fredux";
import { DELETE_SALE } from "sales/actions";
import { combineReducers } from 'redux';

const initialState = {
  deleteSale: {
    deleting: false,
    saleDeleted: {},
  },
};

export function deleting(state=initialState.deleteSale.deleting, { type }) {
  switch(type){
    case requestType(DELETE_SALE):
      return true;
    case successType(DELETE_SALE):
      return false;
    case failureType(DELETE_SALE):
      return false;
    default:
      return state;
  }
}

export function saleDeleted(state=initialState.deleteSale.saleDeleted, { type, payload }) {
  switch(type){
    case requestType(DELETE_SALE):
      return state;
    case successType(DELETE_SALE):
      return payload.response;
    case failureType(DELETE_SALE):
      return state;
    default:
      return state;
  }
}

const getDeleteSaleState = (state) => state.sales.deleteSale;

export const getDeleting = state => getDeleteSaleState(state).deleting;

export const getSaleDeleted = state => getDeleteSaleState(state).saleDeleted;

export default combineReducers({
  deleting,
  saleDeleted,
});
