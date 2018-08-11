const Joi = require('joi');

const customAlphaNumeric = Joi.string().regex(/^[a-z0-9 ]+$/);
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

const AddressSchema = Joi.object().keys({
  street: customAlphaNumeric.required(),
  number: customAlphaNumeric.required(),
  letter: customAlphaNumeric,
  square: customAlphaNumeric,
  city: customAlphaNumeric.required(),
  state: customAlphaNumeric.required(),
  country: customAlphaNumeric.required(),
  codPostal: codPostal
});

const ClientSchema = Joi.object().keys({
  _id: alphaNumeric,
  name: customAlphaNumeric.required(),
  address: Joi.array().items(AddressSchema.required()),
  phones: Joi.array().items(phone.required()),
  emails: Joi.array().items(email),
  webs: Joi.array().items(customAlphaNumeric),
  nif: dni_nif.required(),
  password: password.required(),
  role: Joi.any().valid("CLIENT_ROLE"),
});

const SellerSchema = Joi.object().keys({
  _id: alphaNumeric,
  name: customAlphaNumeric.required(),
  address: Joi.array().items(AddressSchema.required()),
  phones: Joi.array().items(phone.required()),
  emails: Joi.array().items(email),
  webs: Joi.array().items(customAlphaNumeric),
  nif: dni_nif.required(),
  password: password.required(),
  role: Joi.any().valid("SELLER_ROLE", "ADMIN_ROLE"),
});

const WharehouseSchema = Joi.object().keys({
  _id: alphaNumeric,
  name: customAlphaNumeric.required(),
  address: Joi.array().items(AddressSchema.required()),
  phones: Joi.array().items(phone.required()),
  emails: Joi.array().items(email),
  webs: Joi.array().items(customAlphaNumeric),
  nif: dni_nif.required(),
  password: password.required(),
});

const ProductSchema = Joi.object().keys({
  _id: alphaNumeric,
  name: customAlphaNumeric.required(),
  code: customAlphaNumeric.required(),
  description: customAlphaNumeric,
  salePrice: price.required(),
  buyPrice: price,
  warehouse: WharehouseSchema,
  stock: number,
});

const DiscountSchema = Joi.object().keys({
  _id: alphaNumeric,
  products: Joi.array().items(ProductSchema.required()),
  price: price.required(),
  tax: tax.required(),
  description: customAlphaNumeric,
  discount: number,
  name: customAlphaNumeric.required(),
  initialDate: date,
  finishDate: date,
});

const SaleSchema = Joi.object().keys({
  _id: alphaNumeric,
  products: Joi.array().items(ProductSchema.required()),
  discounts: Joi.array().items(DiscountSchema),
  date: date.required(),
  client: ClientSchema.required(),
  seller: SellerSchema.required(),
  price: price.required(),
  tax: tax.required(),
  totalPrice: price.required(),
});

const BuySchema = Joi.object().keys({
  _id: alphaNumeric,
  products: Joi.array().items(ProductSchema.required()),
  date: date.required(),
  warehouse: WharehouseSchema.required(),
  seller: SellerSchema.required(),
  price: price.required(),
  tax: tax.required(),
  totalPrice: price.required(),
});

const InvoiceSchema = Joi.object().keys({
  _id: alphaNumeric,
  sale: SaleSchema.required(),
  date: date.required(),
  number: customAlphaNumeric.required(),
});

const AppSchema = Joi.object().keys({
  _id: alphaNumeric,
  sellers: Joi.array().items(SellerSchema),
  name: customAlphaNumeric.required(),
  languages: Joi.array().items(Joi.string()),
});

const RouteSchema = Joi.object().keys({
  _id: alphaNumeric,
  name: customAlphaNumeric.required(),
  timerange: customAlphaNumeric.required(),
  clients: Joi.array().items(ClientSchema),
  streets: Joi.array().items(customAlphaNumeric),
});

exports.module = {
  ClientSchema,
  SellerSchema,
  WharehouseSchema,
  ProductSchema,
  DiscountSchema,
  SaleSchema,
  BuySchema,
  InvoiceSchema,
  AppSchema,
  RouteSchema,
};
