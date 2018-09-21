const withMiddlewareAction = include("node/core/actions/middleware-action");
const r = require("ramda");

const customSaveAction = include("app/actions/app/save-action");
const customUpdateAction = include("app/actions/app/update-action");
const customFindByIdAction = include("app/actions/app/findbyid-action");
const customFindAction = include("app/actions/app/find-action");
const customRemoveAction = include("app/actions/app/remove-action");
const customAllAction = include("app/actions/app/all-action");
const customCountAction = include("app/actions/app/count-action");

const saveAction = r.merge(withMiddlewareAction({}), customSaveAction);
const updateAction = r.merge(withMiddlewareAction({}), customUpdateAction);
const findByIdAction = r.merge(withMiddlewareAction({}), customFindByIdAction);
const findAction = r.merge(withMiddlewareAction({}), customFindAction);
const removeAction = r.merge(withMiddlewareAction({}), customRemoveAction);
const allAction = r.merge(withMiddlewareAction({}), customAllAction);
const countAction = r.merge(withMiddlewareAction({}), customCountAction);

module.exports = {
  saveAction,
  updateAction,
  findByIdAction,
  findAction,
  removeAction,
  allAction,
  countAction
};