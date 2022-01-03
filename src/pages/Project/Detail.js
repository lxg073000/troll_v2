import React from "react";
import { useParams } from "react-router-dom";
import ProjectComments from "../../components/Project/ProjectComments";
import Summary from "../../components/Project/Summary";
import useDocument from "../../hooks/useDocument";
import "./Detail.css";

export default function Detail() {
  document.title = "Troll - Project Summary";
  const { id: projectID } = useParams();
  const {
    document: project,
    error,
    isPending,
  } = useDocument("projects", projectID);
  if (isPending) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="project-details">
      {project && (
        <>
          <Summary project={project} />
          <ProjectComments project={project} />
        </>
      )}
    </div>
  );
}
