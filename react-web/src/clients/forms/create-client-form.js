import React from "react";
import SubmitButton from "core/application/components/forms/buttons/submit-button";
import BackButton from "core/application/components/forms/buttons/back-button";

const createClientForm = {
  actions: [<SubmitButton />, <BackButton />],
  fields: [
    {
      name: "name",
      label: "clients.field.name",
      type: "text",
      className: "col-xl-12 col-lg-12 col-md-12 col-sm-12",
      required: true,
      validateOnBlur: value => {

      }
    }, {
      name: "cif",
      label: "clients.field.dni",
      type: "text",
      className: "col-xl-4 col-lg-4 col-md-6 col-sm-12",
      required: true,
    }, {
      name: "telefono",
      label: "clients.field.telefono",
      type: "text",
      className: "col-xl-4 col-lg-4 col-md-6 col-sm-12",
      required: true,
    }, {
      name: "email",
      label: "clients.field.email",
      type: "text",
      className: "col-xl-4 col-lg-4 col-md-6 col-sm-12",
      required: true,
    }, {
      name: "calle",
      label: "clients.field.direction.street",
      type: "text",
      className: "col-xl-4 col-lg-4 col-md-6 col-sm-12",
      required: true,
    }, {
      name: "poblacion",
      label: "clients.field.direction.city",
      type: "text",
      className: "col-xl-4 col-lg-4 col-md-6 col-sm-12",
      required: true,
    }, {
      name: "provincia",
      label: "clients.field.direction.state",
      type: "text",
      className: "col-xl-4 col-lg-4 col-md-6 col-sm-12",
      required: true,
    }, {
      name: "codigoPostal",
      label: "clients.field.direction.codpostal",
      type: "text",
      className: "col-xl-4 col-lg-4 col-md-6 col-sm-12",
      required: true,
    }, {
      name: "muestra",
      label: "clients.field.service.demo",
      type: "select",
      className: "col-xl-4 col-lg-4 col-md-6 col-sm-12",
      required: true,
    }, {
      name: "numeroBotellas",
      label: "clients.field.service.bottles",
      type: "text",
      className: "col-xl-4 col-lg-4 col-md-6 col-sm-12",
      required: true,
    }, {
      name: "ruta",
      label: "clients.field.service.route",
      type: "select",
      className: "col-xl-4 col-lg-4 col-md-6 col-sm-12",
      required: true,
    },
  ]
}

export default createClientForm;
