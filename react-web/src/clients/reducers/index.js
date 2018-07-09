import searchClients from "./search-client-reducer";
import searchClientsWithRoute from "./search-clients-with-route-reducer";
import searchClient from "./search-client-reducer";
import searchClientWithRoute from "./search-client-with-route-reducer";
import saveClient from "./save-client-reducer";
import editClient from "./edit-client-reducer";
import deleteClient from "./delete-client-reducer";
import countClients from "./count-clients-reducer";
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