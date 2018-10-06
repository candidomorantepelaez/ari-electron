const save = include("app/discount/actions/save-action");
const update = include("app/discount/actions/update-action");
const findOne = include("app/discount/actions/find-one-action");
const remove = include("app/discount/actions/remove-action");
const search = include("app/discount/actions/search-action");
const list = include("app/discount/actions/list-action");
const paginate = include("app/discount/actions/paginate-action");
const count = include("app/discount/actions/count-action");


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