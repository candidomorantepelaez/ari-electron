// Editar cliente
export const REQUEST_EDITAR_CLIENTE = "cliente/requestEditarCliente";
export const SUCCESS_EDITAR_CLIENTE = "cliente/successEditarCliente";
export const ERROR_EDITAR_CLIENTE = "cliente/errorEditarCliente";

export const requestEditarCliente = (data) => ({
  type: REQUEST_EDITAR_CLIENTE,
  payload: data,
});

export const successEditarCliente = (data) => ({
  type: SUCCESS_EDITAR_CLIENTE,
  payload: data,
});

export const errorEditarCliente = (error) => ({
  type: ERROR_EDITAR_CLIENTE,
  payload: error,
});