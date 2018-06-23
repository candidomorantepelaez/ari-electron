// buscar cliente por id
export const REQUEST_BUSCAR_CLIENTE_CON_RUTA = "cliente/requestBuscarClienteConRuta";
export const SUCCESS_BUSCAR_CLIENTE_CON_RUTA = "cliente/successBuscarClienteConRuta";
export const ERROR_BUSCAR_CLIENTE_CON_RUTA = "cliente/errorBuscarClienteConRuta";

export const requestBuscarClienteConRuta = () => ({
  type: REQUEST_BUSCAR_CLIENTE_CON_RUTA
});

export const successBuscarClienteConRuta = (data) => ({
  type: SUCCESS_BUSCAR_CLIENTE_CON_RUTA,
  payload: data,
});

export const errorBuscarClienteConRuta = () => ({
  type: ERROR_BUSCAR_CLIENTE_CON_RUTA,
});