// Listado clientes
export const REQUEST_LISTADO_CLIENTES = "cliente/requestListadoClientes";
export const SUCCESS_LISTADO_CLIENTES = "cliente/successListadoClientes";
export const ERROR_LISTADO_CLIENTES = "cliente/errorListadoClientes";

export const requestListadoClientes = () => ({
  type: REQUEST_LISTADO_CLIENTES
});

export const successListadoClientes = (data) => ({
  type: SUCCESS_LISTADO_CLIENTES,
  payload: data,
});

export const errorListadoClientes = () => ({
  type: ERROR_LISTADO_CLIENTES,
});