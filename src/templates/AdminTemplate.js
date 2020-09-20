import React from "react";
import { Route } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";

import "../containers/Admin/assets/vendor/fontawesome-free/css/all.min.css";
import "../containers/Admin/assets/css/sb-admin-2.css";

function AdminLayout(props) {
  return (
    <div>
      <NavbarAdmin />
      {props.children}
    </div>
  );
}
export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <AdminLayout>
          <Component {...propsComponent} />
        </AdminLayout>
      )}
    />
  );
}
