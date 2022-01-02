import React from "react";
import Avatar from "../Avatar/Avatar";
import "../../pages/Project/Detail.css";

export default function Summary({ project }) {
  return (
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
  );
}
