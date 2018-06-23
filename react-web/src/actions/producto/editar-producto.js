// Editar producto
export const REQUEST_EDITAR_PRODUCTO = "producto/requestEditarProducto";
export const SUCCESS_EDITAR_PRODUCTO = "producto/successEditarProducto";
export const ERROR_EDITAR_PRODUCTO = "producto/errorEditarProducto";

export const requestEditarProducto = (data) => ({
  type: REQUEST_EDITAR_PRODUCTO,
  payload: data,
});

export const successEditarProducto = (data) => ({
  type: SUCCESS_EDITAR_PRODUCTO,
  payload: data,
});

export const errorEditarProducto = (error) => ({
  type: ERROR_EDITAR_PRODUCTO,
  payload: error,
});