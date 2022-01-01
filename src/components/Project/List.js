import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import "./List.css";

export default function List({ projects }) {
  console.log(projects);
  return (
    <div className="list project">
      {!projects.length && <p>Get started by adding some projects!</p>}
      {projects.map((project) => (
        <Link to={`projects/${project.id}`} key={project.id}>
          <div className="top">
            <Avatar photoURL={project.createdBy.photoURL} />
            <h4>{project.name}</h4>
          </div>
          <p>{`Due Date: ${project.dueDate.toDate().toDateString()}`}</p>
          {!!project.collaborators.length && (
            <div className="collaborators">
              <p>{`Collaborating with: `}</p>
              <ul>
                {project.collaborators.map((c) => (
                  <li key={c.photoURL}>
                    <Avatar photoURL={c.photoURL} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}
