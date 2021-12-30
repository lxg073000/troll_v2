import React, { useState } from "react";
import "./Create.css";

export default function Create() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, details, dueDate, category, ...assignedUsers });
  };
  return (
    <div className="create-form">
      <h2 className="page-title">Create a new project</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          name:
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          details:
          <textarea
            type="text"
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </label>
        <label>
          due date:
          <input
            type="date"
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>
        <label>
          category:
          <input
            type="text"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
        </label>
        <label>
          project members:
          <input
            type="select"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
        </label>
        <button className="btn" onClick={handleSubmit}>
          Create Project
        </button>
      </form>
    </div>
  );
}
