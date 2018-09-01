const Joi = require("joi");
const types = include("app/data-types/single-types");
const ProductSchema = include("app/data-types/product-schema");
const DiscountSchema = include("app/data-types/discount-schema");
const ClientSchema = include("app/data-types/client-schema");
const SellerSchema = include("app/data-types/seller-schema");

module.exports = SaleSchema = Joi.object().keys({
  _id: types.alphaNumeric,
  products: Joi.array().items(ProductSchema.required()),
  discounts: Joi.array().items(DiscountSchema),
  date: types.date.required(),
  client: ClientSchema.required(),
  seller: SellerSchema.required(),
  price: types.price.required(),
  tax: types.tax.required(),
  totalPrice: types.price.required(),
});