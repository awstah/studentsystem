import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextField from "../components/TextField";
import SelectField from "./../components/SelectField";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewRecord } from "../features/RecordSlice";

function AddNewStudent() {
  const studentSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be greater then 3")
      .max(32, "Name must be less then 32")
      .required("Required"),
    dob: Yup.date().required("Required"),
    city: Yup.string()
      .min(3, "City must be greater then 3")
      .max(32, "City must be less then 3")
      .required("Required"),
    state: Yup.string().required("Required"),
    zip: Yup.string().max(5, "Zipcode is invalid").required("Required"),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(values);
    dispatch(addNewRecord(values));
    navigate("/");
  };

  return (
    <div className="col-sm-12 col-md-5 mx-auto">
      <Formik
        initialValues={{
          name: "",
          dob: "",
          city: "",
          state: "",
          zip: "",
        }}
        validationSchema={studentSchema}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {(formik) => (
          <Form>
            <TextField
              name="name"
              placeholder="Student Name"
              type="text"
              label="Student Name"
            />

            <TextField
              name="dob"
              placeholder="Date of Birth"
              type="date"
              label="Date of Birth"
            />

            <TextField
              name="city"
              placeholder="City"
              type="text"
              label="City"
            />
            <SelectField label="State" name="state" placeholder="State" />

            <TextField
              name="zip"
              placeholder="zipcode"
              type="number"
              label="Zipcode"
            />

            <div className="d-flex justify-content-end">
              <Link to="/" className="btn btn-outline-danger w-25 me-3">
                Cancel
              </Link>
              <button
                type="submit"
                disabled={!formik.isValid}
                className={`btn btn-primary w-25 cursor-`}
              >
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddNewStudent;
