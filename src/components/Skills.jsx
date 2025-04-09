import ReactImg from "../assets/React.svg";
import HtmlImg from "../assets/Html.svg";
import Bootstrap from "../assets/Boostrap.svg";
import CssImg from "../assets/Css.svg";
import JsImg from "../assets/Js.svg";
import GitImg from "../assets/git.svg";
import "aos/dist/aos.css";
import AOS from "aos";

import React, { useEffect } from "react";

function Skills() {
            useEffect(() => {
              AOS.init({
                duration: 1000, 
                easing: 'ease-in-out',
                once: true, 
              });
            }, []);
  return (
    <div id="skills" className=" pt-20">
      <div className="container">
        <div data-aos='fade-down'>
          <h2 className="text-4xl font-bold text-center text-black">
            My <span className="text-orange-400">Skills</span>
          </h2>
          <h3 className="text-center py-5 font-semibold  w-[900px] mx-auto text-2xl">
            I can create smooth, visually appealing user experiences with modern
            frontend architecture.
          </h3>
        </div>
        <div data-aos='zoom-in' className="flex gap-10 my-10 w-[900px] mx-auto ">
          <div className="text-center">
            <div className=" p-2 rounded-3xl">
              <img src={ReactImg} alt="imgages" />
            </div>
            <h2 className="text-2xl font-bold text-orange-400">React</h2>
          </div>

          <div className="text-center">
            <div className=" p-2 rounded-3xl">
              <img src={HtmlImg} alt="imgages" />
            </div>
            <h2 className="text-2xl font-bold text-orange-400">Html 5</h2>
          </div>

          <div className="text-center">
            <div className=" p-2 rounded-3xl">
              <img src={CssImg} alt="imgages" />
            </div>
            <h2 className="text-2xl font-bold text-orange-400">Css3</h2>
          </div>

          <div className="text-center">
            <div className=" p-2 rounded-3xl">
              <img src={Bootstrap} alt="imgages" />
            </div>
            <h2 className="text-2xl font-bold text-orange-400">Bootstrap</h2>
          </div>

          <div className="text-center">
            <div className=" p-2 rounded-3xl">
              <img src={JsImg} alt="imgages" />
            </div>
            <h2 className="text-2xl font-bold text-orange-400">Javascript</h2>
          </div>

          <div className="text-center">
            <div className=" p-2 rounded-3xl">
              <img src={GitImg} alt="imgages" />
            </div>
            <h2 className="text-2xl font-bold text-orange-400">Git</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
