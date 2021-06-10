import React from "react";
const Special = ({ color, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{ backgroundColor: color, fontSize: "30px" }}
      >
        !@#$%^&*
      </button>
    </div>
  );
};

export default Special;
