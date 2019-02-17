import { successType, failureType } from "fredux";
import { REMOVE_CLIENT,
  SAVE_CLIENT, UPDATE_CLIENT } from "clients/actions";
import { openAlert } from "core/application/actions/alert-actions";
import history from "core/application/routes/history";


const reactions = [
  {
    match: successType(REMOVE_CLIENT),
    reaction: () => {
      history.push("/clients");
      return openAlert({ type: "success", message: "clients.alerts.success.delete" });
    }
  }, {
    match: failureType(REMOVE_CLIENT),
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
    match: successType(UPDATE_CLIENT),
    reaction: () => {
      history.push("/clients");
      return openAlert({ type: "success", message: "clients.alerts.success.edit" });
    }
  }, {
    match: failureType(UPDATE_CLIENT),
    reaction: () => openAlert({ type: "warning", message: "clients.alerts.failure.edit" }),
  },
];

export default reactions;
