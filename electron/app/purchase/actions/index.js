const save = include("app/purchase/actions/save-action");
const update = include("app/purchase/actions/update-action");
const findOne = include("app/purchase/actions/find-one-action");
const remove = include("app/purchase/actions/remove-action");
const search = include("app/purchase/actions/search-action");
const list = include("app/purchase/actions/list-action");
const paginate = include("app/purchase/actions/paginate-action");
const count = include("app/purchase/actions/count-action");


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