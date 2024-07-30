import React, { useEffect, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee, fetchEmployees } from "../features/employeeSlice";
import Loader from "./Loader";
import EmployeeInfoModal from "./EmployeeInfoModal";

const EmployeeList = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const dispatch = useDispatch();
  const { employees, loading, error, searchData } = useSelector(
    (state) => state.employees
  );

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  const filterEmployeeData = employees.filter((employee) => {
    if (searchData.trim().length === 0) {
      return employee;
    } else {
      return (
        employee.firstName
          .toLowerCase()
          .includes(searchData.trim().toLowerCase()) ||
        employee.lastName
          .toLowerCase()
          .includes(searchData.trim().toLowerCase()) ||
        employee.contactNumber.includes(searchData.trim()) ||
        employee.email
          .toLowerCase()
          .includes(searchData.trim().toLowerCase()) ||
        employee.doj.includes(searchData.trim()) ||
        employee.position
          .toLowerCase()
          .includes(searchData.trim().toLowerCase()) ||
        employee.department
          .toLowerCase()
          .includes(searchData.trim().toLowerCase())
      );
    }
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="fs-4 fw-bold text-center mt-5">{error}</div>;
  }

  return (
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
  );
};

export default EmployeeList;
