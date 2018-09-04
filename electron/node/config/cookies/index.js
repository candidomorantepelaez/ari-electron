const cookiesHttp = include("node/config/cookies/cookies-http");
const cookiesElectron = include("node/config/cookies/cookies-electron");

const getCookiesManager = () => {
  if (constants.development.electron === true) {
    return cookiesElectron;
  }
  return cookiesHttp;
}

module.exports = getCookiesManager();
