import ListClientsPage from "./page/list-clients-page";
import CreateClientPage from "./page/create-client-page";
import DetailClientPage from "./page/detail-client-page";
import EditClientPage from "./page/edit-client-page";

export default [
  { path: "/clients", exact: true, component: ListClientsPage },
  { path: "/clients/new", exact: true, component: CreateClientPage },
  { path: "/clients/detail/:id", exact: true, component: DetailClientPage },
  { path: "/clients/edit/:id", exact: true, component: EditClientPage },
];
