import React, { useEffect, useState, useRef } from "react";
import "./index.css";

const Autocomplete = () => {
  const [value, setValue] = useState("");
  const [originalList, setOriginalList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isListVisible, setIsListVisible] = useState(false);
  const [showClearButton, setShowClearButton] = useState(false);

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
    !searchValue && setShowClearButton(false);
  };

  const handleItemClick = (title) => {
    setValue(title);
    setShowClearButton(true);
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
      <div className="autocomplete-input-container">
        <input
          type="text"
          className="autocomplete-input"
          value={value}
          onChange={handleSearch}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {showClearButton && (
          <div
            className="clear-button"
            onClick={() => {
              setValue("");
              setShowClearButton(false);
            }}
          >
            ⅹ
          </div>
        )}
      </div>
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
