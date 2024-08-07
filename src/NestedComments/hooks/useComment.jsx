import React from "react";

const useComment = () => {
  const addComment = (structure, commentId, newComment) => {
    if (structure.id === commentId) {
      structure.replies.unshift(newComment);
      return structure;
    }

    const updatedReplies = structure.replies.map((comment) => {
      return addComment(comment, commentId, newComment);
    });
    return { ...structure, replies: updatedReplies };
  };

  const deleteComment = (structure, commentId) => {
    if (structure.id != commentId) {
      // return structure.replies.filter((comment) => comment.id !== commentId);
      return structure;
    }

    const updatedReplies = structure.replies.map((comment) => {
      return deleteComment(comment, commentId);
    });

    return { ...structure, replies: updatedReplies };
  };
  return { addComment, deleteComment };
};

export default useComment;
