import uniqid from "uniqid";
import { contact } from "../../portfolio";
import "./Contact.css";

const Contact = () => {
  if (!contact.length) return null;
// const cont=contact.map((conta)=>(conta));
  return (
    <section className="section contact center skills" id="contact">
      <h2 className="section__title border-bottom">Contacto e Endereço</h2>
      <h5 className="skill">
        <span type="button" className="btn btn--outline">
          Conctacto: {contact.map((contacto) => (contacto.phone))}
        </span><br/>
        <span type="button" className="btn btn--outline">
          Morada: {contact.map((contacto) => (contacto.morada))}
        </span><br/>
        <span type="button" className="btn btn--outline">
          Email: {contact.map((contacto) => (contacto.email))}
        </span>
      </h5>
      <br/>
      <a href={`tel:${contact.map((contacto) => (contacto.phone))}`}>
        <span type="button" className="btn">
          Ligue-me
        </span>
      </a>
      <a href={`mailto:${contact.map((contacto) => (contacto.email))}`}>
        <span type="button" className="btn ">
          Envie-me um email
        </span>
      </a>
    </section>
  );
};

export default Contact;
