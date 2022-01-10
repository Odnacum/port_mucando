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

      <div className="row mt-2 me-2 py-lg-5">
        <span type="button" className="btn btn--outline  col-sm-4">
          <span className="text-capitalize text-black">Conctacto:</span> {contact.map((contacto) => (contacto.phone))}
        </span>
        <span type="button" className="btn btn--outline col-sm-4">
         <span className="text-capitalize text-black">Morada:</span> {contact.map((contacto) => (contacto.morada))}
        </span>
        <span type="button" className="btn btn--outline col-sm-4">
           <span className="text-capitalize text-black">Email:</span> {contact.map((contacto) => (contacto.email))}
        </span>
      </div>
      <div className="row mt-2 me-2 py-lg-5 text-center">
        <span type="button" className="btn btn-sm btn-link col-sm-4 text-center mb-3">
         <a href={`tel:${contact.map((contacto) => (contacto.phone))}`} className="alert alert-primary ms-4 border ">
          Ligue-me
          </a>
        </span>
        <span type="button" className="btn btn-sm btn-link  col-sm-4 text-sm-start">
           <a href={`mailto:${contact.map((contacto) => (contacto.email))}`}
              className="alert alert-primary me-1 border ">
          Envie-me um email
          </a>
        </span>
      </div>


    </section>
  );
};

export default Contact;
