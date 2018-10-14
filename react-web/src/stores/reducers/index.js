import saveStore from "stores/reducers/save-store-reducer";
import updateStore from "stores/reducers/update-store-reducer";
import searchStores from "stores/reducers/search-stores-reducer";
import findOneStore from "stores/reducers/find-one-store-reducer";
import listStores from "stores/reducers/list-stores-reducer";
import paginateStores from "stores/reducers/paginate-stores-reducer";
import removeStore from "stores/reducers/remove-store-reducer";
import countStores from "stores/reducers/count-stores-reducer";
import { combineReducers } from 'redux';

export default combineReducers({
  saveStore,
  updateStore,
  searchStores,
  findOneStore,
  listStores,
  paginateStores,
  removeStore,
  countStores
});