import React, { useState } from "react";

export const Input = ({ updateNumber, setTotalTimeInSeconds }) => {
  const [value, setValue] = useState();
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (value) {
      updateNumber(value);
      setTotalTimeInSeconds(value);
      setValue("");
    }
  };

  return (
    <div style={{ marginBottom: "40px" }}>
      <input onChange={handleChange} value={value} type="number" />
      <button onClick={() => handleClick()}>Add Timer</button>
    </div>
  );
};
