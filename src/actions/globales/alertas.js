export const MOSTRAR_ALERTA = "globales/mostrarAlerta";
export const CERRAR_ALERTA = "globales/cerrarAlerta";

export const mostrarAlerta = (data) => ({
  type: MOSTRAR_ALERTA,
  payload: data,
});

export const cerrarAlerta = (data) => ({
  type: CERRAR_ALERTA,
  payload: data,
});
