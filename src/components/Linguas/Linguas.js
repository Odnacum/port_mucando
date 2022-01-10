import uniqid from "uniqid";
import {liguas} from "../../portfolio";

const Linguas=()=>{
  if (!liguas.length) return null;
  return (
    <section className="section skills" id="linguas">
      <h2 className="section__title border-bottom border-top">Línguas</h2>
    </section>
  )
}