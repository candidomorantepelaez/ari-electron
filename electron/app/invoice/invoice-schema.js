const Joi = require("joi");
const types = include("app/globals/data-types/single-types");
const SaleSchema = include("app/sale/sale-schema");
const schemaManager = include("node/core/schema-manager");

const schema = Joi.object().keys({
  _id: types.alphaNumeric,
  sale: SaleSchema.schema.required(),
  date: types.date.required(),
  number: types.customAlphaNumeric.required(),
});

module.exports = schemaManager.withBasicSchema(schema);