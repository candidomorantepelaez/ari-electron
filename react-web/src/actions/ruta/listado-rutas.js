// Listado rutas
export const REQUEST_LISTADO_RUTAS = "ruta/requestListadoRutas";
export const SUCCESS_LISTADO_RUTAS = "ruta/successListadoRutas";
export const ERROR_LISTADO_RUTAS = "ruta/errorListadoRutas";

export const requestListadoRutas = () => ({
  type: REQUEST_LISTADO_RUTAS
});

export const successListadoRutas = (data) => ({
  type: SUCCESS_LISTADO_RUTAS,
  payload: data,
});

export const errorListadoRutas = () => ({
  type: ERROR_LISTADO_RUTAS,
});