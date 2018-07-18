import { requestType, successType, failureType } from "fredux";
import { SEARCH_CLIENTS_WITH_ROUTE } from "clients/actions";
import { combineReducers } from 'redux';

const initialState = {
  searchClientsWithRoute: {
    searchingClientsWithRoute: false,
    clientsWithRoute: [],
  },
};

export function searchingClientsWithRoute(state = initialState.searchClientsWithRoute.searchingClientsWithRoute, { type }) {
  switch(type){
    case requestType(SEARCH_CLIENTS_WITH_ROUTE):
      return true;
    case successType(SEARCH_CLIENTS_WITH_ROUTE):
      return false;
    case failureType(SEARCH_CLIENTS_WITH_ROUTE):
      return false;
    default:
      return state;
  }
}

export function clientsWithRoute(state=initialState.searchClientsWithRoute.clientsWithRoute, { type, payload }) {
  switch(type){
    case requestType(SEARCH_CLIENTS_WITH_ROUTE):
      return [];
    case successType(SEARCH_CLIENTS_WITH_ROUTE):
      return payload.response;
    case failureType(SEARCH_CLIENTS_WITH_ROUTE):
      return [];
    default:
      return state;
  }
}

const getSearchClientsWithRouteState = (state) => state.clients.searchClientsWithRoute;

export const getSearchingClientsWithRoute = state => getSearchClientsWithRouteState(state).searchingClientsWithRoute;
export const getClientsWithRoute = state => getSearchClientsWithRouteState(state).clientsWithRoute;

export default combineReducers({
  searchingClientsWithRoute,
  clientsWithRoute
});
