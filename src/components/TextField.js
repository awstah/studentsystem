import { ErrorMessage, useField } from "formik";
import React from "react";

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="form-floating mb-3">
      <input
        className={`form-control ${meta.touched && meta.error && "is-invalid"}`}
        autoComplete="off"
        {...field}
        {...props}
      />
      <label htmlFor={field.name}>{label}</label>

      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
}

export default TextField;
