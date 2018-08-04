import { post } from "core/application/api/index";
import { apiPath } from "core/application/constans";

const credentials = (value) => new Promise((resolve, reject) => {
  post(`${apiPath}/credentials`, { body: value })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

export default {
  credentials,
};
