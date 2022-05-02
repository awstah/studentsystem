import React from "react";
import AddNewStudent from "../forms/AddNewStudent";

function AddStudent() {
  return (
    <div className="container-fluid">
      <h4 className="text-center display-5 fw-normal">Add Student</h4>
      <div className="container mt-5">
        <AddNewStudent />
      </div>
    </div>
  );
}

export default AddStudent;
