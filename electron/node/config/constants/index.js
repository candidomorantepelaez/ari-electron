const basePath = "http://localhost:8080";
const versionApi = "/api/v1";

const roles = {
  client: "CLIENT_ROLE",
  seller: "SELLER_ROLE",
  admin: "ADMIN_ROLE"
}

const auth = {
  secretkey: "secretkey",
};

const cookies = {
  domain: "ari",
  path: "/",
  url: "http://localhost",
  name: "session-id"
};

const pathBbdd = "/.ariDb";

const development = {
  electron: false,
  development: true,
  frontUrl: "http://localhost:3030"
}

module.exports = {
  basePath,
  versionApi,
  roles,
  pathBbdd,
  auth,
  cookies,
  development
}