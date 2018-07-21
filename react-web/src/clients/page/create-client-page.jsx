import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { saveClient } from "clients/actions";
// import CreateClient from "clients/components/create-client";
import Form from "core/application/components/forms/form";
import { getRoutes, getSearchingRoutes } from "routes/reducers/search-routes-reducer";
import LoadingIcon from "core/application/components/iconos/loading-icon";
import { searchRoutes } from "routes/actions";

const formBilling = {
  title: "clients.link.new.client",
  button:{
    label: "core.save",
    onSubmit: values => {
      console.log("submit values", values);
    }
  },
  fields: [
    {
      name: "name",
      label: "clients.field.name",
      helpText: "clients.field.name",
      type: 'text',
      className: "col-xl-12 col-lg-12 col-md-12 col-sm-12",
      placeholder: "clients.fields.name",
      required: true,
      readOnly: false,
      disabled: false,
      onChange: value => console.log("change "+value),
      validateOnChange: value => {
        console.log("validate on change "+value);
        if (value !== "hola") {
          return {
            status: "warning",
            message: "clients.field.name.error"
          };
        }
        return;
      },
    },
  ]
}

class CreateClientPage extends Component {
  static propTypes = {
    save: PropTypes.func,
    getSearchRoutes: PropTypes.func,
    loading: PropTypes.bool,
    routes: PropTypes.array,
  }

  constructor(props) {
    super(props);
    this.props.getSearchRoutes();
  }

  render() {
    if (this.props.loading === true) {
      return <LoadingIcon />
    }

    return (
      <div>
        <h1><FormattedMessage id="clients.create.page.title" /></h1>
        <Form
          title={formBilling.title}
          actionLabel={formBilling.button.label}
          onSubmit={formBilling.button.onSubmit}
          fields={formBilling.fields}
          initialValue={{ name: "javier", genial: true }}
          options={{
            expireYear: [
              {label:'2017', value:'2017'},
              {label:'2018', value:'2018'},
              {label:'2019', value:'2019'},
              {label:'2020', value:'2020'},
              {label:'2021', value:'2021'},
              {label:'2022', value:'2022'},
              {label:'2023', value:'2023'},
              {label:'2024', value:'2024'},
              {label:'2025', value:'2025'},
              {label:'2026', value:'2026'},
              {label:'2027', value:'2027'},
              {label:'2028', value:'2028'},
            ]
          }}
        />
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({
    routes: getRoutes(state),
    loading: getSearchingRoutes(state),
  }),
  dispatch => ({
    getSearchRoutes: () => dispatch(searchRoutes()),
    save: client => dispatch(saveClient(client)),
  }),
);

export default storeConnect(CreateClientPage);
