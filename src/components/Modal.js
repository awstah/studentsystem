import React from "react";

function Modal({ hideModal, removeRecordHandler }) {
  let style = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.8)",
  };
  return (
    <>
      <div className="modal show fade" style={style}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-danger">Delete Record</h5>
            </div>
            <div className="modal-body">
              <p className="fs-5 fw-normal">Are you sure you want to delete?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={hideModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={removeRecordHandler}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
