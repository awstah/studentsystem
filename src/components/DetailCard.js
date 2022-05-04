import React, { useState } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { removeRecord } from "../features/RecordSlice";

function DetailCard({ index, std }) {
  console.log(index);
  const [isShowModal, setisShowModal] = useState(false);
  const dispatch = useDispatch();

  const hideModal = () => {
    setisShowModal(false);
  };

  const removeRecordHandler = () => {
    dispatch(removeRecord({ index }));
    setisShowModal(false);
  };
  return (
    <>
      {isShowModal && (
        <Modal
          hideModal={hideModal}
          removeRecordHandler={removeRecordHandler}
        />
      )}
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{std.name}</td>
        <td>{std.dob}</td>
        <td>{std.city}</td>
        <td>{std.state}</td>
        <td>{std.zip}</td>
        <td>
          <button className="btn btn-outline-info btn-sm me-2">Edit</button>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => setisShowModal(true)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default DetailCard;
