import { PROMISE_CALL } from "fredux";
import api from "./api";

export const DELETE_ROUTE = "routes/deleteRoute";
export const EDIT_ROUTE = "routes/editRoute";
export const SAVE_ROUTE = "routes/saveRoute";
export const SEARCH_ROUTE = "routes/searchRoute";
export const SEARCH_ROUTES = "routes/searchRoutes";
export const COUNT_ROUTES = "routes/countRoutes";

export const deleteRoute = (id) => ({
  type: DELETE_ROUTE,
  [PROMISE_CALL]: () => api.deleteRoute(id),
});

export const editRoute = (route) => ({
  type: EDIT_ROUTE,
  [PROMISE_CALL]: () => api.editRoute(route),
});

export const saveRoute = (route) => ({
  type: SAVE_ROUTE,
  [PROMISE_CALL]: () => api.saveRoute(route),
});

export const searchRoute = (id) => ({
  type: SEARCH_ROUTE,
  [PROMISE_CALL]: () => api.searchRoute(id),
});

export const searchRoutes = () => ({
  type: SEARCH_ROUTES,
  [PROMISE_CALL]: () => api.searchRoutes(),
});

export const countRoutes = () => ({
  type: COUNT_ROUTES,
  [PROMISE_CALL]: () => api.countRoutes(),
});
