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
      return openAlert({ type: "success", message: "clients.alerts.success.delete" });
    }
  }, {
    match: failureType(DELETE_CLIENT),
    reaction: () => openAlert({ type: "warning", message: "clients.alerts.failure.delete" }),
  }, {
    match: successType(SAVE_CLIENT),
    reaction: () => {
      history.push("/clients");
      return openAlert({ type: "success", message: "clients.alerts.success.save" });
    }
  }, {
    match: failureType(SAVE_CLIENT),
    reaction: () => openAlert({ type: "warning", message: "clients.alerts.failure.save" }),
  }, {
    match: successType(EDIT_CLIENT),
    reaction: () => {
      history.push("/clients");
      return openAlert({ type: "success", message: "clients.alerts.success.edit" });
    }
  }, {
    match: failureType(EDIT_CLIENT),
    reaction: () => openAlert({ type: "warning", message: "clients.alerts.failure.edit" }),
  }, {
    match: failureType(SEARCH_CLIENTS_WITH_ROUTE),
    reaction: () => openAlert({ type: "warning", message: "clients.alerts.failure.search" }),
  }, {
    match: failureType(SEARCH_CLIENT_WITH_ROUTE),
    reaction: () => openAlert({ type: "warning", message: "clients.alerts.failure.search" }),
  }
];

export default reactions;
