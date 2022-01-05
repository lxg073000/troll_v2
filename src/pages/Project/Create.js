import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { Timestamp } from "firebase/firestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import { useFirestore } from "../../hooks/useFirestore";
import { categories } from "../../constants/data";
import "./Create.css";

export default function Create() {
  document.title = "Troll - Start a new project";
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [userOptions, setUserOptions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [formError, setFormError] = useState(null);

  const { user } = useAuthContext();
  const { documents: _users } = useCollection("users");
  const { addDocument, response } = useFirestore("projects");
  const _navigate = useNavigate();
  const navigate = useRef(_navigate);

  // attatch a listen to the users collection to populate userOptions
  useEffect(() => {
    if (!_users) return;

    // map over _users documents and populate _userOptions and update state
    const _userOptions = _users.map((user) => {
      return { value: user, label: user.displayName };
    });
    setUserOptions(_userOptions);
  }, [_users]);

  // Observe response state for redirect & error handling
  useEffect(() => {
    if (response.success === true) navigate.current("/dashboard");
    if (response.error) setFormError(response.error.message);
  }, [response]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (!category) {
      setFormError("Please select a project category");
      return;
    }

    const project = {
      name,
      details,
      category: category.value,
      dueDate: Timestamp.fromDate(new Date(dueDate)),
      comments: [],
      createdBy: {
        displayName: user.displayName,
        photoURL: user.photoURL,
        id: user.uid,
      },
      collaborators: selectedUsers.map((c) => {
        return {
          displayName: c.value.displayName,
          photoURL: c.value.photoURL,
          id: c.value.id,
        };
      }),
    };
    await addDocument(project);
    // if (response.success === true) navigate("/", { replace: "true" });
    // if (response.error) setFormError(response.error.message);
  };
  return (
    <div className="create-form">
      <h2 className="page-title">Start a new project</h2>
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
            onChange={(option) => setSelectedUsers(option)}
            options={userOptions}
            isMulti
          />
        </label>
        {response.isPending && <button className="btn">Adding Project</button>}
        {!response.isPending && <button className="btn">Add Project</button>}
        {formError && <div className="error">{formError}</div>}
      </form>
    </div>
  );
}
