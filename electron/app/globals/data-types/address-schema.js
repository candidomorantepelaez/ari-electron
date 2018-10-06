const Joi = require("joi");
const types = include("app/globals/data-types/single-types");
const schemaManager = include("node/core/schema-manager");

const schema = Joi.object().keys({
  street: types.customAlphaNumeric.required(),
  number: types.customAlphaNumeric.required(),
  letter: types.customAlphaNumeric,
  square: types.customAlphaNumeric,
  city: types.customAlphaNumeric.required(),
  state: types.customAlphaNumeric.required(),
  country: types.customAlphaNumeric.required(),
  codPostal: types.codPostal
});

module.exports = schemaManager.withBasicSchema(schema);