const save = include("app/route/actions/save-action");
const update = include("app/route/actions/update-action");
const findOne = include("app/route/actions/find-one-action");
const remove = include("app/route/actions/remove-action");
const search = include("app/route/actions/search-action");
const list = include("app/route/actions/list-action");
const paginate = include("app/route/actions/paginate-action");
const count = include("app/route/actions/count-action");


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