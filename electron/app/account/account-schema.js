const Joi = require("joi");
const types = include("app/data-types/single-types");
const schemaManager = include("node/core/schema-manager");

const schema = Joi.object().keys({
  nif: types.dni_nif.required(),
  password: types.password.required(),
  role: Joi.any().valid(config.roles.client, config.roles.seller, config.roles.admin),
});

module.exports = schemaManager.withBasicSchema(schema);