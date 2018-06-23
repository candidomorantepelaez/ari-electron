// buscar promocion por id
export const REQUEST_BUSCAR_PROMOCION = "promocion/requestBuscarPromocion";
export const SUCCESS_BUSCAR_PROMOCION = "promocion/successBuscarPromocion";
export const ERROR_BUSCAR_PROMOCION = "promocion/errorBuscarPromocion";

export const requestBuscarPromocion = () => ({
  type: REQUEST_BUSCAR_PROMOCION
});

export const successBuscarPromocion = (data) => ({
  type: SUCCESS_BUSCAR_PROMOCION,
  payload: data,
});

export const errorBuscarPromocion = () => ({
  type: ERROR_BUSCAR_PROMOCION,
});