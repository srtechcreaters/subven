import "./styles/index.css";
import HeroCompany from "./HeroCompany";
import AboutCompany from "./AboutCompany";
import LifeAtSubven from "./LifeAtSubven";
import CompanyNews from "./CompanyNews";
import ContactCompany from "./ContactCompany";

export default function Company() {
  return (
    <>
      <HeroCompany />
      <AboutCompany />
      <LifeAtSubven />
      <CompanyNews />
      <ContactCompany />
    </>
  );
}
