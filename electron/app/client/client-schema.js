const Joi = require("joi");
const types = include("app/globals/data-types/single-types");
const AddressSchema = include("app/globals/data-types/address-schema");
const schemaManager = include("node/core/schema-manager");

const schema = Joi.object().keys({
  _id: types.alphaNumeric,
  name: types.customAlphaNumeric.required(),
  address: Joi.array().items(AddressSchema.schema.required()),
  phones: Joi.array().items(types.phone.required()),
  emails: Joi.array().items(types.email),
  webs: Joi.array().items(types.http),
  nif: types.dni_nif.required(),
});

module.exports = schemaManager.withBasicSchema(schema);