import { PROMISE_CALL } from "fredux";
import api from "sales/api";

export const DELETE_SALE = "sales/deleteSale";
export const EDIT_SALE = "sales/editSale";
export const SAVE_SALE = "sales/saveSale";
export const SEARCH_SALE = "sales/searchSale";
export const SEARCH_SALES = "sales/searchSales";
export const COUNT_SALES = "sales/countSales";

export const deleteSale = (id) => ({
  type: DELETE_SALE,
  [PROMISE_CALL]: () => api.deleteSale(id),
});

export const editSale = (sale) => ({
  type: EDIT_SALE,
  [PROMISE_CALL]: () => api.editSale(sale),
});

export const saveSale = (sale) => ({
  type: SAVE_SALE,
  [PROMISE_CALL]: () => api.saveSale(sale),
});

export const searchSale = (id) => ({
  type: SEARCH_SALE,
  [PROMISE_CALL]: () => api.searchSale(id),
});

export const searchSales = () => ({
  type: SEARCH_SALES,
  [PROMISE_CALL]: () => api.searchSales(),
});

export const countSales = () => ({
  type: COUNT_SALES,
  [PROMISE_CALL]: () => api.countSales(),
});
