import React from "react";

const EmployeeInfoModal = ({ selectedEmployee }) => {
  return (
    <div
      className="modal fade"
      id="employeeInfoModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="employeeInfoModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-4 fw-bold">Employee Details</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body fs-5">
            <p>
              <strong>Name:</strong> {selectedEmployee?.firstName}{" "}
              {selectedEmployee?.lastName}
            </p>
            <p>
              <strong>Contact:</strong> {selectedEmployee?.contactNumber}
            </p>
            <p>
              <strong>Email:</strong> {selectedEmployee?.email}
            </p>

            <p>
              <strong>Date of Joining :</strong> {selectedEmployee?.doj}
            </p>
            <p>
              <strong>Position:</strong> {selectedEmployee?.position}
            </p>
            <p>
              <strong>Department:</strong> {selectedEmployee?.department}
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeInfoModal;
