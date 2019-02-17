import { requestType, successType, failureType } from "fredux";
import { SEARCH_CONFIG } from "configs/actions";
import { combineReducers } from 'redux';

const initialState = {
  searchConfig: {
    searching: false,
    config: {},
  },
};

export function searching(state = initialState.searchConfig.searching, { type }) {
  switch(type){
    case requestType(SEARCH_CONFIG):
      return true;
    case successType(SEARCH_CONFIG):
      return false;
    case failureType(SEARCH_CONFIG):
      return false;
    default:
      return state;
  }
}

export function config(state=initialState.searchConfig.config, { type, payload }) {
  switch(type){
    case requestType(SEARCH_CONFIG):
      return {};
    case successType(SEARCH_CONFIG):
      return payload.response;
    case failureType(SEARCH_CONFIG):
      return {};
    default:
      return state;
  }
}

const getSearchConfigState = (state) => state.configs.searchConfig;

export const getSearching = state => getSearchConfigState(state).searching;
export const getConfig = state => getSearchConfigState(state).config;

export default combineReducers({
  searching,
  config,
});