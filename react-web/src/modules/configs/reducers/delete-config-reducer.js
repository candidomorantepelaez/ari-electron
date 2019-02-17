import { requestType, successType, failureType } from "fredux";
import { DELETE_CONFIG } from "configs/actions";
import { combineReducers } from 'redux';

const initialState = {
  deleteConfig: {
    deleting: false,
    configDeleted: {},
  },
};

export function deleting(state=initialState.deleteConfig.deleting, { type }) {
  switch(type){
    case requestType(DELETE_CONFIG):
      return true;
    case successType(DELETE_CONFIG):
      return false;
    case failureType(DELETE_CONFIG):
      return false;
    default:
      return state;
  }
}

export function configDeleted(state=initialState.deleteConfig.configDeleted, { type, payload }) {
  switch(type){
    case requestType(DELETE_CONFIG):
      return state;
    case successType(DELETE_CONFIG):
      return payload.response;
    case failureType(DELETE_CONFIG):
      return state;
    default:
      return state;
  }
}

const getDeleteConfigState = (state) => state.configs.deleteConfig;

export const getDeleting = state => getDeleteConfigState(state).deleting;

export const getConfigDeleted = state => getDeleteConfigState(state).configDeleted;

export default combineReducers({
  deleting,
  configDeleted,
});
