// Borrar cliente
export const REQUEST_BORRAR_CLIENTE = "cliente/requestBorrarCliente";
export const SUCCESS_BORRAR_CLIENTE = "cliente/successBorrarCliente";
export const ERROR_BORRAR_CLIENTE = "cliente/errorBorrarCliente";

export const requestBorrarCliente = () => ({
  type: REQUEST_BORRAR_CLIENTE
});

export const successBorrarCliente = (data) => ({
  type: SUCCESS_BORRAR_CLIENTE,
  payload: data,
});

export const errorBorrarCliente = (error) => ({
  type: ERROR_BORRAR_CLIENTE,
  payload: error,
});
