// Guardar ruta
export const REQUEST_GUARDAR_RUTA = "ruta/requestGuardarRuta";
export const SUCCESS_GUARDAR_RUTA = "ruta/successGuardarRuta";
export const ERROR_GUARDAR_RUTA = "ruta/errorGuardarRuta";

export const requestGuardarRuta = (ruta) => ({
  type: REQUEST_GUARDAR_RUTA,
  payload: ruta,
});

export const successGuardarRuta = (ruta) => ({
  type: SUCCESS_GUARDAR_RUTA,
  payload: ruta,
});

export const errorGuardarRuta = (error) => ({
  type: ERROR_GUARDAR_RUTA,
  payload: error,
});