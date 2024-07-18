import { useEffect } from "react";
import useAppStore from "./store";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const { isLoggedIn, getProjects, projects } = useAppStore((state) => state);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      getProjects();
    }
  }, []);

  console.log("projects", projects);

  return (
    <div className="App">
      {projects &&
        projects.map((project) => <div key={projects.id}>{project.name}</div>)}
    </div>
  );
}

export default App;
