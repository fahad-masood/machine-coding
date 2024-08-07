import React, { useState } from "react";
import "../index.css";

export const Comments = ({
  commentsData,
  handleAddComment,
  handleDeleteComment,
}) => {
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState("");

  const handleClick = () => {
    setShowInput(!showInput);
  };

  const handleAdd = () => {
    const newComment = {
      id: Date.now(),
      content: value,
      replies: [],
    };
    handleAddComment(commentsData.id, newComment);
    setShowInput(false);
  };

  const handleDelete = () => {
    handleDeleteComment(commentsData.id);
    setShowInput(false);
  };

  return (
    <>
      <div
        className={`${commentsData.content && "comment-container"} `}
        key={commentsData.id}
      >
        <p>{commentsData.content}</p>

        {showInput && (
          <input
            autoFocus
            type={"text"}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        )}

        {showInput ? (
          <>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleClick}>Cancel</button>
          </>
        ) : (
          commentsData.content && (
            <>
              <button onClick={handleClick}>Reply</button>
              <button onClick={handleDelete}>Delete</button>
            </>
          )
        )}
      </div>
      <div className="paddingLeft">
        {commentsData?.replies?.map((comment) => {
          return (
            <Comments
              key={comment.id}
              commentsData={comment}
              handleAddComment={handleAddComment}
              handleDeleteComment={handleDeleteComment}
            />
          );
        })}
      </div>
    </>
  );
};
