const Joi = require("joi");

const schema = Joi.object().keys({
  preAuthenticate: Joi.func().arity(3).required(),
  authenticate: Joi.func().arity(3).required(),
  postAuthenticate: Joi.func().arity(3).required(),
  validate: Joi.func().arity(3).required(),
  execute: Joi.func().arity(3).required(),
  postExecute: Joi.func().arity(3).required(),
});

const MiddlewareSchema = {
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

module.exports = MiddlewareSchema;