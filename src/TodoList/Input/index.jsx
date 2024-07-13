import { useState } from "react";

export const Input = ({ updateListItems }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    updateListItems(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <input
        style={{
          marginLeft: "12px",
          height: "20px",
          borderRadius: "4px",
        }}
        type="text"
        onChange={handleChange}
        value={inputValue}
      />
      <button
        onClick={() => {
          handleClick();
        }}
        style={{
          marginLeft: "12px",
          cursor: "pointer",
          padding: "6px 15px",
          border: "none",
          borderRadius: "4px",
          background: "yellowgreen",
        }}
      >
        Add
      </button>
    </div>
  );
};
