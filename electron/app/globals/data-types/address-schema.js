const Joi = require("joi");
const types = include("app/data-types/single-types");

module.exports = addressSchema = Joi.object().keys({
  street: types.customAlphaNumeric.required(),
  number: types.customAlphaNumeric.required(),
  letter: types.customAlphaNumeric,
  square: types.customAlphaNumeric,
  city: types.customAlphaNumeric.required(),
  state: types.customAlphaNumeric.required(),
  country: types.customAlphaNumeric.required(),
  codPostal: types.codPostal
});