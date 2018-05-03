// buscar cliente por id
export const REQUEST_BUSCAR_CLIENTE = "cliente/requestBuscarCliente";
export const SUCCESS_BUSCAR_CLIENTE = "cliente/successBuscarCliente";
export const ERROR_BUSCAR_CLIENTE = "cliente/errorBuscarCliente";

export const requestBuscarCliente = () => ({
  type: REQUEST_BUSCAR_CLIENTE
});

export const successBuscarCliente = (data) => ({
  type: SUCCESS_BUSCAR_CLIENTE,
  payload: data,
});

export const errorBuscarCliente = () => ({
  type: ERROR_BUSCAR_CLIENTE,
});