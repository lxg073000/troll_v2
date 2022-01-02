import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ProjectForm from "./pages/Project/Create";
import ProjectDetail from "./pages/Project/Detail";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import OnlineUsers from "./components/OnlineUsers/OnlineUsers";

//componenets

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <Router>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={user ? <Dashboard /> : <Navigate to="login" />}
              />
              <Route
                path="login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="signup"
                element={!user ? <Signup /> : <Navigate to="/" />}
              />
              <Route
                path="projects/create"
                element={user ? <ProjectForm /> : <Navigate to="/" />}
              />
              <Route
                path="projects/:id"
                element={user ? <ProjectDetail /> : <Navigate to="/" />}
              />
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </Router>
      )}
    </div>
  );
}

export default App;

/**
 * pages
 *  dashboard
 *  login
 *  signup
 *  create project
 *  project details
 */
