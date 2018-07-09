import searchRoutes from "routes/reducers/search-routes-reducer";
import searchRoute from "routes/reducers/search-route-reducer";
import saveRoute from "routes/reducers/save-route-reducer";
import editRoute from "routes/reducers/edit-route-reducer";
import deleteRoute from "routes/reducers/delete-route-reducer";
import countRoutes from "routes/reducers/count-routes-reducer";
import { combineReducers } from 'redux';

export default combineReducers({
  searchRoutes,
  searchRoute,
  saveRoute,
  editRoute,
  deleteRoute,
  countRoutes
});