const modules = include("app/modules");

const tables = chain(obj => obj.table ,filter(obj => isNil(obj.table) === false, modules));
const defaultData = chain(obj => obj.defaultData ,filter(obj => isNil(obj.defaultData) === false, modules));
const routes = chain(obj => obj.routes ,filter(obj => isNil(obj.routes) === false, modules));

module.exports = {
  tables,
  defaultData,
  routes,
}