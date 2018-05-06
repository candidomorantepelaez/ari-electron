// Listado ventas
export const REQUEST_LISTADO_VENTAS = "venta/requestListadoVentas";
export const SUCCESS_LISTADO_VENTAS = "venta/successListadoVentas";
export const ERROR_LISTADO_VENTAS = "venta/errorListadoVentas";

export const requestListadoVentas = () => ({
  type: REQUEST_LISTADO_VENTAS
});

export const successListadoRVentas = (data) => ({
  type: SUCCESS_LISTADO_VENTAS,
  payload: data,
});

export const errorListadoVentas = () => ({
  type: ERROR_LISTADO_VENTAS,
});