import { successType, failureType } from "fredux";
import { SAVE_CONFIG, EDIT_CONFIG, DELETE_CONFIG } from "configs/actions";
import { openAlert } from "core/application/actions/alert-actions";
import history from "core/application/routes/history";

const reactions = [
  {
    match: successType(SAVE_CONFIG),
    reaction: () => {
      history.push("/configs");
      return openAlert({ type: "success", message: "configs.alerts.success.save" });
    }
  }, {
    match: failureType(SAVE_CONFIG),
    reaction: () => openAlert({ type: "warning", message: "configs.alerts.failure.save" }),
  }, {
    match: successType(EDIT_CONFIG),
    reaction: () => {
      history.push("/configs");
      return openAlert({ type: "success", message: "configs.alerts.success.edit" });
    }
  }, {
    match: failureType(EDIT_CONFIG),
    reaction: () => openAlert({ type: "warning", message: "configs.alerts.failure.edit" }),
  }, {
    match: successType(DELETE_CONFIG),
    reaction: () => {
      history.push("/configs");
      return openAlert({ type: "success", message: "configs.alerts.success.delete" });
    }
  }, {
    match: failureType(DELETE_CONFIG),
    reaction: () => openAlert({ type: "warning", message: "configs.alerts.failure.delete" }),
  },
];

export default reactions;