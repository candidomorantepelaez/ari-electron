import { promiseActionMiddleware } from "fredux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "./../reactions/logger-reaction";
import reactions from "./../reactions/reactions";
import module from "./../module/index";
import crashReporter from "./../reactions/crash-reporter-reaction";

const store = createStore(module.getReducer(), composeWithDevTools(
  applyMiddleware(promiseActionMiddleware,
    logger,
    crashReporter,
    reactions(module.getReactions()),
  )
));

export default store;
