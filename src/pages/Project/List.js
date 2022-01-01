import React from "react";
import "./List.css";

export default function List({ projects }) {
  return (
    <div className="list">
      {!projects.length && <p>Get started by adding some projects!</p>}
      {projects.map((project) => (
        <p key={project.id}>{project.name}</p>
      ))}
    </div>
  );
}
