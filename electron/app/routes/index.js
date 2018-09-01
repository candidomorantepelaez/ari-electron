const express = require("express");
const router = express.Router();
const saveAppAction = include("app/actions/app/save-app-action");
const loginAccountAction = include("app/actions/account/login-account-action");

const withBasicRoute = (wrapper, name, controller) => {
  wrapper.post(`${constants.versionApi}/${name}`, controller.save);
  wrapper.put(`${constants.versionApi}/${name}`, controller.update);
  wrapper.get(`${constants.versionApi}/${name}/:id`, controller.findOne);
  wrapper.delete(`${constants.versionApi}/${name}/:id`, controller.remove);
  wrapper.post(`${constants.versionApi}/${name}`, controller.find);
  wrapper.get(`${constants.versionApi}/${name}/list`, controller.list);
  wrapper.get(`${constants.versionApi}/${name}/count`, controller.count);
  return wrapper;
};
router.post("/credentials", loginAccountAction.init);
router.post(`${constants.versionApi}/app`, saveAppAction.init);


module.exports = router;