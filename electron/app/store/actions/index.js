const save = include("app/store/actions/save-action");
const update = include("app/store/actions/update-action");
const findOne = include("app/store/actions/find-one-action");
const remove = include("app/store/actions/remove-action");
const search = include("app/store/actions/search-action");
const list = include("app/store/actions/list-action");
const paginate = include("app/store/actions/paginate-action");
const count = include("app/store/actions/count-action");


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