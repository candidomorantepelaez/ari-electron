// Editar promocion
export const REQUEST_EDITAR_PROMOCION = "promocion/requestEditarPromocion";
export const SUCCESS_EDITAR_PROMOCION = "promocion/successEditarPromocion";
export const ERROR_EDITAR_PROMOCION = "promocion/errorEditarPromocion";

export const requestEditarPromocion = (data) => ({
  type: REQUEST_EDITAR_PROMOCION,
  payload: data,
});

export const successEditarPromocion = (data) => ({
  type: SUCCESS_EDITAR_PROMOCION,
  payload: data,
});

export const errorEditarPromocion = (error) => ({
  type: ERROR_EDITAR_PROMOCION,
  payload: error,
});