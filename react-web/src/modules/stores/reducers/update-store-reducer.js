import { requestType, successType, failureType } from "fredux";
import { UPDATE_STORE } from "stores/actions";
import { combineReducers } from 'redux';

const initialState = {
  updateStore: {
    updating: false,
    filesUpdated: {},
  },
};

export function updating(state=initialState.updateStore.updating, { type }) {
  switch(type){
    case requestType(UPDATE_STORE):
      return true;
    case successType(UPDATE_STORE):
      return false;
    case failureType(UPDATE_STORE):
      return false;
    default:
      return state;
  }
}

export function filesUpdated(state=initialState.updateStore.filesUpdated, { type, payload }) {
  switch(type){
    case requestType(UPDATE_STORE):
      return state;
    case successType(UPDATE_STORE):
      return payload.filesUpdated;
    case failureType(UPDATE_STORE):
      return state;
    default:
      return state;
  }
}

const getUpdateStoreState = (state) => state.stores.updateStore;

export const getUpdating = state => getUpdateStoreState(state).updating;
export const getFilesUpdated = state => getUpdateStoreState(state).filesupdated;

export default combineReducers({
  updating,
  filesUpdated,
});
