// buscar venta por id
export const REQUEST_BUSCAR_VENTA = "venta/requestBuscarVenta";
export const SUCCESS_BUSCAR_VENTA = "venta/successBuscarVenta";
export const ERROR_BUSCAR_VENTA = "venta/errorBuscarVenta";

export const requestBuscarVenta = () => ({
  type: REQUEST_BUSCAR_VENTA
});

export const successBuscarVenta = (data) => ({
  type: SUCCESS_BUSCAR_VENTA,
  payload: data,
});

export const errorBuscarVenta = () => ({
  type: ERROR_BUSCAR_VENTA,
});