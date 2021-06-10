import React from "react";
const Upper = ({ color, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{ backgroundColor: color, fontSize: "30px" }}
      >
        A-Z
      </button>
    </div>
  );
};

export default React.memo(Upper);
