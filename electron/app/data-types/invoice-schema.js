const Joi = require("joi");
const types = include("app/data-types/single-types");
const SaleSchema = include("app/data-types/sale-schema");

module.exports = invoiceSchema = Joi.object().keys({
  _id: types.alphaNumeric,
  sale: SaleSchema.required(),
  date: types.date.required(),
  number: types.customAlphaNumeric.required(),
});