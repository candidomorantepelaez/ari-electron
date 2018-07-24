import ListProductsPage from "products/pages/list-products-page";
import CreateProductPage from "products/pages/create-product-page";
import DetailProductPage from "products/pages/detail-product-page";
import EditProductPage from "products/pages/edit-product-page";

export default [
  { path: "/products", exact: true, component: ListProductsPage },
  { path: "/products/new", exact: true, component: CreateProductPage },
  { path: "/products/detail/:id", exact: true, component: DetailProductPage },
  { path: "/products/edit/:id", exact: true, component: EditProductPage },
];
