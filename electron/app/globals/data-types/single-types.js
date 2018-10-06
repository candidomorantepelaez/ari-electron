const Joi = require('joi');

const customAlphaNumeric = Joi.string().regex(/^[a-zA-Z0-9 ]+$/);
const alphaNumeric = Joi.string().alphanum();
const phone = Joi.string().regex(/^(\+34|0034|34)?[6789]\d{8}$/);
const number = Joi.number().integer();
const price = Joi.number().precision(2);
const email = Joi.string().email({ minDomainAtoms: 2 });
const dni = Joi.string().regex(/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i);
const nif = Joi.string().regex(/^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/i);
const dni_nif = Joi.alternatives().try(dni, nif);
const password = Joi.string()
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}[^'\s]/);
const codPostal = Joi.number().integer().min(1000).max(52999);
const date = Joi.date();
const tax = number.min(0).max(100);
const http = Joi.string().regex(/^[/.:a-zA-Z0-9 ]+$/);

module.exports = {
  customAlphaNumeric,
  alphaNumeric,
  phone,
  number,
  price,
  email,
  dni,
  nif,
  dni_nif,
  password,
  codPostal,
  date,
  tax,
  http,
  isValidate: (obj, type) => {
    const result = Joi.validate(obj, type);
    return (result.error === null);
  }
};