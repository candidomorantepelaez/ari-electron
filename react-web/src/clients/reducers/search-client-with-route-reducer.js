import { requestType, successType, failureType } from "fredux";
import { SEARCH_CLIENT_WITH_ROUTE } from "clients/actions";
import { combineReducers } from 'redux';

const initialState = {
  searchClientWithRoute: {
    searchingClientWithRoute: false,
    clientWithRoute: {},
  }
};

export function searchingClientWithRoute(state = initialState.searchClientWithRoute.searchingClientWithRoute, { type }) {
  switch(type){
    case requestType(SEARCH_CLIENT_WITH_ROUTE):
      return true;
    case successType(SEARCH_CLIENT_WITH_ROUTE):
      return false;
    case failureType(SEARCH_CLIENT_WITH_ROUTE):
      return false;
    default:
      return state;
  }
}


  export function clientWithRoute(state = initialState.searchClientWithRoute.clientWithRoute, { type, payload }) {
  switch(type){
    case requestType(SEARCH_CLIENT_WITH_ROUTE):
      return {};
    case successType(SEARCH_CLIENT_WITH_ROUTE):
      return payload.response;
    case failureType(SEARCH_CLIENT_WITH_ROUTE):
      return {};
    default:
      return state;
  }
}

const getSearchClientWithRouteState = (state) => state.clients.searchClientWithRoute;

export const getSearchClientWithRoute = state => getSearchClientWithRouteState(state).searchingClientWithRoute;
export const getClientWithRoute = state => getSearchClientWithRouteState(state).clientWithRoute;

export default combineReducers({
  searchingClientWithRoute,
  clientWithRoute
});