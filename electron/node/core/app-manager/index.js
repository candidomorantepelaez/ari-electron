const modules = include("app/modules");
const r = require("ramda");

const modulesWithTables = r.filter(obj => r.isNil(obj.tables) === false, modules);
const modulesWithDefaultData = r.filter(obj => r.isNil(obj.defaultData) === false, modules);
const modulesWithRoutes = r.filter(obj => r.isNil(obj.routes) === false, modules);
const modulesWithTests = r.filter(obj => r.isNil(obj.tests) === false, modules);
const modulesWithRepositories = r.filter(obj => r.isNil(obj.repository) === false, modules);


const tables = r.chain(obj => obj.tables , modulesWithTables);
const defaultData = r.reduce((acc, obj) => r.merge(acc, obj.defaultData), {}, modulesWithDefaultData);
const customRoutes = r.chain(obj => obj.routes , modulesWithRoutes);
const tests = r.chain(obj => obj.tests ,modulesWithTests);
const customRepositories = r.chain(obj => obj.repository ,modulesWithRepositories);

module.exports = {
  tables,
  defaultData,
  customRoutes,
  tests,
  customRepositories,
}