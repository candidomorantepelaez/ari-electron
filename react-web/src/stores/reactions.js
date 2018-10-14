import { successType, failureType } from "fredux";
import { REMOVE_STORE,
  SAVE_STORE, UPDATE_STORE } from "stores/actions";
import { openAlert } from "core/application/actions/alert-actions";
import history from "core/application/routes/history";


const reactions = [
  {
    match: successType(REMOVE_STORE),
    reaction: () => {
      history.push("/stores");
      return openAlert({ type: "success", message: "stores.alerts.success.delete" });
    }
  }, {
    match: failureType(REMOVE_STORE),
    reaction: () => openAlert({ type: "warning", message: "stores.alerts.failure.delete" }),
  }, {
    match: successType(SAVE_STORE),
    reaction: () => {
      history.push("/stores");
      return openAlert({ type: "success", message: "stores.alerts.success.save" });
    }
  }, {
    match: failureType(SAVE_STORE),
    reaction: () => openAlert({ type: "warning", message: "stores.alerts.failure.save" }),
  }, {
    match: successType(UPDATE_STORE),
    reaction: () => {
      history.push("/stores");
      return openAlert({ type: "success", message: "stores.alerts.success.edit" });
    }
  }, {
    match: failureType(UPDATE_STORE),
    reaction: () => openAlert({ type: "warning", message: "stores.alerts.failure.edit" }),
  },
];

export default reactions;
