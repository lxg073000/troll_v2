import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ProjectForm from "./pages/Project/Create";
import ProjectDetail from "./pages/Project/Detail";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

//componenets

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="project/create" element={<ProjectForm />} />
            <Route path="project/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </Router>
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
