// Borrar promocion
export const REQUEST_BORRAR_PROMOCION = "promocion/requestBorrarPromocion";
export const SUCCESS_BORRAR_PROMOCION = "promocion/successBorrarPromocion";
export const ERROR_BORRAR_PROMOCION = "promocion/errorBorrarPromocion";

export const requestBorrarPromocion = () => ({
  type: REQUEST_BORRAR_PROMOCION
});

export const successBorrarPromocion = (data) => ({
  type: SUCCESS_BORRAR_PROMOCION,
  payload: data,
});

export const errorBorrarPromocion = (error) => ({
  type: ERROR_BORRAR_PROMOCION,
  payload: error,
});
