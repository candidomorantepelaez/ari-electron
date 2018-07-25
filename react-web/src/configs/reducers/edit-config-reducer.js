import { requestType, successType, failureType } from "fredux";
import { EDIT_CONFIG } from "configs/actions";
import { combineReducers } from 'redux';

const initialState = {
  editConfig: {
    saving: false,
    configEdited: {},
  },
};

export function saving(state=initialState.editConfig.saving, { type }) {
  switch(type){
    case requestType(EDIT_CONFIG):
      return true;
    case successType(EDIT_CONFIG):
      return false;
    case failureType(EDIT_CONFIG):
      return false;
    default:
      return state;
  }
}

export function configEdited(state=initialState.editConfig.configEdited, { type, payload }) {
  switch(type){
    case requestType(EDIT_CONFIG):
      return state;
    case successType(EDIT_CONFIG):
      return payload.response;
    case failureType(EDIT_CONFIG):
      return state;
    default:
      return state;
  }
}

const getEditConfigState = (state) => state.configs.editConfig;

export const getSaving = state => getEditConfigState(state).saving;
export const getConfigEdited = state => getEditConfigState(state).configEdited

export default combineReducers({
  saving,
  configEdited,
});