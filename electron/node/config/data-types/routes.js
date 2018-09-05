const Joi = require("joi");
const MiddlewareSchema = include("node/config/data-types/middleware-action");

const schema = Joi.array().items(
  Joi.object().keys({
    url: Joi.string().required(),
    method: Joi.string().required(),
    action: MiddlewareSchema.schema.required(),
  })
);

const RouteSchema = {
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

module.exports = RouteSchema;