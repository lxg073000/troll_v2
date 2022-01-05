import "./App.css";
import downArrow from "./assets/icons/downArrow.svg";
import upArrow from "./assets/icons/upArrow.svg";
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
import Splash from "./pages/Splash/Splash";

//componenets

function App() {
  const { user, authIsReady } = useAuthContext();
  const pageY = (e) => {
    return e.pageY <= document.body.clientHeight * 0.99 ? downArrow : upArrow;
  };
  const handleScroll = (e) => {
    return e.pageY <= document.body.clientHeight * 0.99
      ? scrollDown()
      : scrollUp();

    function scrollDown() {
      console.log("down");
      window.scrollBy({
        left: 0,
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
    function scrollUp() {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="App">
      {authIsReady && (
        <Router>
          {user && <Sidebar />}
          <Navbar />
          <div className="container">
            <img
              src={pageY ? downArrow : upArrow}
              alt="scroll down"
              onClick={(e) => handleScroll(e)}
              id="scroll"
            ></img>
            <Routes>
              <Route
                path="/"
                element={!user ? <Splash /> : <Navigate to="dashboard" />}
              />
              <Route
                path="dashboard"
                element={user ? <Dashboard /> : <Navigate to="/" />}
              />
              <Route
                path="login"
                element={!user ? <Login /> : <Navigate to="/dashboard" />}
              />
              <Route
                path="signup"
                element={!user ? <Signup /> : <Navigate to="/dashboard" />}
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
