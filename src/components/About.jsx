import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className='py-15' id='about'>
      <div data-aos='fade-down' className='container text-center'>
        <h2 className='text-3xl lg:text-5xl font-bold py-8'>Salom, Mening Ismim Oybek</h2>
        <h3 className='w-full sm:w-[1200px] mx-auto font-medium text-xl lg:text-3xl'>
          <span className='text-orange-500 font-semibold'>" </span>Men bir yildan ortiq tajribaga ega{' '}
          <span className='text-orange-500 font-semibold'>JavaScript dasturchisi</span> va{' '}
          <span className='text-orange-500 font-semibold'> Front-End ishlab chiqaruvchisiman.</span> Veb-ilovalar
          yarataman va barcha qurilmalarda yaxshi ishlaydigan responsiv dizaynlar tayyorlayman.
          <span className='text-orange-500 font-semibold'>"</span>
        </h3>
      </div>

      <div className='flex flex-col sm:flex-row my-8 shadow-2xl hover:scale-110 transition-transform duration-500 ease-in-out border-4 rounded-4xl sm:w-[800px] mx-auto'>
        <div data-aos='fade-right' className='w-full sm:w-[400px] sm:border-r-2 text-center my-10'>
          <h2 className='text-orange-500 font-bold text-2xl'>Javascript Software Engineer</h2>
          <h3 className='text-black font-semibold text-1xl'>Tools:</h3>
          <h4 className='text-black font-semibold text-xl'>JavaScript, Typescript</h4>
        </div>

        <div data-aos='fade-left' className='w-full sm:w-[400px] text-center sm:border-l-2 my-10'>
          <h2 className='text-orange-500 font-bold text-2xl'>Front End Developer</h2>
          <h3 className='text-black font-semibold text-1xl'>Tools:</h3>
          <h4 className='text-black font-semibold text-xl'>HTML, CSS, JS, React</h4>
        </div>
      </div>
    </div>
  );
}

export default About;
