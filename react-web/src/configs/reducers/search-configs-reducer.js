import { requestType, successType, failureType } from "fredux";
import { SEARCH_CONFIGS } from "configs/actions";
import { combineReducers } from 'redux';

const initialState = {
  searchConfigs: {
    searching: false,
    configs: {},
  },
};

export function searching(state = initialState.searchConfigs.searching, { type }) {
  switch(type){
    case requestType(SEARCH_CONFIGS):
      return true;
    case successType(SEARCH_CONFIGS):
      return false;
    case failureType(SEARCH_CONFIGS):
      return false;
    default:
      return state;
  }
}

export function configs(state=initialState.searchConfigs.configs, { type, payload }) {
  switch(type){
    case requestType(SEARCH_CONFIGS):
      return {};
    case successType(SEARCH_CONFIGS):
      return payload.response;
    case failureType(SEARCH_CONFIGS):
      return {};
    default:
      return state;
  }
}

const getSearchConfigsState = (state) => state.configs.searchConfigs;

export const getSearching = state => getSearchConfigsState(state).searching;
export const getConfigs = state => getSearchConfigsState(state).configs;

export default combineReducers({
  searching,
  configs,
});