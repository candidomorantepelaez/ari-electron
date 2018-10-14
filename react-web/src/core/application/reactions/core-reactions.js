import { successType, failureType } from "fredux";
import { ON_LOGIN, ON_LOGOUT, ON_SAVE_USER_FROM_COOKIE } from "core/application/actions/login-action";
import history from "core/application/routes/history";
import { openAlert } from "core/application/actions/alert-actions";
import cookie from "react-cookies";


const reactions = [
  {
    match: successType(ON_LOGIN),
    reaction: value => {
      cookie.save("user_app", value.payload.response.user, { path: '/' });
      cookie.save("session-id", value.payload.response.user.sessionId, { path: '/' });
      history.push("/home");
      return openAlert({ type: "success", message: "core.alerts.success.login" });
    }
  }, {
    match: failureType(ON_LOGIN),
    reaction: value => {
      return openAlert({ type: "danger", message: "core.alerts.error.login" });
    }
  }, {
    match: successType(ON_LOGOUT),
    reaction: value => {
      cookie.remove("user_app", { path: '/' });
      cookie.remove("session-id", { path: '/' });
      history.push("/login");
      return openAlert({ type: "success", message: "core.alerts.success.logout" });
    }
  },
];

export default reactions;