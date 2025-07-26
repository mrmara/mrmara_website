import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Owncloud from "./components/Owncloud";
import "./App.css";
import { SoundProvider } from "./hooks/useToogleSound";
import SoundBanner from "./components/SoundBanner";

function App() {
  return (
    <div className="App">
      <SoundProvider>
        <SoundBanner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/owncloud" element={<Owncloud />} />
        </Routes>
        <Footer />
      </SoundProvider>
    </div>
  );
}

export default App;
