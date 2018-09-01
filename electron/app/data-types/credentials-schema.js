const Joi = require("joi");
const types = include("app/data-types/single-types");

const schema = Joi.object().keys({
  nif: types.dni_nif.required(),
  password: types.password.required()
});

module.exports = {
  schema,
  isValidate: (object) => {
    const result = Joi.validate(object, schema);
    if (result.error === null) {
      return true;
    }
    logger.log("error", "validate data", result.error);
    return false;
  }
}