// buscar producto por id
export const REQUEST_BUSCAR_PRODUCTO = "producto/requestBuscarProducto";
export const SUCCESS_BUSCAR_PRODUCTO = "producto/successBuscarProducto";
export const ERROR_BUSCAR_PRODUCTO = "producto/errorBuscarProducto";

export const requestBuscarProducto = () => ({
  type: REQUEST_BUSCAR_PRODUCTO
});

export const successBuscarProducto = (data) => ({
  type: SUCCESS_BUSCAR_PRODUCTO,
  payload: data,
});

export const errorBuscarProducto = () => ({
  type: ERROR_BUSCAR_PRODUCTO,
});