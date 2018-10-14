import messages from "stores/messages/index";
import routes from "stores/routes";
import reducer from "stores/reducers/index";
import menu from "stores/menu";
import reactions from "stores/reactions";
import PageReview from "stores/page-review";

export default {
  key: "stores",
  menu,
  messages,
  routes,
  reducer,
  reactions,
  pageReview: PageReview,
};
