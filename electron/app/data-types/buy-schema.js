const Joi = require("joi");
const types = include("app/data-types/single-types");
const ProductSchema = include("app/data-types/product-schema");
const WharehouseSchema = include("app/data-types/wharehouse-schema");
const SellerSchema = include("app/data-types/seller-schema");

module.exports = buySchema = Joi.object().keys({
  _id: types.alphaNumeric,
  products: Joi.array().items(ProductSchema.required()),
  date: types.date.required(),
  warehouse: WharehouseSchema.required(),
  seller: SellerSchema.required(),
  price: types.price.required(),
  tax: types.tax.required(),
  totalPrice: types.price.required(),
});