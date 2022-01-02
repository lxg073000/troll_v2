import React from "react";
import { useParams } from "react-router-dom";
import ProjectComments from "../../components/Project/ProjectComments";
import Summary from "../../components/Project/Summary";
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
