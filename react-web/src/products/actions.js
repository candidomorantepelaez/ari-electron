import { PROMISE_CALL } from "fredux";
import api from "products/api";

export const DELETE_PRODUCT = "products/deleteProduct";
export const EDIT_PRODUCT = "products/editProduct";
export const SAVE_PRODUCT = "products/saveProduct";
export const SEARCH_PRODUCT = "products/searchProduct";
export const SEARCH_PRODUCTS = "products/searchProducts";
export const COUNT_PRODUCTS = "products/countProducts";

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  [PROMISE_CALL]: () => api.deleteProduct(id),
});

export const editProduct = (product) => ({
  type: EDIT_PRODUCT,
  [PROMISE_CALL]: () => api.editProduct(product),
});

export const saveProduct = (product) => ({
  type: SAVE_PRODUCT,
  [PROMISE_CALL]: () => api.saveProduct(product),
});

export const searchProduct = (id) => ({
  type: SEARCH_PRODUCT,
  [PROMISE_CALL]: () => api.searchProduct(id),
});

export const searchProducts = () => ({
  type: SEARCH_PRODUCTS,
  [PROMISE_CALL]: () => api.searchProducts(),
});

export const countProducts = () => ({
  type: COUNT_PRODUCTS,
  [PROMISE_CALL]: () => api.countProducts(),
});
