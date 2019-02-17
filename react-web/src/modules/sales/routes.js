import ListSalesPage from "sales/pages/list-sales-page";
import CreateSalePage from "sales/pages/create-sale-page";
import DetailSalePage from "sales/pages/detail-sale-page";
import EditSalePage from "sales/pages/edit-sale-page";

export default [
  { path: "/sales", exact: true, component: ListSalesPage },
  { path: "/sales/new", exact: true, component: CreateSalePage },
  { path: "/sales/detail/:id", exact: true, component: DetailSalePage },
  { path: "/sales/edit/:id", exact: true, component: EditSalePage },
];