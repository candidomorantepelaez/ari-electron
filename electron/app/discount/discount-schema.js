const Joi = require("joi");
const types = include("app/globals/data-types/single-types");
const ProductSchema = include("app/product/product-schema");
const schemaManager = include("node/core/schema-manager");

const schema = Joi.object().keys({
  _id: types.alphaNumeric,
  products: Joi.array().items(ProductSchema.schema.required()),
  price: types.price.required(),
  tax: types.tax.required(),
  description: types.customAlphaNumeric,
  discount: types.number,
  name: types.customAlphaNumeric.required(),
  initialDate: types.date,
  finishDate: types.date,
});

module.exports = schemaManager.withBasicSchema(schema);