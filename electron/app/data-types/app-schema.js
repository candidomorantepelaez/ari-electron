const Joi = require("joi");
const types = include("app/data-types/single-types");
const SellerSchema = include("app/data-types/seller-schema");

const schema = Joi.object().keys({
  _id: types.alphaNumeric,
  sellers: Joi.array().items(SellerSchema),
  name: types.customAlphaNumeric.required(),
  admin: SellerSchema.required(),
});

const appSchema = {
  schema,
  isValidate: (object) => {
    const result = Joi.validate(object, schema);
    if (result.error === null) {
      return true;
    }
    logger.log("error", "validate data", result.error);
    return false;
  }
}

module.exports = appSchema;
