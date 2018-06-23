// Borrar ruta
export const REQUEST_BORRAR_RUTA = "ruta/requestBorrarRuta";
export const SUCCESS_BORRAR_RUTA = "ruta/successBorrarRuta";
export const ERROR_BORRAR_RUTA = "ruta/errorBorrarRuta";

export const requestBorrarRuta = () => ({
  type: REQUEST_BORRAR_RUTA
});

export const successBorrarRuta = (data) => ({
  type: SUCCESS_BORRAR_RUTA,
  payload: data,
});

export const errorBorrarRuta = (error) => ({
  type: ERROR_BORRAR_RUTA,
  payload: error,
});
