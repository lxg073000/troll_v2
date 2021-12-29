import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProjectForm from "./pages/Project/Create";
import ProjectDetail from "./pages/Project/Detail";

//componenets

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="project/create" element={<ProjectForm />} />
            <Route path="project/:id" element={<ProjectDetail />} />
          </Routes>
        </Router>
      </div>
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
