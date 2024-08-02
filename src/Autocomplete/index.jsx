import React, { useEffect, useState } from "react";
import "./index.css";

const Autocomplete = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        console.log("API call");
        fetch(`https://dummyjson.com/products/search?q=${value}&limit=10`)
          .then((res) => res.json())
          .then((result) => setResults(result.products));
      };
      let timerId;
      if (value) {
        timerId = setTimeout(fetchData, 1000);
      }
      return () => {
        clearTimeout(timerId);
      };
    } catch (error) {
      console.error("API error");
    }
  }, [value]);

  return (
    <div className="autocomplete-container">
      <input
        type={"text"}
        className="autocomplete-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      {value && (
        <ul className="autocomplete-list">
          {results.map((product) =>
            results.length > 0 ? (
              <li className="autocomplete-item" key={product.id}>
                {product.title}
              </li>
            ) : (
              <li>No results</li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
