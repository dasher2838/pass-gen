import React from "react";

const Lower = ({ color, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{ backgroundColor: color, fontSize: "30px" }}
      >
        a-z
      </button>
    </div>
  );
};

export default React.memo(Lower);
