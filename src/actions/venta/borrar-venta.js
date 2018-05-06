// Borrar venta
export const REQUEST_BORRAR_VENTA = "venta/requestBorrarVenta";
export const SUCCESS_BORRAR_VENTA = "venta/successBorrarVenta";
export const ERROR_BORRAR_VENTA = "venta/errorBorrarVenta";

export const requestBorrarVenta = () => ({
  type: REQUEST_BORRAR_VENTA
});

export const successBorrarVenta = (data) => ({
  type: SUCCESS_BORRAR_VENTA,
  payload: data,
});

export const errorBorrarVenta = (error) => ({
  type: ERROR_BORRAR_VENTA,
  payload: error,
});
