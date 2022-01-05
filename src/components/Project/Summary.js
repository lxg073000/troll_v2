import React from "react";
import Avatar from "../Avatar/Avatar";
import "../../pages/Project/Detail.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";

export default function Summary({ project }) {
  const { user } = useAuthContext();
  const { deleteDocument } = useFirestore("projects");
  const navigate = useNavigate();
  const canDeleteProject = () => {
    if (user.uid === project.createdBy.id) {
      return (
        <button className="btn" onClick={handleClick}>
          Mark as Complete
        </button>
      );
    }
  };
  const handleClick = () => {
    deleteDocument(project.id);
    navigate("/dashboard");
  };
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p className="due-date">
          Project due by: {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">{project.details}</p>
        <h4 className="collaborators">Collaboriting with:</h4>
        <div className="collaborators">
          {project.collaborators.map((c) => (
            <div key={c.id}>
              <Avatar className="avatar" photoURL={c.photoURL} />
            </div>
          ))}
        </div>
      </div>
      {canDeleteProject()}
    </div>
  );
}
