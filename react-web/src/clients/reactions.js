import { successType, failureType } from "fredux";
import { DELETE_CLIENT,
  SAVE_CLIENT, EDIT_CLIENT,
  SEARCH_CLIENT_WITH_ROUTE,
  SEARCH_CLIENTS_WITH_ROUTE } from "clients/actions";
import { openAlert } from "core/application/actions/alert-actions";
import history from "core/application/routes/history";


const reactions = [
  {
    match: successType(DELETE_CLIENT),
    reaction: () => {
      history.push("/clients");
      return openAlert({ type: "success", message: "Cliente borrado correctamente" });
    }
  }, {
    match: failureType(DELETE_CLIENT),
    reaction: () => openAlert({ type: "warning", message: "Error al borrar cliente" }),
  }, {
    match: successType(SAVE_CLIENT),
    reaction: () => {
      history.push("/clients");
      return openAlert({ type: "success", message: "Cliente creado correctamente" });
    }
  }, {
    match: failureType(SAVE_CLIENT),
    reaction: () => openAlert({ type: "warning", message: "Error al crear cliente" }),
  }, {
    match: successType(EDIT_CLIENT),
    reaction: () => {
      history.push("/clients");
      return openAlert({ type: "success", message: "Cliente editado correctamente" });
    }
  }, {
    match: failureType(EDIT_CLIENT),
    reaction: () => openAlert({ type: "warning", message: "Error al editar cliente" }),
  }, {
    match: failureType(SEARCH_CLIENTS_WITH_ROUTE),
    reaction: () => openAlert({ type: "warning", message: "Error al recuperar datos de los clientes" }),
  }, {
    match: failureType(SEARCH_CLIENT_WITH_ROUTE),
    reaction: () => openAlert({ type: "warning", message: "Error al recuperar datos del cliente" }),
  }
];

export default reactions;
