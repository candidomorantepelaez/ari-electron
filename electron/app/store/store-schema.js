const Joi = require("joi");
const types = include("app/globals/data-types/single-types");
const SellerSchema = include("app/seller/seller-schema");
const schemaManager = include("node/core/schema-manager");

const schema = Joi.object().keys({
  _id: types.alphaNumeric,
  sellers: Joi.array().items(SellerSchema.schema),
  name: types.customAlphaNumeric.required(),
  admin: SellerSchema.schema.required(),
});

module.exports = schemaManager.withBasicSchema(schema);