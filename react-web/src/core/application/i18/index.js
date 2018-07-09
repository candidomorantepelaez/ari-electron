import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";
import module from "./../module/index";

export const addLocale = () => addLocaleData ([ ...en, ...es]);
export const language = "es";
export const messages = () => module.getMessages();
