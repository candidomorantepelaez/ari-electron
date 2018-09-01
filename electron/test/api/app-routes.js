const test = require("./../helpers/basic-test-api-helper");
const saveAppTests = require("./app-test/save-app");

describe("app-routes-tests: ", () => {
	describe("{ method: post, url: /app }: ", saveAppTests);
});
