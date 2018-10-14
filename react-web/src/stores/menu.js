import React from "react";
import { FormattedMessage } from 'react-intl';

const menu = [
  {
    label: <FormattedMessage id="stores.menu.label" />,
    to: "/stores",
    role: "ADMIN_ROLE"
  }
];

export default menu;