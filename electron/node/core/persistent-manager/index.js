const nedbManager = include("node/core/persistent-manager/nedb");

const getPersistentManager = () => {
  if (config.persistent.type === "nedb") {
    return nedbManager;
  }
  return {};
};

module.exports = getPersistentManager();