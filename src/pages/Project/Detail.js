import React from "react";
import { useParams } from "react-router-dom";
import useDocument from "../../hooks/useDocument";
import "./Detail.css";

export default function Detail() {
  const { id: projectID } = useParams();
  console.log(projectID);
  const {
    document: project,
    error,
    isPending,
  } = useDocument("projects", projectID);
  console.log({ project, error, isPending });
  if (isPending) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="detail project">
      {project && (
        <ul>
          <li>Category: {project.category}</li>
          <li>Comments:</li>
          <li>Collaborators:</li>
        </ul>
      )}
    </div>
  );
}
