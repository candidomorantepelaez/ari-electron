import { SEARCH_ROUTES } from "routes/actions";
import { requestType, successType, failureType } from "fredux";
import { combineReducers } from 'redux';

const initialState = {
  searchRoutes: {
    searchingRoutes: false,
    routes: [],
  },
};

export function searchingRoutes(state = initialState.searchRoutes.searchingRoutes, { type }) {
  switch(type){
    case requestType(SEARCH_ROUTES):
      return true;
    case successType(SEARCH_ROUTES):
      return false;
    case failureType(SEARCH_ROUTES):
      return false;
    default:
      return state;
  }
}

export function routes(state=initialState.searchRoutes.routes, { type, payload }) {
  switch(type){
    case requestType(SEARCH_ROUTES):
      return [];
    case successType(SEARCH_ROUTES):
      return payload.response;
    case failureType(SEARCH_ROUTES):
      return [];
    default:
      return state;
  }
}

const getSearchRoutesState = (state) => state.routes.searchRoutes;

export const getSearchingRoutes = state => getSearchRoutesState(state).searchingRoutes;
export const getRoutes = state => getSearchRoutesState(state).routes;

export default combineReducers({
  searchingRoutes,
  routes,
});