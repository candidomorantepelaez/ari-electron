import messages from "products/messages/index";
import routes from "products/routes";
import reducer from "products/reducers/index";
import menu from "products/menu";
import reactions from "products/reactions";
import PageReview from "products/page-review";

export default {
  key: "products",
  menu,
  messages,
  routes,
  reducer,
  reactions,
  pageReview: PageReview,
};
