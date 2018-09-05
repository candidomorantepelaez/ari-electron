const Joi = require("joi");
const MiddlewareSchema = include("node/config/data-types/middleware-action");

const schema = Joi.object().keys({
  saveAction: MiddlewareSchema.schema.required(),
  updateAction: MiddlewareSchema.schema.required(),
  findByIdAction: MiddlewareSchema.schema.required(),
  findAction: MiddlewareSchema.schema.required(),
  removeAction: MiddlewareSchema.schema.required(),
  allAction: MiddlewareSchema.schema.required(),
  countAction: MiddlewareSchema.schema.required(),
});

const ActionSchema = {
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

module.exports = ActionSchema;