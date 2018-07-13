import { requestType, successType, failureType } from "fredux";
import { SEARCH_ROUTE } from "routes/actions";
import { combineReducers } from 'redux';

const initialState = {
  searchRoute: {
    searching: false,
    route: {},
  },
};

export function searching(state = initialState.searchRoute.searching, { type }) {
  switch(type){
    case requestType(SEARCH_ROUTE):
      return true;
    case successType(SEARCH_ROUTE):
      return false;
    case failureType(SEARCH_ROUTE):
      return false;
    default:
      return state;
  }
}

export function route(state=initialState.searchRoute.route, { type, payload }) {
  switch(type){
    case requestType(SEARCH_ROUTE):
      return {};
    case successType(SEARCH_ROUTE):
      return payload.response;
    case failureType(SEARCH_ROUTE):
      return {};
    default:
      return {};
  }
}

const getSearchRouteState = (state) => state.routes.searchRoute;

export const getSearching = state => getSearchRouteState(state).searching;
export const getRoute = state => getSearchRouteState(state).route;

export default combineReducers({
  searching,
  route,
});