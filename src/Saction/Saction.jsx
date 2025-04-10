import React from "react";
import Home from "../components/Home";
import Logo from '../assets/logo.svg'

import Footer from "../Pages/Footer";
import Services from "../components/Services";
import Skills from "../components/Skills";
import About from "../components/About";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Mui from "../Pages/Mui";

function Saction() {
  return (
    <div className="p-2 ">
      <nav className="flex max-w-[1440px]  w-full mx-auto justify-between items-center z-10 bg-black shadow-2xl rounded-4xl text-white px-5  sticky top-5 ">
        <a
          href="#home"
          className="font-semibold hover:text-orange-400 hidden lg:block  focus:bg-orange-400 focus:text-white px-5 py-2 rounded-3xl"
        >
          Home
        </a>
        <a href="#services" className="font-semibold hidden lg:block  hover:text-orange-400 focus:bg-orange-400 focus:text-white px-5 py-2 rounded-3xl">
          Service
        </a>
        <a href="#about" className="font-semibold hidden lg:block  hover:text-orange-400   focus:bg-orange-400 focus:text-white px-5 py-2 rounded-3xl">
          About
        </a>

        <a href="#" className="flex cursor-pointer items-center gap-2.5 py-2">
          <img src={Logo} alt="logotip" />
          <h2>
            <span className="text-orange-400 font-bold text-xl">O</span>ybek
            <span className="text-orange-400 font-bold text-xl">Sh</span>akh
          </h2>
        </a>
        <a href="#resume" className="font-semibold hidden lg:block  focus:bg-orange-400 focus:text-white px-5 py-2 rounded-3xl">
          Resume
        </a>
        <a href="#skills" className="font-semibold hidden lg:block  hover:text-orange-400 focus:bg-orange-400 focus:text-white px-5 py-2 rounded-3xl">
          Skills
        </a>
        <a href="#contact"  className="font-semibold hidden lg:block  hover:text-orange-400  focus:bg-orange-400 focus:text-white px-5 py-2 rounded-3xl">
          Contact
        </a>

       <div className="block lg:hidden">
       <Mui />
       </div>
      </nav>

      <Home />
      {/* <Services /> */}
      {/* <About/> */}
      {/* <Resume/> */}
      {/* <Skills/> */}
      {/* <Contact/> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Saction;
