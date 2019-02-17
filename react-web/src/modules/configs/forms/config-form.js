import React from "react";
import SubmitButton from "core/application/components/forms/buttons/submit-button";
import BackButton from "core/application/components/forms/buttons/back-button";

const createConfigForm = {
  actions: [<SubmitButton />, <BackButton />],
  fields: [
    {
      name: "nombre",
      label: "configs.field.name",
      type: "text",
      className: "col-xl-12 col-lg-12 col-md-12 col-sm-12",
      required: true,
    }, {
      name: "cif",
      label: "configs.field.dni",
      type: "text",
      className: "col-xl-4 col-lg-4 col-md-6 col-sm-12",
      required: true,
    }, {
      name: "telefono",
      label: "configs.field.telefono",
      type: "text",
      className: "col-xl-4 col-lg-4 col-md-6 col-sm-12",
      required: true,
    }, {
      name: "email",
      label: "configs.field.email",
      type: "text",
      className: "col-xl-4 col-lg-4 col-md-6 col-sm-12",
      required: true,
    }, {
      name: "web",
      label: "configs.field.web",
      type: "text",
      className: "col-xl-4 col-lg-4 col-md-6 col-sm-12",
      required: true,
    }, {
      name: "calle",
      label: "configs.field.direction.street",
      type: "text",
      className: "col-xl-4 col-lg-4 col-md-6 col-sm-12",
      required: true,
    }, {
      name: "calle2",
      label: "configs.field.direction.square",
      type: "text",
      className: "col-xl-4 col-lg-4 col-md-6 col-sm-12",
      required: true,
    }, {
      name: "poblacion",
      label: "configs.field.direction.city",
      type: "text",
      className: "col-xl-4 col-lg-4 col-md-6 col-sm-12",
      required: true,
    }, {
      name: "provincia",
      label: "configs.field.direction.state",
      type: "text",
      className: "col-xl-4 col-lg-4 col-md-6 col-sm-12",
      required: true,
    }, {
      name: "codigoPostal",
      label: "configs.field.direction.codpostal",
      type: "text",
      className: "col-xl-4 col-lg-4 col-md-6 col-sm-12",
      required: true,
    },
  ]
}

export default createConfigForm;
