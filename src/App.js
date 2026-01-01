import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Home";
import Services from "./Services";
import Talent from "./Talent";
import Company from "./Company";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />
        <Route path="/services/talent-solutions" element={<Services />} />
        <Route path="/services/tech-consulting" element={<Services />} />

        <Route path="/talent" element={<Talent />} />
        <Route path="/company" element={<Company />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
