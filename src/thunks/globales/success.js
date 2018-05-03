import { success } from "./../../actions/globales/success";

export function alertSuccess(data) {
  return (dispatch) => dispatch(success(data))
};