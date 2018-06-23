// Contar productos
export const REQUEST_CONTAR_PRODUCTOS = "producto/requestContarProductos";
export const SUCCESS_CONTAR_PRODUCTOS = "producto/successContarProductos";
export const ERROR_CONTAR_PRODUCTOS = "producto/errorContarProductos";

export const requestContarProductos = () => ({
  type: REQUEST_CONTAR_PRODUCTOS
});

export const successContarProductos = (data) => ({
  type: SUCCESS_CONTAR_PRODUCTOS,
  payload: data,
});

export const errorContarProductos = () => ({
  type: ERROR_CONTAR_PRODUCTOS,
});