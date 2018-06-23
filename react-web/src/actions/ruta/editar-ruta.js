// Editar ruta
export const REQUEST_EDITAR_RUTA = "ruta/requestEditarRuta";
export const SUCCESS_EDITAR_RUTA = "ruta/successEditarRuta";
export const ERROR_EDITAR_RUTA = "ruta/errorEditarRuta";

export const requestEditarRuta = (data) => ({
  type: REQUEST_EDITAR_RUTA,
  payload: data,
});

export const successEditarRuta = (data) => ({
  type: SUCCESS_EDITAR_RUTA,
  payload: data,
});

export const errorEditarRuta = (error) => ({
  type: ERROR_EDITAR_RUTA,
  payload: error,
});