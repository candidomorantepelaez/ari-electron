// Guardar promocion
export const REQUEST_GUARDAR_PROMOCION = "promocion/requestGuardarPromocion";
export const SUCCESS_GUARDAR_PROMOCION = "promocion/successGuardarPromocion";
export const ERROR_GUARDAR_PROMOCION = "promocion/errorGuardarPromocion";

export const requestGuardarPromocion = (promocion) => ({
  type: REQUEST_GUARDAR_PROMOCION,
  payload: promocion,
});

export const successGuardarPromocion = (promocion) => ({
  type: SUCCESS_GUARDAR_PROMOCION,
  payload: promocion,
});

export const errorGuardarPromocion = (error) => ({
  type: ERROR_GUARDAR_PROMOCION,
  payload: error,
});