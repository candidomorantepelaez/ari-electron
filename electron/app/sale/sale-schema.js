const Joi = require("joi");
const types = include("app/globals/data-types/single-types");
const schemaManager = include("node/core/schema-manager");
const ClientSchema = inclue("app/client/client-schema");
const SellerSchema = include("app/seller/seller-schema");

const schema = Joi.object().keys({
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

module.exports = schemaManager.withBasicSchema(schema);