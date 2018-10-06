const save = include("app/warehouse/actions/save-action");
const update = include("app/warehouse/actions/update-action");
const findOne = include("app/warehouse/actions/find-one-action");
const remove = include("app/warehouse/actions/remove-action");
const search = include("app/warehouse/actions/search-action");
const list = include("app/warehouse/actions/list-action");
const paginate = include("app/warehouse/actions/paginate-action");
const count = include("app/warehouse/actions/count-action");


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