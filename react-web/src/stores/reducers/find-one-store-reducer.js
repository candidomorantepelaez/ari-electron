import { requestType, successType, failureType } from "fredux";
import { FIND_ONE_STORE } from "stores/actions";
import { combineReducers } from 'redux';

const initialState = {
  findOneStore: {
    findingStore: false,
    store: {},
  },
};

export function findingStore(state = initialState.findOneStore.findingStore, { type }) {
  switch(type){
    case requestType(FIND_ONE_STORE):
      return true;
    case successType(FIND_ONE_STORE):
      return false;
    case failureType(FIND_ONE_STORE):
      return false;
    default:
      return state;
  }
}

export function store(state=initialState.findOneStore.store, { type, payload }) {
  switch(type){
    case requestType(FIND_ONE_STORE):
      return [];
    case successType(FIND_ONE_STORE):
      return payload.response;
    case failureType(FIND_ONE_STORE):
      return [];
    default:
      return state;
  }
}

const getFindOneStoreState = (state) => state.stores.findOneStore;

export const getFindingStore = state => getFindOneStoreState(state).findingStore;
export const getStores = state => getFindOneStoreState(state).store;

export default combineReducers({
  findingStore,
  store,
});