import ListProductsPage from "configs/pages/list-configs-page";
import CreateProductPage from "configs/pages/create-config-page";
import DetailProductPage from "configs/pages/detail-config-page";
import EditProductPage from "configs/pages/edit-config-page";

export default [
  { path: "/configs", exact: true, component: ListProductsPage },
  { path: "/configs/new", exact: true, component: CreateProductPage },
  { path: "/configs/detail/:id", exact: true, component: DetailProductPage },
  { path: "/configs/edit/:id", exact: true, component: EditProductPage },
];
