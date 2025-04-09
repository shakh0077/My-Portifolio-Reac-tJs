import React, { useEffect } from "react";
import Oybek from "../assets/Oybek.png";
import { RiStarFill } from "react-icons/ri";
import 'aos/dist/aos.css';
import AOS from 'aos';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true, 
    });
  }, []);

  return (
    <>
      <div id="home" className="container max-w-full max-h-[722px] px-4">
        <div className="overflow-hidden px-2 text-white relative text-2xl lg:lg:text-5xl font-serif lg:text-black font-semibold pt-20">
          <h2 data-aos="fade-right" className="text-center  sm:text-left">
            I'm Front End Developer <br />{" "}
            <span className="text-orange-400 text-4xl lg:text-7xl">O</span>
            <span>ybek</span>
            <span className="text-orange-400 text-4xl lg:text-7xl">Sh</span>
            <span>akh.</span>
          </h2>
          <p data-aos="fade-right" className="text-base lg:text-xl max-w-[700px] py-10 mx-auto sm:mx-0">
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
          <div data-aos="fade-down" className="flex items-center gap-2 justify-center sm:justify-start text-amber-500">
            <RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill />
          </div>
          <img
            data-aos="fade-left"
            src={Oybek}
            className="absolute -z-10 top-0 right-0 sm:right-10 sm:top-0"
            alt="home img"
            width={700}
            height={700}
          />
          <div className="w-[900px] absolute top-0 -right-80 -z-30 h-[900px] blur-3xl rounded-full bg-black sm:w-[600px] sm:-right-40 sm:h-[600px] sm:top-[-100px]">
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
