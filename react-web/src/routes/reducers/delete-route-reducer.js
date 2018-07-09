import { requestType, successType, failureType } from "fredux";
import { DELETE_ROUTE } from "routes/actions";
import { combineReducers } from 'redux';

const initialState = {
  deleteRoute: {
    deleting: false,
    routeDeleted: {},
  },
};

export function deleting(state=initialState.deleteRoute.deleting, { type }) {
  switch(type){
    case requestType(DELETE_ROUTE):
      return true;
    case successType(DELETE_ROUTE):
      return false;
    case failureType(DELETE_ROUTE):
      return false;
    default:
      return state;
  }
}

export function routeDeleted(state=initialState.deleteRoute.routeDeleted, { type, payload }) {
  switch(type){
    case requestType(DELETE_ROUTE):
      return state;
    case successType(DELETE_ROUTE):
      return payload;
    case failureType(DELETE_ROUTE):
      return state;
    default:
      return state;
  }
}

const getDeleteRouteState = (state) => state.routes.deleteRoute;

export const getDeleting = state => getDeleteRouteState(state).deleting;

export const getRouteDeleted = state => getDeleteRouteState(state).routeDeleted;

export default combineReducers({
  deleting,
  routeDeleted,
});
