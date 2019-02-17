import { requestType, successType, failureType } from "fredux";
import { REMOVE_STORE } from "stores/actions";
import { combineReducers } from 'redux';

const initialState = {
  removeStore: {
    removing: false,
    filesRemoved: 0,
  },
};

export function removing(state=initialState.removeStore.removing, { type }) {
  switch(type){
    case requestType(REMOVE_STORE):
      return true;
    case successType(REMOVE_STORE):
      return false;
    case failureType(REMOVE_STORE):
      return false;
    default:
      return state;
  }
}

export function filesRemoved(state=initialState.removeStore.filesRemoved, { type, payload }) {
  switch(type){
    case requestType(REMOVE_STORE):
      return state;
    case successType(REMOVE_STORE):
      return payload.filesRemoved;
    case failureType(REMOVE_STORE):
      return state;
    default:
      return state;
  }
}

const getRemoveStoreState = (state) => state.stores.removeStore;

export const getRemoving = state => {
  return getRemoveStoreState(state).removing;
}
export const getFilesRemoved = state => {
  return getRemoveStoreState(state).filesRemoved;
}

export default combineReducers({
  removing,
  filesRemoved,
});
