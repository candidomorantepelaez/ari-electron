// contar clientes
export const REQUEST_CONTAR_CLIENTES = "cliente/requestContarClientes";
export const SUCCESS_CONTAR_CLIENTES = "cliente/successContarClientes";
export const ERROR_CONTAR_CLIENTES = "cliente/errorContarClientes";

export const requestContarClientes = () => ({
  type: REQUEST_CONTAR_CLIENTES
});

export const successContarClientes = (data) => ({
  type: SUCCESS_CONTAR_CLIENTES,
  payload: data,
});

export const errorContarClientes = () => ({
  type: ERROR_CONTAR_CLIENTES,
});