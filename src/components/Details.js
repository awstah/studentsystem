import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeStudents,
  selectStudents,
} from "./../features/slices/StudentsSlice";
import DetailCard from "./DetailCard";
import Modal from "./Modal";

function Details() {
  let students = useSelector(selectStudents);
  const [isShowModal, setisShowModal] = useState(false);
  const [tempData, settempData] = useState(null);
  console.log(students);

  const dispatch = useDispatch();

  const getData = (i) => {
    console.log(i);
    settempData(i);
    return setisShowModal(true);
  };

  const hideModal = () => {
    setisShowModal(false);
  };

  const removeRecordHandler = (e) => {
    e.preventDefault();
    dispatch(removeStudents({ tempData }));
  };

  return (
    <div className="container-fluid mt-5  py-3 my-2">
      <h4 className="text-center display-5 fw-normal">Student's Details</h4>

      <div className="container">
        {students.length === 0 && (
          <p className="alert alert-warning text-center">
            You have no Recors yet
          </p>
        )}
        {students.length > 0 && (
          <>
            <table className="table overflow-auto">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">D.O.B</th>
                  <th scope="col">City</th>
                  <th scope="col">State</th>
                  <th scope="col">Zip Code</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody className="">
                {students ? (
                  <>
                    {students?.map((std, i) => (
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{std?.name}</td>
                        <td>{std?.dob}</td>
                        <td>{std?.city}</td>
                        <td>{std?.state}</td>
                        <td>{std?.zip}</td>
                        <td>
                          <button className="btn btn-outline-info btn-sm me-2">
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => getData(i)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <p>Loading</p>
                )}
              </tbody>
            </table>
          </>
        )}

        <div className="d-flex justify-content-end">
          <Link to="/add-student" className="btn btn-primary btn-lg">
            Add Student
          </Link>
        </div>
      </div>
      {isShowModal && (
        <Modal
          hideModal={hideModal}
          removeRecordHandler={removeRecordHandler}
        />
      )}
    </div>
  );
}

export default Details;
