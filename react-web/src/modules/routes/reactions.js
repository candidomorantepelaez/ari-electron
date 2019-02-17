import { successType, failureType } from "fredux";
import { SAVE_ROUTE, EDIT_ROUTE, DELETE_ROUTE } from "routes/actions";
import { openAlert } from "core/application/actions/alert-actions";
import history from "core/application/routes/history";

const reactions = [
  {
    match: successType(SAVE_ROUTE),
    reaction: () => {
      history.push("/routes");
      return openAlert({ type: "success", message: "routes.alerts.success.save" });
    }
  }, {
    match: failureType(SAVE_ROUTE),
    reaction: () => openAlert({ type: "warning", message: "routes.alerts.failure.save" }),
  }, {
    match: successType(EDIT_ROUTE),
    reaction: () => {
      history.push("/routes");
      return openAlert({ type: "success", message: "routes.alerts.success.edit" });
    }
  }, {
    match: failureType(EDIT_ROUTE),
    reaction: () => openAlert({ type: "warning", message: "routes.alerts.failure.edit" }),
  }, {
    match: successType(DELETE_ROUTE),
    reaction: () => {
      history.push("/routes");
      return openAlert({ type: "success", message: "routes.alerts.success.delete" });
    }
  }, {
    match: failureType(DELETE_ROUTE),
    reaction: () => openAlert({ type: "warning", message: "routes.alerts.failure.delete" }),
  },
];

export default reactions;
