import React, { useEffect } from "react";
import BgImg from "../assets/bg-rec.jpg";
import ServicesImg from "../assets/ServiscesImg.png";
import { FaTelegram } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import "aos/dist/aos.css";
import AOS from "aos";

function Services() {
    useEffect(() => {
      AOS.init({
        duration: 1000, 
        easing: 'ease-in-out',
        once: true, 
      });
    }, []);
  return (
    <div className="bg-black/90 mt-30">
          <div className="container " id="services">
      <div className="relative">
        <img src={BgImg} alt="" />
        <div className="flex gap-64 left-20 absolute top-5 text-white  justify-between">
          <h1 data-aos='fade-right' className="text-4xl font-bold">
            My <br className="block lg:hidden" /> <span className="text-orange-400 ">Services</span>
          </h1>
          <h3  data-aos='fade-left' className="hidden max-w-[700px] lg:block">
            Men keng qamrovli veb-ishlab chiqish xizmatlarini taklif etaman,
            jumladan responsiv dizayn, React bilan front-end ishlab chiqish va
            maxsus UI/UX yechimlari. Agar siz dinamik veb-sayt yaratmoqchi
            bo‘lsangiz, onlayn mavjudligingizni optimallashtirmoqchi bo‘lsangiz
            yoki noyob raqamli tajriba qurmoqchi bo‘lsangiz, zamonaviy
            veb-texnologiyalar yordamida orzuingizni amalga oshirishda yordam
            bera olaman. Keling, birgalikda ajoyib bir narsa yaratamiz!
          </h3>
        </div>
        <div  data-aos='fade-down' className="absolute top-40 right-10 lg:left-60">
          <img src={ServicesImg} className="w-[200px] lg:w-[800px] " alt="serviseImg" />
        </div>

        <div className="absolute bottom-0 lg:bottom-20 text-white left-1/3 lg:left-2/5 flex  gap-5 text-1xl lg:text-3xl ">
          <a  data-aos='fade-right' className="hover:text-amber-500 hover:scale-125 transition-transform duration-500 ease-in-out" href="shalh_077_01"><FaTelegram /></a>
          <a  data-aos='fade-right' className="hover:text-amber-500 hover:scale-125 transition-transform duration-500 ease-in-out" href="902640680"><MdAddIcCall /></a>
          <a  data-aos='fade-left' className="hover:text-amber-500 hover:scale-125 transition-transform duration-500 ease-in-out" href="https://www.instagram.com/"><GrInstagram /></a>
          <a  data-aos='fade-left' className="hover:text-amber-500 hover:scale-125 transition-transform duration-500 ease-in-out" href="https://github.com/shakh0077"><SiGithub /></a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Services;
