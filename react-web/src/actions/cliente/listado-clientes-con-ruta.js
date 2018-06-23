// Listado clientes con ruta
export const REQUEST_LISTADO_CLIENTES_CON_RUTA = "cliente/requestListadoClientesConRuta";
export const SUCCESS_LISTADO_CLIENTES_CON_RUTA = "cliente/successListadoClientesConRuta";
export const ERROR_LISTADO_CLIENTES_CON_RUTA = "cliente/errorListadoClientesConRuta";

export const requestListadoClientesConRuta = () => ({
  type: REQUEST_LISTADO_CLIENTES_CON_RUTA
});

export const successListadoClientesConRuta = (data) => ({
  type: SUCCESS_LISTADO_CLIENTES_CON_RUTA,
  payload: data,
});

export const errorListadoClientesConRuta = () => ({
  type: ERROR_LISTADO_CLIENTES_CON_RUTA,
});