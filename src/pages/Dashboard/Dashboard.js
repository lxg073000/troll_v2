import React, { useState } from "react";
import { useCollection } from "../../hooks/useCollection";
import List from "../../components/Project/List";
import "./Dashboard.css";
import ProjectFilter from "./ProjectFilter";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Dashboard() {
  const [currentFilter, setCurrentFilter] = useState("all");
  const { user } = useAuthContext();
  const { documents: projects, error } = useCollection("projects");

  const filteredProjects = projects?.filter((project) => {
    switch (currentFilter) {
      case "all":
        return true;
      case "mine":
        let assignedToMe = false;
        if (project.createdBy.id === user.uid) {
          assignedToMe = true;
        }
        assignedToMe = project.collaborators.some((c) => c.id === user.uid);
        return assignedToMe;
      case "development":
        return project.category === currentFilter;
      case "design":
        return project.category === currentFilter;
      case "marketing":
        return project.category === currentFilter;
      case "sales":
        return project.category === currentFilter;
      default:
        break;
    }
  });

  const changeFilter = (filter) => {
    setCurrentFilter(filter);
  };

  return (
    <div className="dashboard">
      <h2 className="page-title">Projects</h2>
      {error && <div className="error">{error}</div>}
      {projects && (
        <ProjectFilter
          changeFilter={changeFilter}
          currentFilter={currentFilter}
        />
      )}
      {projects && <List projects={filteredProjects} />}
    </div>
  );
}
