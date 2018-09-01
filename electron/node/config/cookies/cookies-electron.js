const {session} = require("electron");
const r = require("ramda");

const setCookie = (res, name, value) => {
  logger.log("info", "estamos")
  session.defaultSession.cookies.set({
    url: constants.cookies.url,
    name: name,
    value: value,
    path: constants.cookies.path
  }, err => {
    if (err) {
      logger.log("error", "set cookie electron ", err);
    }
  });
}

const clearCookie = (res, name) => {
  session.defaultSession.cookies.remove(constants.cookies.url, name);
}

const getCookie = (req, name) => {
  session.defaultSession.cookies.get({
    url: constants.cookies.url,
    name
  }, (err, cookies) => {
    if (err) {
      logger.log("error", "get cookie electron", err);
    }
    if (r.isEmpty(cookies)) {
      return null;
    }
    return cookies[0];
  });
}

module.exports = {
  setCookie,
  clearCookie,
  getCookie
}