const save = include("app/seller/actions/save-action");
const update = include("app/seller/actions/update-action");
const findOne = include("app/seller/actions/find-one-action");
const remove = include("app/seller/actions/remove-action");
const search = include("app/seller/actions/search-action");
const list = include("app/seller/actions/list-action");
const paginate = include("app/seller/actions/paginate-action");
const count = include("app/seller/actions/count-action");


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