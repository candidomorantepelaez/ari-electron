// Contar rutas
export const REQUEST_CONTAR_RUTAS = "ruta/requestContarRutas";
export const SUCCESS_CONTAR_RUTAS = "ruta/successContarRutas";
export const ERROR_CONTAR_RUTAS = "ruta/errorContarRutas";

export const requestContarRutas = () => ({
  type: REQUEST_CONTAR_RUTAS
});

export const successContarRutas = (data) => ({
  type: SUCCESS_CONTAR_RUTAS,
  payload: data,
});

export const errorContarRutas = () => ({
  type: ERROR_CONTAR_RUTAS,
});