const Joi = require("joi");
const MiddlewareSchema = include("node/config/data-types/middleware-action");

const schema = Joi.object().keys({
  loginAction: MiddlewareSchema.schema.required(),
  logoutAction: MiddlewareSchema.schema.required(),
});

const AccountSchema = {
  schema,
  isValidate: (object) => {
    const result = Joi.validate(object, schema);
    if (result.error === null) {
      return true;
    }
    logger.log("info", result.error);
    return false;
  }
}

module.exports = AccountSchema;