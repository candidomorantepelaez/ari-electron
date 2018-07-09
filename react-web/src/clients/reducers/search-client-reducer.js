import { requestType, successType, failureType } from "fredux";
import { SEARCH_CLIENT } from "./../actions";
import { combineReducers } from 'redux';

const initialState = {
  searchClient: {
    searchingClient: false,
    client: {},
  },
};

export function searchingClient(state = initialState.searchClient.searchingClient, { type }) {
  switch(type){
    case requestType(SEARCH_CLIENT):
      return true;
    case successType(SEARCH_CLIENT):
      return false;
    case failureType(SEARCH_CLIENT):
      return false;
    default:
      return state;
  }
}

export function client(state=initialState.searchClient.client, { type, payload }) {
  switch(type){
    case requestType(SEARCH_CLIENT):
      return {};
    case successType(SEARCH_CLIENT):
      return payload;
    case failureType(SEARCH_CLIENT):
      return {};
    default:
      return {};
  }
}

const getSearchClientState = (state) => state.clients.searchClient;

export const getSearchingClient = state => getSearchClientState(state).searchingClient;
export const getClient = state => getSearchClientState(state).client;

export default combineReducers({
  searchingClient,
  client,
});