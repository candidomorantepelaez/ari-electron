const save = include("app/sale/actions/save-action");
const update = include("app/sale/actions/update-action");
const findOne = include("app/sale/actions/find-one-action");
const remove = include("app/sale/actions/remove-action");
const search = include("app/sale/actions/search-action");
const list = include("app/sale/actions/list-action");
const paginate = include("app/sale/actions/paginate-action");
const count = include("app/sale/actions/count-action");


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