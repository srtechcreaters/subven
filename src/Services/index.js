import TalentSolutions from "./TalentSolutions";
import TechConsulting from "./TechConsulting";
import "./styles/index.css";

export default function Services(){
  return(
    <section>
      <h2 className="gradient-title">Our Services</h2>
      <TalentSolutions/>
      <TechConsulting/>
    </section>
  );
}
