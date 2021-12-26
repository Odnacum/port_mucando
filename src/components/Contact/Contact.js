import uniqid from "uniqid";
import { contact } from "../../portfolio";
import "./Contact.css";

const Contact = () => {
  if (!contact.length) return null;
// const cont=contact.map((conta)=>(conta));
  return (
    <section className="section contact  skills" id="contact">
      <div className="border-top border-bottom">
        <h2 className="section__title">Contacto e Endereço</h2>
      </div>

      <div className="row mt-2 me-2">
        <span type="button" className="btn btn--outline  col-3 m-1">
          <span className="text-capitalize text-black">Conctacto:</span> {contact.map((contacto) => (contacto.phone))}
        </span>
        <span type="button" className="btn btn--outline col-5 m-1">
         <span className="text-capitalize text-black">Morada:</span> {contact.map((contacto) => (contacto.morada))}
        </span>
        <span type="button" className="btn btn--outline col-3 m-1">
           <span className="text-capitalize text-black">Email:</span> {contact.map((contacto) => (contacto.email))}
        </span>
      </div>
      <div className="dif row text-center mt-5">
        <div className="col-md-2 ">
          <a href={`tel:${contact.map((contacto) => (contacto.phone))}`} className="alert alert-primary ms-4 border ">
        <span type="button">
          Ligue-me
        </span>
          </a>
        </div>
        <div className="col-md-3">
          <a href={`mailto:${contact.map((contacto) => (contacto.email))}`}
             className="alert alert-primary me-1 border ">
        <span type="button">
          Envie-me um email
        </span>
          </a>
        </div>
      </div>


    </section>
  );
};

export default Contact;
