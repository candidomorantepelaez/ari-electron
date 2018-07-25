import searchConfigs from "configs/reducers/search-configs-reducer";
import searchConfig from "configs/reducers/search-config-reducer";
import saveConfig from "configs/reducers/save-config-reducer";
import editConfig from "configs/reducers/edit-config-reducer";
import deleteConfig from "configs/reducers/delete-config-reducer";
import countConfigs from "configs/reducers/count-configs-reducer";
import { combineReducers } from 'redux';

export default combineReducers({
  searchConfigs,
  searchConfig,
  saveConfig,
  editConfig,
  deleteConfig,
  countConfigs
});