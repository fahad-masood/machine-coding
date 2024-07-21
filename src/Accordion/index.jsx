import React from "react";
import "./index.css";
import data from "./data.json";
import { AccordionItems } from "./AccordionItems";

const Accordion = () => {
  return (
    <div className="accordion">
      <h2>ACCORDION</h2>
      {data.jokes.map((joke, i) => {
        return <AccordionItems qna={joke} key={joke.id} />;
      })}
    </div>
  );
};

export default Accordion;
