import React from "react";
const Numbers = ({ color, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{ backgroundColor: color, fontSize: "30px" }}
      >
        0-9
      </button>
    </div>
  );
};
export default React.memo(Numbers);
