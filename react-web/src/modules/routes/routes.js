import ListRoutesPage from "routes/pages/list-routes-page";
import CreateRoutePage from "routes/pages/create-route-page";
import DetailRoutePage from "routes/pages/detail-route-page";
import EditRoutePage from "routes/pages/edit-route-page";

export default [
  { path: "/routes", exact: true, component: ListRoutesPage },
  { path: "/routes/new", exact: true, component: CreateRoutePage },
  { path: "/routes/detail/:id", exact: true, component: DetailRoutePage },
  { path: "/routes/edit/:id", exact: true, component: EditRoutePage },
];
