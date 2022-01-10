import uniqid from "uniqid";
import { skills } from "../../portfolio";
import "./Skills.css";
import "../About/About.css";

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section className="section skills projects about" id="skills">
      <h2 className="section__title border-bottom border-top">Habilidades</h2>
      <div className="row dif projects__grid">
        {skills.map((skill) => (
          <div key={uniqid()} className="project__description skills__list-item me-2 mt-2 btn btn--plain col-sm-3">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
