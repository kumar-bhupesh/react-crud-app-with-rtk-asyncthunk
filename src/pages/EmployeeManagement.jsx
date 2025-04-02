import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import EmployeeInfoModal from "../components/EmployeeInfoModal";
import { deleteEmployee, fetchEmployees } from "../features/employeeSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";

const EmployeeManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const { employees, loading, error } = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  const filterEmployeeData = employees.filter((employee) => {
    const query = searchQuery.trim().toLowerCase();

    if (query.length === 0) {
      return true;
    } 

    return (
      employee.firstName.toLowerCase().includes(query) ||
      employee.lastName.toLowerCase().includes(query) ||
      employee.contactNumber.includes(query) ||
      employee.email.toLowerCase().includes(query) ||
      employee.doj.includes(query) ||
      employee.position.toLowerCase().includes(query) ||
      employee.department.toLowerCase().includes(query)
    );
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="fs-4 text-center mt-5">{error}</div>;
  }

  return (
    <div className="container-fluid">
      <h2 className="my-4 fw-bold">React Employee Management CRUD App</h2>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Link to={"/add-employee"} className="btn btn-primary fw-medium">
          Add Employee
        </Link>
        <input
          type="search"
          className="form-control w-50"
          placeholder="Search Employee..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Contact No.</th>
                  <th scope="col">Email</th>
                  <th scope="col">Date of Joining</th>
                  <th scope="col">Position</th>
                  <th scope="col">Department</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {filterEmployeeData.length > 0 ? (
                  filterEmployeeData.map((eachItem) => (
                    <tr key={eachItem.id}>
                      <td>{eachItem.firstName}</td>
                      <td>{eachItem.lastName}</td>
                      <td>{eachItem.contactNumber}</td>
                      <td>{eachItem.email}</td>
                      <td>{eachItem.doj}</td>
                      <td>{eachItem.position}</td>
                      <td>{eachItem.department}</td>
                      <td>
                        <Link
                          to={`/edit-employee/${eachItem.id}`}
                          className="btn text-warning p-0 me-1"
                        >
                          <MdEdit size={24} />
                        </Link>
                        <button
                          className="btn text-danger p-0 me-1"
                          onClick={() => handleDelete(eachItem.id)}
                        >
                          <MdDelete size={24} />
                        </button>
                        <Link
                          className="btn text-info p-0"
                          onClick={() => setSelectedEmployee(eachItem)}
                          data-bs-toggle="modal"
                          data-bs-target="#employeeInfoModal"
                        >
                          <FaRegEye size={24} />
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center">
                      No employees found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <EmployeeInfoModal selectedEmployee={selectedEmployee} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;
