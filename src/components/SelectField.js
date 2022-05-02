import React from "react";
import { useField } from "formik";
import { ErrorMessage } from "formik";

function SelectField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="form-floating mb-3">
      <select
        className={`form-control ${meta.touched && meta.error && "is-invalid"}`}
        {...field}
        {...props}
      >
        <option value="state1">State 1</option>
        <option value="state2">State 2</option>
        <option value="state3">State 3</option>
        <option value="state4">State 4</option>
      </select>
      <label>{label}</label>

      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
}

export default SelectField;
