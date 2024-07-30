import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "75vh",
        background: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
