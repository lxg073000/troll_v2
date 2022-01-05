import React, { useState } from "react";
import "./Login.css";

import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  document.title = "Troll - Log in";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form className="auth-form" onSubmit={(e) => handleSubmit(e)}>
      <h2>Log in</h2>
      <label>
        <span>email:</span>
        <input
          required
          placeholder="Email:"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          required
          placeholder="Password:"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {!isPending && (
        <button className="btn" onClick={(e) => handleSubmit(e)}>
          Log in
        </button>
      )}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}

      {error && <div className="error">{error}</div>}
    </form>
  );
}
