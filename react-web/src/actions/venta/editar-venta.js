// Editar venta
export const REQUEST_EDITAR_VENTA = "venta/requestEditarVenta";
export const SUCCESS_EDITAR_VENTA = "venta/successEditarVenta";
export const ERROR_EDITAR_VENTA = "venta/errorEditarVenta";

export const requestEditarVenta = (data) => ({
  type: REQUEST_EDITAR_VENTA,
  payload: data,
});

export const successEditarVenta = (data) => ({
  type: SUCCESS_EDITAR_VENTA,
  payload: data,
});

export const errorEditarVenta = (error) => ({
  type: ERROR_EDITAR_VENTA,
  payload: error,
});