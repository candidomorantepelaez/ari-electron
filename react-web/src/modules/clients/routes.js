import ListClientsPage from "clients/pages/list-clients-page";
import CreateClientPage from "clients/pages/create-client-page";
import DetailClientPage from "clients/pages/detail-client-page";
import EditClientPage from "clients/pages/edit-client-page";

export default [
  { path: "/clients", exact: true, component: ListClientsPage },
  { path: "/clients/new", exact: true, component: CreateClientPage },
  { path: "/clients/detail/:id", exact: true, component: DetailClientPage },
  { path: "/clients/edit/:id", exact: true, component: EditClientPage },
];
