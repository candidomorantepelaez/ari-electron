// Guardar venta
export const REQUEST_GUARDAR_VENTA = "venta/requestGuardarVenta";
export const SUCCESS_GUARDAR_VENTA = "venta/successGuardarVenta";
export const ERROR_GUARDAR_VENTA = "venta/errorGuardarVenta";

export const requestGuardarVenta = (venta) => ({
  type: REQUEST_GUARDAR_VENTA,
  payload: venta,
});

export const successGuardarVenta = (venta) => ({
  type: SUCCESS_GUARDAR_VENTA,
  payload: venta,
});

export const errorGuardarVenta = (error) => ({
  type: ERROR_GUARDAR_VENTA,
  payload: error,
});