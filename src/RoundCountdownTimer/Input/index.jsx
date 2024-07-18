import React, { useState } from "react";

export const Input = ({ updateNumber }) => {
  const [value, setValue] = useState();
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    updateNumber(value);
    setValue("");
  };

  return (
    <div>
      <input onChange={handleChange} value={value} type="number" />
      <button onClick={() => handleClick()}>Add Timer</button>
    </div>
  );
};
