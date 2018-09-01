const Joi = require("joi");
const types = include("app/data-types/single-types");
const ProductSchema = include("app/data-types/product-schema");

module.exports = discountSchema = Joi.object().keys({
  _id: types.alphaNumeric,
  products: Joi.array().items(ProductSchema.required()),
  price: types.price.required(),
  tax: types.tax.required(),
  description: types.customAlphaNumeric,
  discount: types.number,
  name: types.customAlphaNumeric.required(),
  initialDate: types.date,
  finishDate: types.date,
});