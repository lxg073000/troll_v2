import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useCollection } from "../../hooks/useCollection";
import "./Create.css";

const categories = [
  {
    value: "development",
    label: "Development",
  },
  {
    value: "design",
    label: "Design",
  },
  {
    value: "sales",
    label: "Sales",
  },
  {
    value: "marketing",
    label: "Marketing",
  },
];

export default function Create() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [collaborators, setCollaborators] = useState([]);
  const [formError, setFormError] = useState(null);

  const { documents: _users } = useCollection("users");
  const [userOptions, setUserOptions] = useState([]);

  // attatch a listen to the users collection to populate userOptions
  useEffect(() => {
    if (!_users) return;

    // map over _users documents and populate _userOptions and update state
    const _userOptions = _users.map((user) => {
      return { value: user.id, label: user.displayName };
    });
    setUserOptions(_userOptions);
  }, [_users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(null);

    if (!category) {
      setFormError("Please select a project category");
      return;
    }
    console.log({ name, details, dueDate, collaborators }, category.value);
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
          Project name:
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          Project details:
          <textarea
            required
            type="text"
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </label>
        <label>
          Set due date:
          <input
            required
            type="date"
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>
        <label>
          Project category:
          <Select
            options={categories}
            onChange={(option) => setCategory(option)}
          />
        </label>
        <label>
          Collaborate with:
          <Select
            onChange={(option) => setCollaborators(option)}
            options={userOptions}
            isMulti
          />
        </label>
        <button className="btn">Add Project</button>
        {formError && <div className="error">{formError}</div>}
      </form>
    </div>
  );
}
