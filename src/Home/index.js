import Hero from "./Hero";
import DataJourney from "./DataJourney";
import "./styles/index.css";
import WorkWithUs from "./WorkWithUs";
import SuccessStories from "./SuccessStories";
import NewsBanner from "./NewsBanner";
import OracleServices from "./OracleServices";
import OracleHero from "./OracleHero";

export default function Home(){
  return(
    <>
      <Hero/>
      <DataJourney/>
      <OracleHero />
      <OracleServices/>
      <WorkWithUs/>
      <SuccessStories/>
      {/* <NewsBanner/> */}



    </>
  );
}
