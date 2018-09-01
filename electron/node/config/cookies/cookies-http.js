const r = require("ramda");

const setCookie = (res, name, value) => {
  res.cookie(name, value, { domain: constants.cookies.domain, path: constants.cookies.path });
}

const clearCookie = (res, name) => {
  res.clearCookie(name, { domain: constants.cookies.domain, path: constants.cookies.path });
  return res;
}

const getCookie = (req, name) => {
  if (r.isEmpty(req.cookies)) {
    return null;
  }
  if (r.isNil(req.cookies[name])) {
    return req.cookies[name];
  }
  return null;
}

module.exports = {
  setCookie,
  clearCookie,
  getCookie
}