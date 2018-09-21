const Joi = require("joi");
const types = include("app/data-types/single-types");
const AddressSchema = include("app/data-types/address-schema");

module.exports = clientSchema = Joi.object().keys({
  _id: types.alphaNumeric,
  name: types.customAlphaNumeric.required(),
  address: Joi.array().items(AddressSchema.required()),
  phones: Joi.array().items(types.phone.required()),
  emails: Joi.array().items(types.email),
  webs: Joi.array().items(types.http),
  nif: types.dni_nif.required(),
});