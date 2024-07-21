import React, { useEffect, useState } from "react";
import { Input } from "./Input";

let displayIntervalId;

const RoundCountdownTimer = () => {
  const [seconds, setSeconds] = useState(null);
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState();
  const [percent, setPercent] = useState(100);

  useEffect(() => {
    const updateDisplay = () => {
      setSeconds((prev) => prev - 1);
    };
    displayIntervalId = setInterval(updateDisplay, 1000);

    return () => {
      clearInterval(displayIntervalId);
    };
  }, []);

  useEffect(() => {
    console.log("Percent: ", (seconds / totalTimeInSeconds) * 100);
    if (seconds <= 0) {
      clearInterval(displayIntervalId);
    }
    // setPercent((seconds / totalTimeInSeconds) * 100);
  }, [seconds]);

  const updateNumber = (item) => {
    setSeconds(item);
    setPercent(100);
  };

  const styles = {
    timer: {
      display: "flex",
      width: "150px",
      height: "150px",
      border: "16px solid transparent",
      borderRadius: "50%",
      background: `linear-gradient(yellowgreen, orange) content-box no-repeat, conic-gradient(green ${percent}%,0, white) border-box`,
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      <Input
        updateNumber={updateNumber}
        setTotalTimeInSeconds={setTotalTimeInSeconds}
      />
      {seconds !== null && (
        <div style={styles.timer}>
          <h3
            style={{
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            {seconds} ms
          </h3>
        </div>
      )}
    </div>
  );
};

export default RoundCountdownTimer;
