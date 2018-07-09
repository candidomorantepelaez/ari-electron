import { PROMISE_CALL } from "fredux";
import api from "clients/api";

export const DELETE_CLIENT = "clients/deleteClient";
export const EDIT_CLIENT = "clients/editClient";
export const SAVE_CLIENT = "clients/saveClient";
export const SEARCH_CLIENT = "clients/searchClient";
export const SEARCH_CLIENTS = "clients/searchClients";
export const SEARCH_CLIENT_WITH_ROUTE = "clients/searchClientWithRoute";
export const SEARCH_CLIENTS_WITH_ROUTE = "clients/searchClientsWithRoute";
export const COUNT_CLIENTS = "clients/countClients";

export const deleteClient = (id) => ({
  type: DELETE_CLIENT,
  [PROMISE_CALL]: () => api.deleteClient(id),
});

export const editClient = (cliente) => ({
  type: EDIT_CLIENT,
  [PROMISE_CALL]: () => api.editClient(cliente),
});

export const saveClient = (cliente) => ({
  type: SAVE_CLIENT,
  [PROMISE_CALL]: () => api.saveClient(cliente),
});

export const searchClient = (id) => ({
  type: SEARCH_CLIENT,
  [PROMISE_CALL]: () => api.searchClient(id),
});

export const searchClients = () => ({
  type: SEARCH_CLIENTS,
  [PROMISE_CALL]: () => api.searchClients(),
});

export const searchClientWithRoute = (id) => ({
  type: SEARCH_CLIENT_WITH_ROUTE,
  [PROMISE_CALL]: () => api.searchClientWithRoute(id),
});

export const searchClientsWithRoute = () => ({
  type: SEARCH_CLIENTS_WITH_ROUTE,
  [PROMISE_CALL]: () => api.searchClientsWithRoute(),
});

export const countClients = () => ({
  type: COUNT_CLIENTS,
  [PROMISE_CALL]: () => api.countClients(),
});
