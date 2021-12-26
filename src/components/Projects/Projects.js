import uniqid from "uniqid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import { projects } from "../../portfolio";
import "../ProjectContainer/ProjectContainer.css";
// import ProjectContainer from "../ProjectContainer/ProjectContainer";
import "./Projects.css";

const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title border-bottom">Projectos feitos</h2>

      <div className="projects__grid">

        {projects.map((project) => (
          <div className="project">
            <h3>{project.name}</h3>
            <p className="project__description">{project.description}</p>
            <ul className="project__stack">
              <li>ola</li>
            </ul>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;
