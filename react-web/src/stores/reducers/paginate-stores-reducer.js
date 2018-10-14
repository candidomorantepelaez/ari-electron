import { requestType, successType, failureType } from "fredux";
import { PAGINATE_STORES } from "stores/actions";
import { combineReducers } from 'redux';

const initialState = {
  paginateStores: {
    paginatingStores: false,
    stores: [],
  },
};

export function paginatingStores(state = initialState.paginateStores.paginatingStores, { type }) {
  switch(type){
    case requestType(PAGINATE_STORES):
      return true;
    case successType(PAGINATE_STORES):
      return false;
    case failureType(PAGINATE_STORES):
      return false;
    default:
      return state;
  }
}

export function stores(state=initialState.paginateStores.stores, { type, payload }) {
  switch(type){
    case requestType(PAGINATE_STORES):
      return [];
    case successType(PAGINATE_STORES):
      return payload.response;
    case failureType(PAGINATE_STORES):
      return [];
    default:
      return state;
  }
}

const getPaginateStoresState = (state) => state.stores.paginateStores;

export const getPaginatingStores = state => getPaginateStoresState(state).paginatingStores;
export const getStores = state => getPaginateStoresState(state).stores;

export default combineReducers({
  paginatingStores,
  stores,
});