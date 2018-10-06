const save = include("app/client/actions/save-action");
const update = include("app/client/actions/update-action");
const findOne = include("app/client/actions/find-one-action");
const remove = include("app/client/actions/remove-action");
const search = include("app/client/actions/search-action");
const list = include("app/client/actions/list-action");
const paginate = include("app/client/actions/paginate-action");
const count = include("app/client/actions/count-action");


module.exports = {
  save,
  update,
  findOne,
  remove,
  search,
  list,
  paginate,
  count
}