import searchSales from "sales/reducers/search-sales-reducer";
import searchSale from "sales/reducers/search-sale-reducer";
import saveSale from "sales/reducers/save-sale-reducer";
import editSale from "sales/reducers/edit-sale-reducer";
import deleteSale from "sales/reducers/delete-sale-reducer";
import countSales from "sales/reducers/count-sales-reducer";
import { combineReducers } from 'redux';

export default combineReducers({
  searchSales,
  searchSale,
  saveSale,
  editSale,
  deleteSale,
  countSales
});