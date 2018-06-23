// Contar ventas
export const REQUEST_CONTAR_VENTAS = "venta/requestContarVentas";
export const SUCCESS_CONTAR_VENTAS = "venta/successContarVentas";
export const ERROR_CONTAR_VENTAS = "venta/errorContarVentas";

export const requestContarVentas = () => ({
  type: REQUEST_CONTAR_VENTAS
});

export const successContarVentas = (data) => ({
  type: SUCCESS_CONTAR_VENTAS,
  payload: data,
});

export const errorContarVentas = () => ({
  type: ERROR_CONTAR_VENTAS,
});