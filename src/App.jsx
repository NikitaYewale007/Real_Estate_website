import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./components/DarkModeContext";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Properties from "./sections/Properties";
import Services from "./sections/Services";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import PropertyDetails from "./sections/PropertyDetails";
import ServiceDetails from "./sections/ServiceDetails";

const App = () => {
  return (
    <DarkModeProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Properties />
                <Services />
                <Clients />
                <Contact />
              </>
            }
          />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/services/home-loans" element={<ServiceDetails />} />
        </Routes>
        <Footer />
      </Router>
    </DarkModeProvider>
  );
};

export default App;
