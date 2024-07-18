import React, { useEffect, useState } from "react";
import { Input } from "../Input";

export const Timer = () => {
  const [number, setNumber] = useState();

  useEffect(() => {
    let timerId = setTimeout(() => {
      let currentNumber = number - 1;
      if (currentNumber >= 0) {
        setNumber(currentNumber);
      }
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [number]);

  const updateNumber = (item) => {
    setNumber(item);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Input updateNumber={updateNumber} />
      {number && <h3>{number}</h3>}
    </div>
  );
};
