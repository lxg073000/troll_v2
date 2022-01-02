import { Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import Avatar from "../Avatar/Avatar";

export default function ProjectComments({ project }) {
  const [comment, setComment] = useState("");
  const { user } = useAuthContext();
  const { updateDocument, response } = useFirestore("projects");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const _comment = {
      createdBy: user.displayName,
      photoURL: user.photoURL,
      content: comment,
      createdAt: Timestamp.fromDate(new Date()),
      id: Math.floor(Math.random() + Number(new Date())),
    };
    await updateDocument(project.id, {
      comments: [...project.comments, _comment],
    });
    if (!response.error) setComment("");
  };

  return (
    <div className="project-comments" onSubmit={handleSubmit}>
      <h4>Project Comments</h4>
      <ul className="comment-list">
        {project.comments.length &&
          project.comments.map((comment) => (
            <li key={comment.id}>
              <div className="comment-creator">
                <Avatar photoURL={comment.photoURL} />
                <p>{comment.createdBy}</p>
              </div>
              <p className="comment-content">{comment.content}</p>
              <p className="comment-date">
                {comment.createdAt.toDate().toDateString()}
              </p>
            </li>
          ))}
      </ul>
      <form className="add-comment">
        <label>
          <span>Add new comment:</span>
          <textarea
            required
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          ></textarea>
          <button className="btn" onClick={handleSubmit}>
            Add Comment
          </button>
        </label>
      </form>
    </div>
  );
}
