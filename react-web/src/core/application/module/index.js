import { map, mergeAll, objOf, chain, insert, filter, isNil } from "ramda";
import { combineReducers } from 'redux';
import { languages, modules } from "./../../../main";
import moduleApp from "./module-app";

const modulesApp = insert(0, moduleApp, modules);

// the menus
const getMenu = () => chain(obj => obj.menu, filter(obj => isNil(obj.menu) === false, modulesApp));

// the messages
const mergeLang = (lang) => mergeAll(map(obj => obj.messages[lang], filter(obj => isNil(obj.messages) === false, modulesApp)));

const getMessages = () => mergeAll(map(lang => objOf(lang)(mergeLang(lang)), languages));

// the routes
const getRoutes = () => chain(obj => obj.routes ,filter(obj => isNil(obj.routes) === false, modulesApp));

// the reducers
const getReducer = () => combineReducers(mergeAll(map(obj => objOf(obj.key)(obj.reducer), filter(obj => isNil(obj.reducer) === false,modulesApp))));

// the reactions
const getReactions = () => chain(obj => obj.reactions, filter(obj => isNil(obj.reactions) === false, modulesApp));

// the menus
const getPageRewiew = () => chain(obj => obj.pageReview, filter(obj => isNil(obj.pageReview) === false, modulesApp));

export default {
  getMenu,
  getMessages,
  getRoutes,
  getReducer,
  getReactions,
  getPageRewiew,
}