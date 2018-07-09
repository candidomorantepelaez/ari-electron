import messages from "routes/messages/index";
import routes from "routes/routes";
import reducer from "routes/reducers/index";
import menu from "routes/menu";
import reactions from "routes/reactions";

export default {
  key: "routes",
  menu,
  messages,
  routes,
  reducer,
  reactions,
};
