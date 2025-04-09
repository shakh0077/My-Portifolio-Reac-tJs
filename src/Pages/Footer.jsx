import React, { useEffect, useState } from "react";
import { MdAddIcCall, MdEast } from "react-icons/md";
import Logo from "../assets/logo.svg";
import { FaFacebookSquare, FaGithub, FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { BsTelegram } from "react-icons/bs";
import toast from "react-hot-toast";
import "aos/dist/aos.css";
import AOS from "aos";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const [email, setEmail] = useState("");

  const BOT_TOKEN = '7330849668:AAH6-V7mMPu9Rha2infXYwBQ7zbVDRRbHe0'; 
  const CHAT_ID = '7426153375';    

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      toast.error("Iltimos, email kiriting!");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Email formati noto'g'ri!");
      return;
    }

    const text = `📥 Yangi obuna:\n📧 Email: ${email}`;

    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text
        })
      });

      if (res.ok) {
        toast.success("Email yuborildi. Rahmat! 😊");
        setEmail("");
      } else {
        toast.error("Yuborishda xatolik. Qayta urinib ko'ring.");
      }
    } catch (err) {
      toast.error("Tarmoq xatoligi yuz berdi.");
    }
  };

  return (
    <div className="bg-black">
      <div data-aos='fade-down' className="container mx-auto px-4 sm:px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">
          <h1 className="text-2xl sm:text-3xl font-semibold text-white text-center md:text-left">
            Keling, u yerda bog'lanamiz
          </h1>
          <button className="bg-orange-400 cursor-pointer px-6 sm:px-10 py-1.5 text-lg sm:text-xl text-white rounded-full sm:rounded-4xl">
            <a className="flex gap-1.5 items-center" href="#home">
              Hire Me <MdEast />
            </a>
          </button>
        </div>
        
        <div className="rounded-full sm:rounded-4xl bg-white py-0.5"></div>

        {/* Main Content */}
        <div className="text-white py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="max-w-full sm:col-span-2 lg:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-1">
              <img src={Logo} alt="logo" className="w-8 h-8" />
              <h2 className="text-lg sm:text-xl">
                <span className="text-orange-400 font-bold">O</span>ybek
                <span className="text-orange-400 font-bold">Sh</span>akh
              </h2>
            </div>
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur officia laudantium esse, hic cum neque iusto sequi amet molestiae earum laborum nulla modi commodi.
            </p>
            <div className="flex gap-4 sm:gap-5 text-xl">
              <FaFacebookSquare className="hover:text-orange-400 cursor-pointer transition-colors" />
              <FaGithub className="hover:text-orange-400 cursor-pointer transition-colors" />
              <a href="tel:902602680" className="hover:text-orange-400 transition-colors">
                <MdAddIcCall className="cursor-pointer" />
              </a>
              <SiInstagram className="hover:text-orange-400 cursor-pointer transition-colors" />
              <FaTwitter className="hover:text-orange-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <h2 className="text-orange-400 text-lg sm:text-xl font-bold">Navigation</h2>
            <div className="flex flex-col gap-2 text-sm sm:text-base">
              <a href="#" className="hover:text-orange-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-orange-400 transition-colors">About us</a>
              <a href="#services" className="hover:text-orange-400 transition-colors">Service</a>
              <a href="#resume" className="hover:text-orange-400 transition-colors">Resume</a>
              <a href="#skills" className="hover:text-orange-400 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <h2 className="text-orange-400 text-lg sm:text-xl font-bold">Contact</h2>
            <div className="flex flex-col gap-2 text-sm sm:text-base">
              <a href="tel:902640680" className="hover:text-orange-400 transition-colors">
                +998 90 264 06 80
              </a>
              <p>egamberdiyevOybek@gmail.com</p>
              <p>My Portfolio React JS</p>
              <a 
                href="https://t.me/shakh_077_01" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-orange-400 transition-colors"
              >
                <span className="flex items-center gap-1.5">
                  <BsTelegram /> shakh_077_01
                </span>
              </a>
            </div>
          </div>

          {/* Email Subscription */}
          <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
            <h2 className="text-lg sm:text-xl text-orange-400 font-bold">Get The Latest Information</h2>
            <form className="relative" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="@email"
                className="py-2 sm:py-3 px-4 w-full text-black bg-gray-100 rounded-full sm:rounded-4xl text-sm sm:text-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-orange-400 px-3 sm:px-4 cursor-pointer absolute top-1 sm:top-1.5 right-1 sm:right-2 rounded-full sm:rounded-4xl py-1 sm:py-1.5 text-white text-sm sm:text-base"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        
        <div className="rounded-full sm:rounded-4xl bg-white py-0.5 mt-4 sm:mt-6"></div>
      </div>
    </div>
  );
}

export default Footer;