import { requestType, successType, failureType } from "fredux";
import { SEARCH_STORES } from "stores/actions";
import { combineReducers } from 'redux';

const initialState = {
  searchStores: {
    searchingStores: false,
    stores: [],
  },
};

export function searchingStores(state = initialState.searchStores.searchingStores, { type }) {
  switch(type){
    case requestType(SEARCH_STORES):
      return true;
    case successType(SEARCH_STORES):
      return false;
    case failureType(SEARCH_STORES):
      return false;
    default:
      return state;
  }
}

export function stores(state=initialState.searchStores.stores, { type, payload }) {
  switch(type){
    case requestType(SEARCH_STORES):
      return [];
    case successType(SEARCH_STORES):
      return payload.response;
    case failureType(SEARCH_STORES):
      return [];
    default:
      return state;
  }
}

const getSearchStoresState = (state) => state.stores.searchStores;

export const getSearchingStores = state => getSearchStoresState(state).searchingStores;
export const getStores = state => getSearchStoresState(state).stores;

export default combineReducers({
  searchingStores,
  stores
});