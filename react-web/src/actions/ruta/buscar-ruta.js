// buscar ruta por id
export const REQUEST_BUSCAR_RUTA = "ruta/requestBuscarRuta";
export const SUCCESS_BUSCAR_RUTA = "ruta/successBuscarRuta";
export const ERROR_BUSCAR_RUTA = "ruta/errorBuscarRuta";

export const requestBuscarRuta = () => ({
  type: REQUEST_BUSCAR_RUTA
});

export const successBuscarRuta = (data) => ({
  type: SUCCESS_BUSCAR_RUTA,
  payload: data,
});

export const errorBuscarRuta = () => ({
  type: ERROR_BUSCAR_RUTA,
});