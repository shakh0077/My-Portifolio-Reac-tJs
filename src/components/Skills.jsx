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
    <div id="skills" className="pt-10 md:pt-20 px-4">
      <div className="container mx-auto">
        <div data-aos='fade-down'>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black">
            My <span className="text-orange-400">Skills</span>
          </h2>
          <h3 className="text-center py-5 font-semibold text-lg md:text-2xl max-w-full md:max-w-[900px] mx-auto">
            I can create smooth, visually appealing user experiences with modern
            frontend architecture.
          </h3>
        </div>
        
        <div 
          data-aos='zoom-in' 
          className="flex flex-wrap justify-center gap-6 md:gap-10 my-6 md:my-10 w-full max-w-full md:max-w-[900px] mx-auto"
        >
          {[
            { img: ReactImg, name: "React" },
            { img: HtmlImg, name: "HTML5" },
            { img: CssImg, name: "CSS3" },
            { img: Bootstrap, name: "Bootstrap" },
            { img: JsImg, name: "JavaScript" },
            { img: GitImg, name: "Git" }
          ].map((skill, index) => (
            <div key={index} className="text-center w-1/3 sm:w-1/4 md:w-auto">
              <div className="p-2 rounded-3xl flex justify-center">
                <img 
                  src={skill.img} 
                  alt={skill.name} 
                  className="w-16 h-16 md:w-20 md:h-20"
                />
              </div>
              <h2 className="text-lg md:text-2xl font-bold text-orange-400 mt-2">
                {skill.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;