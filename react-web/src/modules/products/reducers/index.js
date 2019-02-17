import searchProducts from "products/reducers/search-products-reducer";
import searchProduct from "products/reducers/search-product-reducer";
import saveProduct from "products/reducers/save-product-reducer";
import editProduct from "products/reducers/edit-product-reducer";
import deleteProduct from "products/reducers/delete-product-reducer";
import countProducts from "products/reducers/count-products-reducer";
import { combineReducers } from 'redux';

export default combineReducers({
  searchProducts,
  searchProduct,
  saveProduct,
  editProduct,
  deleteProduct,
  countProducts
});