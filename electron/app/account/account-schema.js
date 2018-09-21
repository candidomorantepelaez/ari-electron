const Joi = require("joi");
const types = include("app/data-types/single-types");
const getBasicSchema = include("node/config/data-types/basic-schema");

const schema = Joi.object().keys({
  nif: types.dni_nif.required(),
  password: types.password.required(),
  role: Joi.any().valid(config.roles.client, config.roles.seller, confing.roles.admin),
});

module.exports = getBasicSchema(schema);