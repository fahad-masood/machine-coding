import React, { useEffect, useState, useRef } from "react";
import "./index.css";

const Autocomplete = () => {
  const [value, setValue] = useState("");
  const [originalList, setOriginalList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isListVisible, setIsListVisible] = useState(false);

  useEffect(() => {
    try {
      const fetchData = async () => {
        console.log("API call");
        const res = await fetch(`https://dummyjson.com/products/`);
        const result = await res.json();
        setOriginalList(result.products);
        setFilteredList(result.products);
      };
      fetchData();
    } catch (error) {
      throw new Error("Error");
    }
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setValue(searchValue);
    const filteredArray = originalList?.filter((result) =>
      result.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredList(filteredArray);
  };

  const handleItemClick = (title) => {
    setValue(title);
    setIsListVisible(false);
  };

  const handleInputFocus = () => {
    setIsListVisible(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => setIsListVisible(false), 200);
  };

  return (
    <div className="autocomplete-container">
      <input
        type="text"
        className="autocomplete-input"
        value={value}
        onChange={handleSearch}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {isListVisible && (
        <ul className="autocomplete-list">
          {filteredList?.length > 0 ? (
            filteredList?.map((product) => (
              <li
                onClick={() => handleItemClick(product.title)}
                className="autocomplete-item"
                key={product.id}
              >
                {product.title}
              </li>
            ))
          ) : (
            <li>No results</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;

// Show list only on input focus
// List shouldn't be open after clicking on any list item
// On clicking input, list must be shown and vice versa

// Feedback
// Make a clear filter button --> Inside input box
