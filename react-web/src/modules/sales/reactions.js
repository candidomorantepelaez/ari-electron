import { successType, failureType } from "fredux";
import { SAVE_SALE, EDIT_SALE, DELETE_SALE } from "sales/actions";
import { openAlert } from "core/application/actions/alert-actions";
import history from "core/application/routes/history";

const reactions = [
  {
    match: successType(SAVE_SALE),
    reaction: () => {
      history.push("/sales");
      return openAlert({ type: "success", message: "sales.alerts.success.save" });
    }
  }, {
    match: failureType(SAVE_SALE),
    reaction: () => openAlert({ type: "warning", message: "sales.alerts.failure.save" }),
  }, {
    match: successType(EDIT_SALE),
    reaction: () => {
      history.push("/sales");
      return openAlert({ type: "success", message: "sales.alerts.success.edit" });
    }
  }, {
    match: failureType(EDIT_SALE),
    reaction: () => openAlert({ type: "warning", message: "sales.alerts.failure.edit" }),
  }, {
    match: successType(DELETE_SALE),
    reaction: () => {
      history.push("/sales");
      return openAlert({ type: "success", message: "sales.alerts.success.delete" });
    }
  }, {
    match: failureType(DELETE_SALE),
    reaction: () => openAlert({ type: "warning", message: "sales.alerts.failure.delete" }),
  },
];

export default reactions;