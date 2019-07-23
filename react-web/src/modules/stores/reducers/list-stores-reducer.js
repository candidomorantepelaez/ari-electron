import { fredux, redux } from 'touka'
import { LIST_STORES } from 'stores/actions'


const { requestType, successType, failureType } = fredux
const { combineReducers } = redux

const initialState = {
  listStores: {
    listingStores: false,
    stores: [],
  },
}

export function listingStores(state = initialState.listStores.listingStores, { type }) {
  switch (type) {
    case requestType(LIST_STORES):
      return true
    case successType(LIST_STORES):
      return false
    case failureType(LIST_STORES):
      return false
    default:
      return state
  }
}

export function stores(state = initialState.listStores.stores, { type, payload }) {
  switch (type) {
    case requestType(LIST_STORES):
      return []
    case successType(LIST_STORES):
      return payload.response
    case failureType(LIST_STORES):
      return []
    default:
      return state
  }
}

const getListStoresState = state => state.stores.listStores

export const getListingStores = state => getListStoresState(state).listingStores
export const getStores = state => getListStoresState(state).stores

export default combineReducers({
  listingStores,
  stores,
})
