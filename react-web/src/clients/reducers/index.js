import saveClient from "clients/reducers/save-client-reducer";
import updateClient from "clients/reducers/update-client-reducer";
import searchClients from "clients/reducers/search-clients-reducer";
import findOneClient from "clients/reducers/find-one-client-reducer";
import listClients from "clients/reducers/list-clients-reducer";
import paginateClients from "clients/reducers/paginate-clients-reducer";
import removeClient from "clients/reducers/remove-client-reducer";
import countClients from "clients/reducers/count-clients-reducer";
import { combineReducers } from 'redux';

export default combineReducers({
  saveClient,
  updateClient,
  searchClients,
  findOneClient,
  listClients,
  paginateClients,
  removeClient,
  countClients
});