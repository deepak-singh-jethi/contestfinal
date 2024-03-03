import React, { useState } from "react";

function Input({ onSubmit }) {
  const [pinCode, setPincode] = useState("");
  const handleSubmit = () => {
    onSubmit(pinCode);
  };

  return (
    <div id="input-area">
      <h1>Enter Pin Code</h1>
      <input
        type="number"
        placeholder="Enter Pin Code"
        value={pinCode}
        onChange={(e) => setPincode(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        style={{
          display: "block",
          marginTop: "30px",
          paddingBlock: "10px",
          paddingInline: "20px",
          borderRadius: "10px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
          textDecoration: "none",
          textTransform: "uppercase",
        }}>
        Submit
      </button>
    </div>
  );
}

export default Input;
