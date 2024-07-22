import React, { useState } from "react";

export const AccordionItems = ({ qna, expanded, currentId, setCurrentId }) => {
  const [show, setShow] = useState(false);

  const toggle = (id) => {
    if (id === undefined || id === null || id === currentId) {
      setShow(!show);
    } else {
      setCurrentId(id);
      setShow(true);
    }
  };

  return (
    <div
      className="accordion-items"
      onClick={() => toggle(expanded ? qna.id : undefined)}
    >
      <h3 className="title">
        {qna.question}
        <span className="btn">
          {show && (currentId === qna.id || !expanded) ? "-" : "+"}
        </span>
      </h3>
      {show && (
        <>
          {((expanded && currentId === qna.id) || !expanded) && (
            <p className="content">{qna.answer}</p>
          )}
        </>
      )}
    </div>
  );
};
