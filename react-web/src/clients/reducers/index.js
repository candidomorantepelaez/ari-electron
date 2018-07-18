import searchClients from "clients/search-clients-reducer";
import searchClientsWithRoute from "clients/search-clients-with-route-reducer";
import searchClient from "clients/search-client-reducer";
import searchClientWithRoute from "clients/search-client-with-route-reducer";
import saveClient from "clients/save-client-reducer";
import editClient from "clients/edit-client-reducer";
import deleteClient from "clients/delete-client-reducer";
import countClients from "clients/count-clients-reducer";
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