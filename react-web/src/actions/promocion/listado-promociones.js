// Listado promocions
export const REQUEST_LISTADO_PROMOCIONES = "promocion/requestListadoPromociones";
export const SUCCESS_LISTADO_PROMOCIONES = "promocion/successListadoPromociones";
export const ERROR_LISTADO_PROMOCIONES = "promocion/errorListadoPromociones";

export const requestListadoPromociones = () => ({
  type: REQUEST_LISTADO_PROMOCIONES
});

export const successListadoPromociones = (data) => ({
  type: SUCCESS_LISTADO_PROMOCIONES,
  payload: data,
});

export const errorListadoPromociones = () => ({
  type: ERROR_LISTADO_PROMOCIONES,
});