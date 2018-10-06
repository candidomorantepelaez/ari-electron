const Joi = require("joi");
const types = include("app/globals/data-types/single-types");
const ClientSchema = include("app/client/client-schema");
const SellerSchema = include("app/seller/seller-schema");
const schemaManager = include("node/core/schema-manager");

const schema = Joi.object().keys({
  _id: types.alphaNumeric,
  name: types.customAlphaNumeric.required(),
  timerange: types.customAlphaNumeric.required(),
  clients: Joi.array().items(ClientSchema.schema),
  sellers: Joi.array().items(SellerSchema.schema),
  streets: Joi.array().items(types.customAlphaNumeric),
});

module.exports = schemaManager.withBasicSchema(schema);