import { requestType, successType, failureType } from "fredux";
import { SAVE_CONFIG } from "configs/actions";
import { combineReducers } from 'redux';

const initialState = {
  saveConfig: {
    saving: false,
    configSaved: {},
  },
};

export function saving(state=initialState.saveConfig.saving, { type }) {
  switch(type){
    case requestType(SAVE_CONFIG):
      return true;
    case successType(SAVE_CONFIG):
      return false;
    case failureType(SAVE_CONFIG):
      return false;
    default:
      return state;
  }
}

export function configSaved(state=initialState.saveConfig.configSaved, { type, payload }) {
  switch(type){
    case requestType(SAVE_CONFIG):
      return state;
    case successType(SAVE_CONFIG):
      return payload.response;
    case failureType(SAVE_CONFIG):
      return state;
    default:
      return state;
  }
}

const getSaveConfigState = (state) => state.configs.saveConfig;

export const getSaving = state => getSaveConfigState(state).saving;
export const getConfigSaved = state => getSaveConfigState(state).configSaved

export default combineReducers({
  saving,
  configSaved
});