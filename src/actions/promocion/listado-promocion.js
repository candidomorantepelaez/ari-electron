// Listado promocions
export const REQUEST_LISTADO_PROMOCIONS = "promocion/requestListadoPromocions";
export const SUCCESS_LISTADO_PROMOCIONS = "promocion/successListadoPromocions";
export const ERROR_LISTADO_PROMOCIONS = "promocion/errorListadoPromocions";

export const requestListadoPromocions = () => ({
  type: REQUEST_LISTADO_PROMOCIONS
});

export const successListadoRPromocions = (data) => ({
  type: SUCCESS_LISTADO_PROMOCIONS,
  payload: data,
});

export const errorListadoPromocions = () => ({
  type: ERROR_LISTADO_PROMOCIONS,
});