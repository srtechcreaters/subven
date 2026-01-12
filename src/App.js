import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Home";
import Services from "./Services";
import Talent from "./Talent";
import Company from "./Company";
import Footer from "./Components/Footer";
import Clients from "./Clients";
import Oracle from "./Services/OracleServices";
import Contact from "./Contact";
import Privacy from "./Privacy";
import OracleServices from "./Home/OracleServices";
import Workday from "./Workday";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/oracle-services" element={<Oracle />} />
        <Route path="/services/tech-consulting" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<OracleServices />} />
        <Route path="/talent" element={<Talent />} />
        <Route path="/company" element={<Company />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/workday" element={<Workday />} />


      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
