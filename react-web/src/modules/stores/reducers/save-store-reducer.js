import { requestType, successType, failureType } from "fredux";
import { SAVE_STORE } from "stores/actions";
import { combineReducers } from 'redux';

const initialState = {
  saveStore: {
    saving: false,
    storeSaved: {},
  },
};

export function saving(state=initialState.saveStore.saving, { type }) {
  switch(type){
    case requestType(SAVE_STORE):
      return true;
    case successType(SAVE_STORE):
      return false;
    case failureType(SAVE_STORE):
      return false;
    default:
      return state;
  }
}

export function storeSaved(state=initialState.saveStore.storeSaved, { type, payload }) {
  switch(type){
    case requestType(SAVE_STORE):
      return state;
    case successType(SAVE_STORE):
      return payload.response;
    case failureType(SAVE_STORE):
      return state;
    default:
      return state;
  }
}

const getSaveStoreState = (state) => state.stores.saveStore;

export const getSaving = state => getSaveStoreState(state).saving;
export const getStoreSaved = state => getSaveStoreState(state).storeSaved;

export default combineReducers({
  saving,
  storeSaved
});
