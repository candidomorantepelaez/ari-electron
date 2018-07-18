import { requestType, successType, failureType } from "fredux";
import { DELETE_CLIENT } from "clients/actions";
import { combineReducers } from 'redux';

const initialState = {
  deleteClient: {
    clientForDelete: {},
    deleting: false,
    clientDeleted: {},
  },
};

export function clientForDelete(state=initialState.deleteClient.clientForDelete, { type, payload }) {
  switch(type){
    case requestType(DELETE_CLIENT):
      return state;
    case successType(DELETE_CLIENT):
      return state;
    case failureType(DELETE_CLIENT):
      return state;
    default:
      return state;
  }
}

export function deleting(state=initialState.deleteClient.deleting, { type }) {
  switch(type){
    case requestType(DELETE_CLIENT):
      return true;
    case successType(DELETE_CLIENT):
      return false;
    case failureType(DELETE_CLIENT):
      return false;
    default:
      return state;
  }
}

export function clientDeleted(state=initialState.deleteClient.clientDeleted, { type, payload }) {
  switch(type){
    case requestType(DELETE_CLIENT):
      return state;
    case successType(DELETE_CLIENT):
      return payload;
    case failureType(DELETE_CLIENT):
      return state;
    default:
      return state;
  }
}

const getDeleteClientState = (state) => state.clients.deleteClient;

export const getClientForDelete = state => {
  return getDeleteClientState(state).clientForDelete;
}
export const getDeleting = state => {
  return getDeleteClientState(state).deleting;
}
export const getClientDeleted = state => {
  return getDeleteClientState(state).clientDeleted;
}

export default combineReducers({
  clientForDelete,
  deleting,
  clientDeleted,
});
