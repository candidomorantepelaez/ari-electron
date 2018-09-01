const Joi = require("joi");
const types = include("app/data-types/single-types");
const ClientSchema = include("app/data-types/client-schema");
const SellerSchema = include("app/data-types/seller-schema");

module.exports = routeSchema = Joi.object().keys({
  _id: types.alphaNumeric,
  name: types.customAlphaNumeric.required(),
  timerange: types.customAlphaNumeric.required(),
  clients: Joi.array().items(ClientSchema),
  sellers: Joi.array().items(SellerSchema),
  streets: Joi.array().items(types.customAlphaNumeric),
});