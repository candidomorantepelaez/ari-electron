import React from "react";
import SubmitButton from "core/application/components/forms/buttons/submit-button";
import BackButton from "core/application/components/forms/buttons/back-button";

const createProductForm = {
  actions: [<SubmitButton />, <BackButton />],
  fields: [
    {
      name: "codigo",
      label: "products.field.code",
      type: "text",
      className: "col-xl-4 col-lg-4 col-md-6 col-sm-12",
      required: true,
    }, {
      name: "precio",
      label: "products.field.price",
      type: "text",
      className: "col-xl-4 col-lg-4 col-md-6 col-sm-12",
      required: true,
    }, {
      name: "iva",
      label: "products.field.iva",
      type: "text",
      className: "col-xl-4 col-lg-4 col-md-6 col-sm-12",
      required: true,
    }, {
      name: "nombre",
      label: "products.field.name",
      type: "text",
      className: "col-xl-12 col-lg-12 col-md-12 col-sm-12",
      required: true,
    }, {
      name: "descripcion",
      label: "products.field.description",
      type: "text",
      className: "col-xl-12 col-lg-12 col-md-12 col-sm-12",
      required: true,
    },
  ]
}

export default createProductForm;
