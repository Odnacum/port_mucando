import { Image } from "react-bootstrap";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import back from "../img/back.jpg";
import { about } from "../../portfolio";
import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Image } from "react-bootstrap";
const About = () => {
  const { name, role, description, resume, social } = about;

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="about center">

      {name && (
        <h1 className="text-center">
          Olá, Eu sou <span className="text-center about__name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about__role p-0">{role}.</h2>}
      <div className="row">
        <div className="col-sm-3 ms-5 me-0 mt-3">
          <div className="" >
            <Image className="imgx" src={back} roundedCircle />
          </div>
        </div>
        <div className="col-sm-8 me-0">
          <p className="about__desc">{description && description}</p>
        </div>
      </div>


      <div className="about__contact center">
        {resume && (
          <a href={resume}>
            <span type="button" className="btn  btn--outline text-capitalize">
              Meu Resumo
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
