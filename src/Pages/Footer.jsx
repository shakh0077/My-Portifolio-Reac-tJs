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

    // Email validatsiyasi
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      toast.error("Iltimos, email kiriting!");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Email formati noto‘g‘ri!");
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
        toast.error("Yuborishda xatolik. Qayta urinib ko‘ring.");
      }
    } catch (err) {
      toast.error("Tarmoq xatoligi yuz berdi.");
    }
  };

  return (
    <div className="bg-black">
      <div  data-aos='fade-down' className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-3xl font-semibold text-white">Keling, u yerda bog‘lanamiz</h1>
          <button className="bg-orange-400 cursor-pointer px-10 py-1.5 text-xl text-white rounded-4xl">
            <a className="flex gap-1.5 items-center" href="#home">Hire Me <MdEast /></a>
          </button>
        </div>
        <div className="rounded-4xl bg-white py-0.5"></div>

        <div className="text-white py-5 flex flex-wrap gap-12">
          {/* Logo & About */}
          <div className="max-w-[500px] text-justify flex flex-col gap-4">
            <div className="flex items-center gap-1">
              <img src={Logo} alt="logo" />
              <h2>
                <span className="text-orange-400 font-bold text-xl">O</span>ybek
                <span className="text-orange-400 font-bold text-xl">Sh</span>akh
              </h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur officia laudantium esse, hic cum neque iusto sequi amet molestiae earum laborum nulla modi commodi, magni vitae expedita qui architecto, tempore ratione.
            </p>
            <div className="flex gap-5.5 items-center text-xl">
              <FaFacebookSquare className="hover:text-orange-400 cursor-pointer" />
              <FaGithub className="hover:text-orange-400 cursor-pointer" />
              <a href="tel:902602680"><MdAddIcCall className="hover:text-orange-400 cursor-pointer" /></a>
              <SiInstagram className="hover:text-orange-400 cursor-pointer" />
              <FaTwitter className="hover:text-orange-400 cursor-pointer" />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-1">
            <h2 className="text-orange-400 text-xl font-bold">Navigation</h2>
            <div className="flex flex-col gap-3 text-white">
              <a href="#">Home</a>
              <a href="#about">About us</a>
              <a href="#services">Service</a>
              <a href="#resume">Resume</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-1.5">
            <h2 className="text-orange-400 text-xl font-bold">Contact</h2>
            <div className="flex flex-col gap-3">
              <a href="tel:902640680"><h3>+998 90 264 06 80</h3></a>
              <h3>egamberdiyevOybek@gmail.com</h3>
              <h3>My Portfolio React JS</h3>
              <a href="https://t.me/shakh_077_01" target="_blank" rel="noreferrer">
                <h2 className="text-xl flex items-center gap-1.5"><BsTelegram />shakh_077_01</h2>
              </a>
            </div>
          </div>

          {/* Email Subscription */}
          <div className="flex flex-col gap-3 w-full md:w-[300px]">
            <h2 className="text-2xl text-orange-400 font-bold">Get The Latest Information</h2>
            <form className="relative" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="@email"
                className="py-3 px-4 w-full text-black bg-gray-100 rounded-4xl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-orange-400 px-4 cursor-pointer absolute top-1.5 right-2 rounded-4xl py-1.5 text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="rounded-4xl bg-white py-0.5 mt-6"></div>
      </div>
    </div>
  );
}

export default Footer;
