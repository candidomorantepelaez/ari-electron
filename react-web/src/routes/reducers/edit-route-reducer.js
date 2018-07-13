import { requestType, successType, failureType } from "fredux";
import { EDIT_ROUTE } from "routes/actions";
import { combineReducers } from 'redux';

const initialState = {
  editRoute: {
    editing: false,
    routeEdited: {},
  },
};

export function editing(state=initialState.editRoute.editing, { type }) {
  switch(type){
    case requestType(EDIT_ROUTE):
      return true;
    case successType(EDIT_ROUTE):
      return false;
    case failureType(EDIT_ROUTE):
      return false;
    default:
      return state;
  }
}

export function routeEdited(state=initialState.editRoute.routeEdited, { type, payload }) {
  switch(type){
    case requestType(EDIT_ROUTE):
      return state;
    case successType(EDIT_ROUTE):
      return payload.response;
    case failureType(EDIT_ROUTE):
      return state;
    default:
      return state;
  }
}

const getEditRouteState = (state) => state.routes.editRoute;

export const getEditing = state => getEditRouteState(state).editing;
export const getRouteEdited = state => getEditRouteState(state).routeEdited;

export default combineReducers({
  editing,
  routeEdited,
});
