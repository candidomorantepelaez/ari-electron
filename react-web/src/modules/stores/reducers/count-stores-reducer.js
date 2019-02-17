import { requestType, successType, failureType } from 'fredux'
import { COUNT_STORES } from 'modules/stores/actions'
import { combineReducers } from 'redux'


const initialState = {
  countStores: {
    countingStores: false,
    numberOfStores: 0,
  },
}

export function countingStores(state = initialState.countStores.countingStores, { type }) {
  switch (type) {
    case requestType(COUNT_STORES):
      return true
    case successType(COUNT_STORES):
      return false
    case failureType(COUNT_STORES):
      return false
    default:
      return state
  }
}

export function numberOfStores(state = initialState.countStores.numberOfStores, { type, payload }) {
  switch (type) {
    case requestType(COUNT_STORES):
      return 0
    case successType(COUNT_STORES):
      return payload.numberFiles
    case failureType(COUNT_STORES):
      return 0
    default:
      return state
  }
}

const getCountStoresState = state => state.stores.countStores

export const getCountingClients = state => getCountStoresState(state).countingStores

export const getNumberOfClients = state => getCountStoresState(state).numberOfStores

export default combineReducers({
  countingStores,
  numberOfStores,
})
