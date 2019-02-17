import { requestType, successType, failureType } from "fredux";
import { SAVE_ROUTE } from "routes/actions";
import { combineReducers } from 'redux';

const initialState = {
  saveRoute: {
    saving: false,
    routeSaved: {},
  },
};

export function saving(state=initialState.saveRoute.saving, { type }) {
  switch(type){
    case requestType(SAVE_ROUTE):
      return true;
    case successType(SAVE_ROUTE):
      return false;
    case failureType(SAVE_ROUTE):
      return false;
    default:
      return state;
  }
}

export function routeSaved(state=initialState.saveRoute.routeSaved, { type, payload }) {
  switch(type){
    case requestType(SAVE_ROUTE):
      return state;
    case successType(SAVE_ROUTE):
      return payload.response;
    case failureType(SAVE_ROUTE):
      return state;
    default:
      return state;
  }
}

const getSaveRouteState = (state) => state.routes.saveRoute;

export const getSaving = state => getSaveRouteState(state).saving;
export const getRouteSaved = state => getSaveRouteState(state).routeSaved

export default combineReducers({
  saving,
  routeSaved
});