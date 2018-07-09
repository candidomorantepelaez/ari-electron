import { failureType } from "fredux";
import { SEARCH_CLIENTS_WITH_ROUTE } from "clients/actions";
import { openAlert } from "core/application/actions/alert-actions";


const reactions = [
  {
    match: failureType(SEARCH_CLIENTS_WITH_ROUTE),
    reaction: () => openAlert({ type: "warning", message: "Cliente buscados erroneamente" }),
  }
];

export default reactions;
