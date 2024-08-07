import React, { useState } from "react";
import "./index.css";
import commentsData from "./data.json";
import { Comments } from "./Comments";
import useComment from "./hooks/useComment";

const NestedComments = () => {
  const [comments, setComments] = useState(commentsData);
  const { addComment, deleteComment } = useComment();
  const handleAddComment = (commentId, newComment) => {
    const updatedStructure = addComment(comments, commentId, newComment);
    // console.log("Updated structure: ", updatedStructure);
    setComments(updatedStructure);
  };
  const handleDeleteComment = (commentId) => {
    const updatedStructure = deleteComment(comments, commentId);
    console.log("Updated structure: ", updatedStructure);
    setComments(updatedStructure);
  };
  return (
    <Comments
      commentsData={comments}
      handleAddComment={handleAddComment}
      handleDeleteComment={handleDeleteComment}
    />
  );
};

export default NestedComments;
