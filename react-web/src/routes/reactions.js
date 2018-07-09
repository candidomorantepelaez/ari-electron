import { successType, failureType } from "fredux";
import { SAVE_ROUTE } from "routes/actions";
import { openAlert } from "core/application/actions/alert-actions";


const reactions = [
  {
    match: successType(SAVE_ROUTE),
    reaction: () => openAlert({ type: "success", message: "Clientes buscados correctamente" }),
  }, {
    match: failureType(SAVE_ROUTE),
    reaction: () => openAlert({ type: "warning", message: "Cliente buscados erroneamente" }),
  }
];

export default reactions;
