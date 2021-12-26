import uniqid from "uniqid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import { projects } from "../../portfolio";
import "../ProjectContainer/ProjectContainer.css";
import "./Projects.css";

const Projects = () => {
  if (!projects.length) return null;
  return (
    <section id="projects" className="section projects">
      <h2 className="section__title border-bottom border-top">Projectos feitos</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <div className="project">
            <h3>{project.name}</h3>
            <p className="project__description">{project.description}</p>
            {/* <ul className="project__stack">
            {project.liguagens &&
            project.liguagens.map((ling) => (
              <li key={uniqid()} className="project__stack-item">
                {ling}
              </li>
            ))}
            </ul> */}
            {project.sourceCode && (
              <a
                href={project.sourceCode}
                aria-label="source code"
                className="link link--icon"
              >
                <GitHubIcon />
              </a>
            )}
            {project.livePreview && (
              <a
                href={project.livePreview}
                aria-label="live preview"
                className="link link--icon"
              >
                <LaunchIcon />
              </a>
            )}
          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;
