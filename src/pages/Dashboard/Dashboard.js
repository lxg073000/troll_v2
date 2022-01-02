import React from "react";
import { useCollection } from "../../hooks/useCollection";
import List from "../../components/Project/List";
import "./Dashboard.css";
import ProjectFilter from "./ProjectFilter";

export default function Dashboard() {
  const { documents: projects, error } = useCollection("projects");

  return (
    <div className="dashboard">
      <h2 className="page-title">Projects</h2>
      {error && <div className="error">{error}</div>}
      {projects && <ProjectFilter />}
      {projects && <List projects={projects} />}
    </div>
  );
}
