import React from "react";
import { useCollection } from "../../hooks/useCollection";
import Avatar from "../Avatar/Avatar";
import "./OnlineUsers.css";

export default function OnlineUsers() {
  const { documents: users, error } = useCollection("users");
  return (
    <div className="user-list">
      <h2>All Users</h2>
      {error && <div className="error">{error}</div>}
      {users &&
        users.map((user) => (
          <div key={user.id} className="user-list-item">
            {user.online && <span className="online-user"></span>}
            <span>{user.displayName}</span>
            <Avatar photoURL={user.photoURL} />
          </div>
        ))}
    </div>
  );
}
