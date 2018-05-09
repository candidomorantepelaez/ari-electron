// Listado productos
export const REQUEST_LISTADO_PRODUCTOS = "producto/requestListadoProductos";
export const SUCCESS_LISTADO_PRODUCTOS = "producto/successListadoProductos";
export const ERROR_LISTADO_PRODUCTOS = "producto/errorListadoProductos";

export const requestListadoProductos = () => ({
  type: REQUEST_LISTADO_PRODUCTOS
});

export const successListadoRProductos = (data) => ({
  type: SUCCESS_LISTADO_PRODUCTOS,
  payload: data,
});

export const errorListadoProductos = () => ({
  type: ERROR_LISTADO_PRODUCTOS,
});