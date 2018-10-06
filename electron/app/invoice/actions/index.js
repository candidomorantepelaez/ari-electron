const save = include("app/invoice/actions/save-action");
const update = include("app/invoice/actions/update-action");
const findOne = include("app/invoice/actions/find-one-action");
const remove = include("app/invoice/actions/remove-action");
const search = include("app/invoice/actions/search-action");
const list = include("app/invoice/actions/list-action");
const paginate = include("app/invoice/actions/paginate-action");
const count = include("app/invoice/actions/count-action");


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