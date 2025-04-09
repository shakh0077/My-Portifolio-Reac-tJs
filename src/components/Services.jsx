import React from "react";
import BgImg from "../assets/bg-rec.jpg";
import ServicesImg from "../assets/ServiscesImg.png";
import { FaTelegram } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { SiGithub } from "react-icons/si";

function Services() {
  return (
    <div className="bg-black/90">
          <div className="container my-10" id="services">
      <div className="relative">
        <img src={BgImg} alt="" />
        <div className="flex gap-64 left-20 absolute top-5 text-white  justify-between">
          <h1 className="text-4xl font-bold">
            My <span className="text-orange-400 ">Services</span>
          </h1>
          <h3 className="max-w-[700px]">
            Men keng qamrovli veb-ishlab chiqish xizmatlarini taklif etaman,
            jumladan responsiv dizayn, React bilan front-end ishlab chiqish va
            maxsus UI/UX yechimlari. Agar siz dinamik veb-sayt yaratmoqchi
            bo‘lsangiz, onlayn mavjudligingizni optimallashtirmoqchi bo‘lsangiz
            yoki noyob raqamli tajriba qurmoqchi bo‘lsangiz, zamonaviy
            veb-texnologiyalar yordamida orzuingizni amalga oshirishda yordam
            bera olaman. Keling, birgalikda ajoyib bir narsa yaratamiz!
          </h3>
        </div>
        <div className="absolute top-30 left-50">
          <img src={ServicesImg} width={800} alt="serviseImg" />
        </div>

        <div className="absolute bottom-20 text-white left-2/5 flex  gap-5 text-3xl">
          <a className="hover:text-amber-500 hover:scale-125 transition-transform duration-500 ease-in-out" href="shalh_077_01"><FaTelegram /></a>
          <a className="hover:text-amber-500 hover:scale-125 transition-transform duration-500 ease-in-out" href="902640680"><MdAddIcCall /></a>
          <a className="hover:text-amber-500 hover:scale-125 transition-transform duration-500 ease-in-out" href="https://www.instagram.com/"><GrInstagram /></a>
          <a className="hover:text-amber-500 hover:scale-125 transition-transform duration-500 ease-in-out" href="https://github.com/shakh0077"><SiGithub /></a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Services;
