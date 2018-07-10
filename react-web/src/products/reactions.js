import { successType, failureType } from "fredux";
import { DELETE_PRODUCT,
  SAVE_PRODUCT,
  EDIT_PRODUCT,
  SEARCH_PRODUCT,
  SEARCH_PRODUCTS } from "products/actions";
import { openAlert } from "core/application/actions/alert-actions";
import history from "core/application/routes/history";


const reactions = [
  {
    match: successType(DELETE_PRODUCT),
    reaction: () => {
      history.push("/products");
      return openAlert({ type: "success", message: "Producto borrado correctamente" });
    }
  }, {
    match: failureType(DELETE_PRODUCT),
    reaction: () => openAlert({ type: "warning", message: "Error al borrar el producto" }),
  }, {
    match: successType(SAVE_PRODUCT),
    reaction: () => {
      history.push("/products");
      return openAlert({ type: "success", message: "Producto creado correctamente" });
    }
  }, {
    match: failureType(SAVE_PRODUCT),
    reaction: () => openAlert({ type: "warning", message: "Error al crear el Producto" }),
  }, {
    match: successType(EDIT_PRODUCT),
    reaction: () => {
      history.push("/products");
      return openAlert({ type: "success", message: "Producto editado correctamente" });
    }
  }, {
    match: failureType(EDIT_PRODUCT),
    reaction: () => openAlert({ type: "warning", message: "Error al editar el Producto" }),
  }, {
    match: failureType(SEARCH_PRODUCTS),
    reaction: () => openAlert({ type: "warning", message: "Error al recuperar datos de los productos" }),
  }, {
    match: failureType(SEARCH_PRODUCT),
    reaction: () => openAlert({ type: "warning", message: "Error al recuperar datos del producto" }),
  }
];

export default reactions;
