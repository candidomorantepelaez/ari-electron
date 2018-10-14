import ListStoresPage from "stores/pages/list-stores-page";
import CreateStorePage from "stores/pages/create-store-page";
import DetailStorePage from "stores/pages/detail-store-page";
import EditStorePage from "stores/pages/edit-store-page";

export default [
  { path: "/stores", exact: true, component: ListStoresPage },
  { path: "/store/new", exact: true, component: CreateStorePage },
  { path: "/store/detail/:id", exact: true, component: DetailStorePage },
  { path: "/store/edit/:id", exact: true, component: EditStorePage },
];
