// Borrar producto
export const REQUEST_BORRAR_PRODUCTO = "producto/requestBorrarProducto";
export const SUCCESS_BORRAR_PRODUCTO = "producto/successBorrarProducto";
export const ERROR_BORRAR_PRODUCTO = "producto/errorBorrarProducto";

export const requestBorrarProducto = () => ({
  type: REQUEST_BORRAR_PRODUCTO
});

export const successBorrarProducto = (data) => ({
  type: SUCCESS_BORRAR_PRODUCTO,
  payload: data,
});

export const errorBorrarProducto = (error) => ({
  type: ERROR_BORRAR_PRODUCTO,
  payload: error,
});
