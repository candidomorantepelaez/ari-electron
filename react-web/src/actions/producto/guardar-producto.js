// Guardar producto
export const REQUEST_GUARDAR_PRODUCTO = "producto/requestGuardarProducto";
export const SUCCESS_GUARDAR_PRODUCTO = "producto/successGuardarProducto";
export const ERROR_GUARDAR_PRODUCTO = "producto/errorGuardarProducto";

export const requestGuardarProducto = (producto) => ({
  type: REQUEST_GUARDAR_PRODUCTO,
  payload: producto,
});

export const successGuardarProducto = (producto) => ({
  type: SUCCESS_GUARDAR_PRODUCTO,
  payload: producto,
});

export const errorGuardarProducto = (error) => ({
  type: ERROR_GUARDAR_PRODUCTO,
  payload: error,
});