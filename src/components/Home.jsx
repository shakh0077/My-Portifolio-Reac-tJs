import React from "react";
import Oybek from "../assets/Oybek.png";
import Logo from '../assets/logo.svg'
import { RiStarFill } from "react-icons/ri";

function Home() {
  return (
    <>
      <div id="home" className="container max-h-[722px]">
        <div className="overflow-hidden relative text-5xl font-serif font-semibold  pt-20">
          <h2>
            I'm Front End Developer <br />{" "}
            <span className="text-orange-400 text-7xl">O</span>
            <span>ybek</span>
            <span className="text-orange-400 text-7xl">Sh</span>
            <span>akh.</span>
          </h2>
          <p className="text-xl max-w-[700px] py-10">
            OybekShakh — Frontend developer, tajribali va ijodkor dasturchi
            bo‘lib, zamonaviy veb-texnologiyalarni o‘zida mujassamlashtirgan. U
            React, JavaScript, HTML va CSS kabi texnologiyalarni mukammal
            biladi. Shuningdek, UI/UX dizaynlariga katta e’tibor qaratadi va
            foydalanuvchi tajribasini yaxshilashga intiladi. OybekShakh, sifatli
            va samarali kod yozishda, shuningdek, optimallashtirishda ham
            tajribaga ega. U zamonaviy veb-ilovalarni yaratishda, i18n
            (internationalization) va responsiv dizaynni qo‘llashda yetakchi
            mutaxassis sifatida tanilgan.
          </p>
          <div className="flex items-center gap-5 text-amber-500">
          <RiStarFill  /><RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill />
          </div>
          <img
            src={Oybek}
            className="absolute -z-10 top-0 right-0"
            alt="home img"
            width={700}
            height={700}
          />
          <div className="w-[900px] absolute top-0 -right-80 -z-30 h-[900px] blur-3xl rounded-full bg-black">
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
