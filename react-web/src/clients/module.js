import messages from "clients/messages/index";
import routes from "clients/routes";
import reducer from "clients/reducers/index";
import menu from "clients/menu";
import reactions from "clients/reactions";
import PageReview from "clients/page-review";

export default {
  key: "clients",
  menu,
  messages,
  routes,
  reducer,
  reactions,
  pageReview: PageReview,
};
