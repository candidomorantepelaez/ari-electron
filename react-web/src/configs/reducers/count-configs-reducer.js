import { requestType, successType, failureType } from "fredux";
import { COUNT_CONFIGS } from "configs/actions";
import { combineReducers } from 'redux';

const initialState = {
  countConfigs: {
    countingConfigs: false,
    numberOfConfigs: 0,
  },
};

export function countingConfigs(state = initialState.countConfigs.countingConfigs, { type }) {
  switch(type){
    case requestType(COUNT_CONFIGS):
      return true;
    case successType(COUNT_CONFIGS):
      return false;
    case failureType(COUNT_CONFIGS):
      return false;
    default:
      return state;
  }
}

export function numberOfConfigs(state=initialState.countConfigs.numberOfConfigs, { type, payload }) {
  switch(type){
    case requestType(COUNT_CONFIGS):
      return 0;
    case successType(COUNT_CONFIGS):
      return payload.numeroRutas;
    case failureType(COUNT_CONFIGS):
      return 0;
    default:
      return state;
  }
}

const getCountConfigs = (state) => state.configs.countConfigs;

export const getCountingConfigs = state => getCountConfigs(state).countingConfigs;
export const getNumberOfConfigs = state => getCountConfigs(state).numberOfConfigs;

export default combineReducers({
  countingConfigs,
  numberOfConfigs,
});