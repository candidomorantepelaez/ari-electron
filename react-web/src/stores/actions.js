import { PROMISE_CALL } from "fredux";
import api from "stores/api";

export const SAVE_STORE = "stores/saveStore";
export const UPDATE_STORE = "stores/updateStore";
export const FIND_ONE_STORE = "stores/findOneStore";
export const REMOVE_STORE = "stores/removeStore";
export const SEARCH_STORES = "stores/searchStores";
export const LIST_STORES = "stores/listStores";
export const PAGINATE_STORES = "stores/paginateStores";
export const COUNT_STORES = "stores/countStores";

export const saveStore = (cliente) => ({
  type: SAVE_STORE,
  [PROMISE_CALL]: () => api.saveStore(cliente),
});

export const updateStore = (id, cliente) => ({
  type: UPDATE_STORE,
  [PROMISE_CALL]: () => api.updateStore(id, cliente),
});

export const findOneStore = (id) => ({
  type: FIND_ONE_STORE,
  [PROMISE_CALL]: () => api.findOneStore(id),
});

export const removeStore = (id) => ({
  type: REMOVE_STORE,
  [PROMISE_CALL]: () => api.removeStore(id),
});

export const searchStores = (search) => ({
  type: SEARCH_STORES,
  [PROMISE_CALL]: () => api.searchStores(search),
});

export const listStores = () => ({
  type: LIST_STORES,
  [PROMISE_CALL]: () => api.listStores(),
});

export const paginateStores = (page) => ({
  type: PAGINATE_STORES,
  [PROMISE_CALL]: () => api.paginateStores(page),
});

export const countStores = () => ({
  type: COUNT_STORES,
  [PROMISE_CALL]: () => api.countStores(),
});
