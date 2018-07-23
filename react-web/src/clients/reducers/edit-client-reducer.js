import { requestType, successType, failureType } from "fredux";
import { EDIT_CLIENT } from "clients/actions";
import { combineReducers } from 'redux';

const initialState = {
  editClient: {
    editing: false,
    clientEdited: {},
  },
};

export function editing(state=initialState.editClient.editing, { type }) {
  switch(type){
    case requestType(EDIT_CLIENT):
      return true;
    case successType(EDIT_CLIENT):
      return false;
    case failureType(EDIT_CLIENT):
      return false;
    default:
      return state;
  }
}

export function clientEdited(state=initialState.editClient.clientEdited, { type, payload }) {
  switch(type){
    case requestType(EDIT_CLIENT):
      return state;
    case successType(EDIT_CLIENT):
      return payload.response;
    case failureType(EDIT_CLIENT):
      return state;
    default:
      return state;
  }
}

const getEditClientState = (state) => state.clients.editClient;

export const getEditing = state => getEditClientState(state).editing;
export const getClientEdited = state => getEditClientState(state).clientEdited;

export default combineReducers({
  editing,
  clientEdited,
});
