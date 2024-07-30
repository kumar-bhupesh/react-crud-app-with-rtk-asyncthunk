import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  addEmployee,
  fetchEmployees,
  updateEmployee,
} from "../features/employeeSlice";

const AddEditEmployee = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    doj: "",
    position: "",
    department: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id: empId } = useParams();
  let { employees } = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  useEffect(() => {
    if (empId && employees.length > 0) {
      const empById = employees.find((eachItem) => eachItem.id === empId);
      if (empById) {
        setFormData(empById);
      } else {
        alert("Employee not found. Redirecting to home page.");
        navigate("/");
      }
    }
  }, [empId, employees]);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);

    if (empId) {
      dispatch(updateEmployee(formData));
    } else {
      dispatch(addEmployee(formData));
    }

    setFormData({
      firstName: "",
      lastName: "",
      contactNumber: "",
      email: "",
      doj: "",
      position: "",
      department: "",
    });
    navigate("/");
  };

  return (
    <div className="container-fluid my-4 d-flex justify-content-center">
      <div className="card shadow-lg p-3 col-lg-8 col-sm-12">
        <div className="card-body">
          <h2 className="mb-4 card-title text-center">
            {!empId ? "Add" : "Edit"} Employee
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  id="firstName"
                  placeholder="Enter first name"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  id="lastName"
                  placeholder="Enter last name"
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="contact" className="form-label">
                  Contact Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  id="contact"
                  placeholder="Enter contact number"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  placeholder="Enter email"
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="position" className="form-label">
                  Position
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  id="position"
                  placeholder="Enter position"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="doj" className="form-label">
                  Date of Joining
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="doj"
                  value={formData.doj}
                  onChange={handleChange}
                  id="doj"
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label className="form-label">Department</label>
                <div className="d-flex">
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="department"
                      checked={formData.department === "HR"}
                      id="deptHR"
                      onChange={handleChange}
                      value="HR"
                      required
                    />
                    <label className="form-check-label" htmlFor="deptHR">
                      HR
                    </label>
                  </div>

                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="department"
                      checked={formData.department === "IT"}
                      id="deptIT"
                      onChange={handleChange}
                      value="IT"
                      required
                    />
                    <label className="form-check-label" htmlFor="deptIT">
                      IT
                    </label>
                  </div>

                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="department"
                      checked={formData.department === "Sales"}
                      id="deptSales"
                      onChange={handleChange}
                      value="Sales"
                      required
                    />
                    <label className="form-check-label" htmlFor="deptSales">
                      Sales
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="department"
                      checked={formData.department === "Finance"}
                      id="deptFinance"
                      onChange={handleChange}
                      value="Finance"
                      required
                    />
                    <label className="form-check-label" htmlFor="deptFinance">
                      Finance
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary me-2">
              {!empId ? "Submit" : "Update"}
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                navigate("/");
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEditEmployee;
