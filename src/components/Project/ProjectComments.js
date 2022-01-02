import { Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function ProjectComments() {
  const [comment, setComment] = useState("");
  const { user } = useAuthContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const _comment = {
      createdBy: user.displayName,
      photoURL: user.photoURL,
      content: comment,
      createdAt: Timestamp.fromDate(new Date()),
      id: Math.floor(Math.random() + Number(new Date())),
    };
    console.log({ _comment });
  };
  return (
    <div className="project-comments" onSubmit={handleSubmit}>
      <h4>Project Comments</h4>
      <form className="add-comment">
        <label>
          <span>Add new comment:</span>
          <textarea
            required
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button className="btn" onClick={handleSubmit}>
            Add Comment
          </button>
        </label>
      </form>
    </div>
  );
}
