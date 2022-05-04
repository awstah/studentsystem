import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DetailCard from "./DetailCard";

function Details() {
  const { data } = useSelector((state) => state.record);

  return (
    <div className="container-fluid mt-5  py-3 my-2">
      <h4 className="text-center display-5 fw-normal">Student's Details</h4>

      <div className="container">
        {data.length === 0 && (
          <p className="alert alert-warning text-center">
            You have no Recors yet
          </p>
        )}
        {data.length > 0 && (
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
                {data ? (
                  <>
                    {data.map((std, i) => (
                      <DetailCard std={std} index={i} />
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
    </div>
  );
}

export default Details;
