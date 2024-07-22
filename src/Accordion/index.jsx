import React, { useState } from "react";
import "./index.css";
import data from "./data.json";
import { AccordionItems } from "./AccordionItems";

const Accordion = () => {
  const [currentId, setCurrentId] = useState("");
  return (
    <div className="accordion">
      <h2>ACCORDION</h2>
      {data.jokes.map((joke, i) => {
        return (
          <AccordionItems
            qna={joke}
            key={joke.id}
            expanded={true}
            currentId={currentId}
            setCurrentId={setCurrentId}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
