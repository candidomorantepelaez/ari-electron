import React from "react";
import SubmitButton from "core/application/components/forms/buttons/submit-button";
import BackButton from "core/application/components/forms/buttons/back-button";

const createClientForm = {
  actions: [<SubmitButton />, <BackButton />],
  fields: [
    {
      name: "nombre",
      label: "clients.field.name",
      type: "text",
      className: "col-xl-12 col-lg-12 col-md-12 col-sm-12",
      required: true,
    },
  ]
}

export default createClientForm;
