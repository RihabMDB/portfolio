import React from "react";
import About from "./components/About";
import Contact from "./components/contact";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Home from "./components/Home";
import Services from "./components/Services";

export default function App() {
  return (
    
    <main className="text-gray-400 bg-backcolor body-font">
        <Navbar/>
        <Home/>
        <main className="bg-white">
      <About/></main>
      <Education/>
       <main className="bg-white">
       <Skills/></main>
       <Services/>
        <main className="bg-white">
      <Works/> </main>
      <Contact/>
    </main>
  );
}