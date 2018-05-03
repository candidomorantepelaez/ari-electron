// Guardar cliente
export const REQUEST_GUARDAR_CLIENTE = "cliente/requestGuardarCliente";
export const SUCCESS_GUARDAR_CLIENTE = "cliente/successGuardarCliente";
export const ERROR_GUARDAR_CLIENTE = "cliente/errorGuardarCliente";

export const requestGuardarCliente = (cliente) => ({
  type: REQUEST_GUARDAR_CLIENTE,
  payload: cliente,
});

export const successGuardarCliente = (data) => ({
  type: SUCCESS_GUARDAR_CLIENTE,
  payload: data,
});

export const errorGuardarCliente = (error) => ({
  type: ERROR_GUARDAR_CLIENTE,
  payload: error,
});