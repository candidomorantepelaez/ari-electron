import { PROMISE_CALL } from "fredux";
import api from "core/application/api/login-api";

export const ON_LOGIN = "core/credentials";

export const credentials = (value) => ({
  type: ON_LOGIN,
  [PROMISE_CALL]: () => api.credentials(value),
});
