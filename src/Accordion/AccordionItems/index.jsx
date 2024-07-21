import React, { useState } from "react";

export const AccordionItems = ({ qna }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="accordion-items" onClick={() => setShow(!show)}>
      <h3 className="title">
        {qna.question} <span className="btn">{show ? "-" : "+"}</span>
      </h3>
      {show && <p className="content">{qna.answer}</p>}
    </div>
  );
};
