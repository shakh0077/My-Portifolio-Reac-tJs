import React from "react";
import Logo from '../assets/logo.svg'

function Home() {


  return (
    <>
    <div className="container">
      <nav className="flex justify-between items-center bg-black rounded-4xl text-white px-5  sticky top-5 ">
        <h1>Home</h1>
        <h2>About</h2>
        <h2>Service</h2>
        <div className="flex items-center gap-2.5">
        <img src={Logo} alt="logotip" />
        <h2>OybekShakh</h2>
        </div>
        <h2>Resume</h2>
        <h2>Project</h2>
        <h2>Contact</h2>
      </nav>
    </div>
    
    </>
  );
}

export default Home;
