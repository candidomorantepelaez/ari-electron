const Joi = require("joi");
const types = include("app/data-types/single-types");

module.exports = productSchema = Joi.object().keys({
  _id: types.alphaNumeric,
  name: types.customAlphaNumeric.required(),
  code: types.customAlphaNumeric.required(),
  description: types.customAlphaNumeric,
  salePrice: types.price.required(),
  buyPrice: types.price,
  warehouse: types.WharehouseSchema,
  stock: types.number,
});