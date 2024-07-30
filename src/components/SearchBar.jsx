import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchData } from "../features/employeeSlice";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(searchQuery);
    dispatch(setSearchData(searchQuery));
  }, [searchQuery]);

  return (
    <div className="w-50">
      <input
        type="search"
        className="form-control border-secondary"
        placeholder="Search Employee..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
