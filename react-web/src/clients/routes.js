import ListClientsPage from "clients/page/list-clients-page";
import CreateClientPage from "clients/page/create-client-page";
import DetailClientPage from "clients/page/detail-client-page";
import EditClientPage from "clients/page/edit-client-page";

export default [
  { path: "/clients", exact: true, component: ListClientsPage },
  { path: "/clients/new", exact: true, component: CreateClientPage },
  { path: "/clients/detail/:id", exact: true, component: DetailClientPage },
  { path: "/clients/edit/:id", exact: true, component: EditClientPage },
];
