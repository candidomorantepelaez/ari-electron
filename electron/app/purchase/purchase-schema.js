const Joi = require("joi");
const types = include("app/globals/data-types/single-types");
const SellerSchema = include("app/seller/seller-schema");
const WarehouseSchema = include("app/warehouse/warehouse-schema");
const ProductSchema = include("app/product/product-schema");
const schemaManager = include("node/core/schema-manager");

const schema = Joi.object().keys({
  _id: types.alphaNumeric,
  products: Joi.array().items(ProductSchema.schema.required()),
  date: types.date.required(),
  warehouse: WarehouseSchema.schema.required(),
  seller: SellerSchema.schema.required(),
  price: types.price.required(),
  tax: types.tax.required(),
  totalPrice: types.price.required(),
});

module.exports = schemaManager.withBasicSchema(schema);