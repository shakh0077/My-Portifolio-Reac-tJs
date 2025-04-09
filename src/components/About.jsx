import React from 'react'

function About() {
  return (
    <div className='py-15' id='about'>
        <div className='container text-center '>
            <h2 className='text-5xl font-bold py-8'> Salom, Mening Ismim Oybek</h2>
            <h3 className='w-[1200px] mx-auto font-medium text-3xl'><span className='text-orange-500 font-semibold'>"</span>Men bir yildan ortiq tajribaga ega <span className='text-orange-500 font-semibold'>JavaScript dasturchisi</span> va <span className='text-orange-500 font-semibold'> Front-End ishlab chiqaruvchisiman.</span> Veb-ilovalar yarataman va barcha qurilmalarda yaxshi ishlaydigan responsiv dizaynlar tayyorlayman.<span className='text-orange-500 font-semibold'>"</span></h3>
        </div>
        <div className='flex my-8 shadow-2xl hover:scale-110 transition-transform duration-500 ease-in-out border-4 rounded-4xl w-[800px] mx-auto'>
            <div className='w-[400px] border-r-2 text-center my-10'>
                <h2 className='text-orange-500 font-bold text-2xl'>Javascript Software Engineer</h2>
                <h3 className='text-black font-semibold text-1xl'>Tools:</h3>
                <h4 className='text-black font-semibold text-xl'>JavaScript , Typescript</h4>
            </div>

            <div className='w-[400px] text-center border-l-2 my-10'>
                <h2 className='text-orange-500 font-bold text-2xl'>Front End Developer</h2>
                <h3 className='text-black font-semibold text-1xl'>Tools:</h3>
                <h4 className='text-black font-semibold text-xl'>HTML , CSS , JS , React </h4>
            </div>
        </div>
    </div>
  )
}

export default About