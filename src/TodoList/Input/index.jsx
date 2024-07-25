import { useState } from "react";
import "./index.css";

export const Input = ({ updateListItems }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue) {
      updateListItems(inputValue);
      setInputValue("");
    }
  };

  const styles = {
    input: {
      marginLeft: "12px",
      height: "18px",
      borderRadius: "4px",
    },
    button: {
      cursor: "pointer",
      padding: "5px 12px",
      border: "none",
      borderRadius: "4px",
      marginLeft: "8px",
    },
    addButton: {
      backgroundColor: "yellowgreen",
    },
  };

  return (
    <div className="input-container">
      <input
        style={styles.input}
        type="text"
        onChange={handleChange}
        value={inputValue}
        className="input-box"
      />
      <button
        disabled={!inputValue}
        onClick={() => {
          handleClick();
        }}
        className="input-button"
      >
        Add
      </button>
    </div>
  );
};
