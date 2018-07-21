import searchClients from "clients/reducers/search-clients-reducer";
import searchClientsWithRoute from "clients/reducers/search-clients-with-route-reducer";
import searchClient from "clients/reducers/search-client-reducer";
import searchClientWithRoute from "clients/reducers/search-client-with-route-reducer";
import saveClient from "clients/reducers/save-client-reducer";
import editClient from "clients/reducers/edit-client-reducer";
import deleteClient from "clients/reducers/delete-client-reducer";
import countClients from "clients/reducers/count-clients-reducer";
import { combineReducers } from 'redux';

export default combineReducers({
  searchClients,
  searchClientsWithRoute,
  searchClient,
  searchClientWithRoute,
  saveClient,
  editClient,
  deleteClient,
  countClients
});