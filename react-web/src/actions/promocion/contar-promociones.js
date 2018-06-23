// Contar promociones
export const REQUEST_CONTAR_PROMOCIONES = "promocion/requestContarPromociones";
export const SUCCESS_CONTAR_PROMOCIONES = "promocion/successContarPromociones";
export const ERROR_CONTAR_PROMOCIONES = "promocion/errorContarPromociones";

export const requestContarPromociones = () => ({
  type: REQUEST_CONTAR_PROMOCIONES
});

export const successContarPromociones = (data) => ({
  type: SUCCESS_CONTAR_PROMOCIONES,
  payload: data,
});

export const errorContarPromociones = () => ({
  type: ERROR_CONTAR_PROMOCIONES,
});