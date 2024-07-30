import React from "react";
import EmployeeList from "../components/EmployeeList";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

const EmployeeManagement = () => {
  return (
    <div className="container-fluid py-4 px-lg-5">
      <h2 className="fw-bold mb-4">React Employee Management CRUD App</h2>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Link to={"/add-employee"} className="btn btn-primary fw-bold px-md-3">
          Add Employee
        </Link>
        <SearchBar />
      </div>
      <EmployeeList />
    </div>
  );
};

export default EmployeeManagement;
