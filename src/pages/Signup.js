import React, { useState } from "react";
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [displayImage, setDisplayImage] = useState(null);
  const [displayImageError, setdisplayImageError] = useState(null);

  const handleFileChange = (e) => {
    setDisplayImage(null);

    let selected = e.target.files[0];
    console.log(selected);
    if (!selected) {
      setdisplayImageError("please select an image");
      return;
    }
    if (!selected.type.includes("image")) {
      setdisplayImageError("file type must be an image");
      return;
    }
    if (!selected.size > 100000) {
      setdisplayImageError("image file size must be smaller than 100kb");
      return;
    }
    setdisplayImageError(null);
    setDisplayImage(selected);
    console.log("display image updated");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayName, displayImage);
  };

  return (
    <form className="auth-form" onSubmit={(e) => handleSubmit(e)}>
      <h2>Sign up</h2>
      <label>
        <span>email:</span>
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>display name:</span>
        <input
          required
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>profile picture:</span>
        <input type="file" onChange={handleFileChange} />
        {displayImageError && <div className="error">{displayImageError}</div>}
      </label>
      <button className="btn" onClick={(e) => handleSubmit(e)}>
        Sign up
      </button>
    </form>
  );
}
