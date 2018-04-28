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

// Guardar cliente
export const REQUEST_GUARDAR_CLIENTE = "cliente/requestGuardarClientes";
export const SUCCESS_GUARDAR_CLIENTE = "cliente/successGuardarClientes";
export const ERROR_GUARDAR_CLIENTE = "cliente/errorGuardarClientes";

export const requestGuardarClientes = (cliente) => ({
  type: REQUEST_GUARDAR_CLIENTE,
  payload: cliente,
});

export const successGuardarClientes = (data) => ({
  type: SUCCESS_GUARDAR_CLIENTE,
  payload: data,
});

export const errorGuardarClientes = (error) => ({
  type: ERROR_GUARDAR_CLIENTE,
  payload: error,
});

// Editar cliente
export const REQUEST_EDITAR_CLIENTE = "cliente/requestEditarClientes";
export const SUCCESS_EDITAR_CLIENTE = "cliente/successEditarClientes";
export const ERROR_EDITAR_CLIENTE = "cliente/errorEditarClientes";

export const requestEditarClientes = (data) => ({
  type: REQUEST_EDITAR_CLIENTE,
  payload: data,
});

export const successEditarClientes = (data) => ({
  type: SUCCESS_EDITAR_CLIENTE,
  payload: data,
});

export const errorEditarClientes = (error) => ({
  type: ERROR_EDITAR_CLIENTE,
  payload: error,
});

// Borrar cliente
export const REQUEST_BORRAR_CLIENTE = "cliente/requestBorrarClientes";
export const SUCCESS_BORRAR_CLIENTE = "cliente/successBorrarClientes";
export const ERROR_BORRAR_CLIENTE = "cliente/errorBorrarClientes";

export const requestBorrarClientes = () => ({
  type: REQUEST_BORRAR_CLIENTE
});

export const successBorrarClientes = (data) => ({
  type: SUCCESS_BORRAR_CLIENTE,
  payload: data,
});

export const errorBorrarClientes = (error) => ({
  type: ERROR_BORRAR_CLIENTE,
  payload: error,
});
