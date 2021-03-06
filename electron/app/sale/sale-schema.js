const Joi = require("joi");
const types = include("app/globals/data-types/single-types");
const schemaManager = include("node/core/schema-manager");
const ClientSchema = include("app/client/client-schema");
const SellerSchema = include("app/seller/seller-schema");
const ProductSchema = include("app/product/product-schema");
const DiscountSchema = include("app/discount/discount-schema");

const schema = Joi.object().keys({
  _id: types.alphaNumeric,
  products: Joi.array().items(ProductSchema.schema.required()),
  discounts: Joi.array().items(DiscountSchema.schema),
  date: types.date.required(),
  client: ClientSchema.schema.required(),
  seller: SellerSchema.schema.required(),
  price: types.price.required(),
  tax: types.tax.required(),
  totalPrice: types.price.required(),
});

module.exports = schemaManager.withBasicSchema(schema);