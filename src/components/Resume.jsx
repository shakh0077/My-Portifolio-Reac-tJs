import React from 'react';

const Resume = () => {
  return (
    <div className='bg-gray-200' id='resume'>
            <div className='container'>
        <div className='text-center py-5'>
        <h2 className='text-3xl font-bold underline'>Resume.</h2>
        </div>
            <div className="border bg-white p-10" style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '5px' }}>Oybek Egamberdiyev</h1>
        
        <div className="contact-info" style={{ marginBottom: '20px' }}>
          <p style={{ margin: '5px 0' }}>+998 902640680 | egamberdiyivoybek@gmail.com</p>
          <p style={{ margin: '5px 0' }}>
            LinkedIn: <a href="https://www.linkedin.com/in/oybek-egamberdiyiv-221502354/" target="_blank" rel="noopener noreferrer">
              https://www.linkedin.com/in/oybek-egamberdiyiv-221502354/
            </a>
          </p>
          <p style={{ margin: '5px 0' }}>
            GitHub: <a href="https://github.com/shakh0077" target="_blank" rel="noopener noreferrer">
              https://github.com/shakh0077
            </a>
          </p>
        </div>
      </header>

      <hr style={{ margin: '20px 0', border: '1px solid #eee' }} />

      <section className="experience" style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>EXPERIENCE</h2>
        
        <div className="job" style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '5px' }}>
            <strong>Frontend Engineer, Smart Outsourcing Solutions LLC</strong> (Jun. 2024 – Present, Tashkent)
          </h3>
          <ul style={{ marginLeft: '20px', paddingLeft: '0' }}>
            <li style={{ marginBottom: '8px' }}>Developed 10+ projects including CRM, Marketing, Javascript, etc.</li>
            <li style={{ marginBottom: '8px' }}>Improved code quality and stability by removing flaky tests and increased test coverage from 50% to 85% with Unit, Integration, and E2E tests</li>
            <li style={{ marginBottom: '8px' }}>Leveraged Yandex/Google Maps API to display over 10K+ locations on a map. Applied markers, clustering, and advanced optimizations to enhance performance and user experience.</li>
            <li style={{ marginBottom: '8px' }}>Implemented a promotional code feature on an e-commerce site with 5K+ users, including time-limited tokens and various discount options.</li>
            <li style={{ marginBottom: '8px' }}>Optimized backend performance by reducing requests and caching data, resulting in a 25% decrease in API response time.</li>
          </ul>
        </div>

        <div className="job" style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '5px' }}>
            <strong>Business Developer (React / JavaScript)</strong>
          </h3>
          <ul style={{ marginLeft: '20px', paddingLeft: '0' }}>
            <li style={{ marginBottom: '8px' }}>Collaborated with a team of 4 developers to build a using React and Git/GitHub for version control. Includes roles for admin, teacher, and student, along with chat for support.</li>
            <li style={{ marginBottom: '8px' }}>Created an E-commerce site for a color trading company using HTML/CSS, JavaScript, and Features include 10+ categories, 2K+ colors, and User, Master, and Trader cabinets.</li>
          </ul>
        </div>
      </section>

      <section className="projects" style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>PROJECTS</h2>
        <ul style={{ marginLeft: '20px', paddingLeft: '0' }}>
          <li style={{ marginBottom: '8px' }}>Created customizable Front and Admin panel templates with JavaScript, and Pinia for State Management. Available as an open-source project on GitHub.</li>
          <li style={{ marginBottom: '8px' }}>Optimized SEO with the use of robots, sitemaps, static tags, and image optimization.</li>
          <li style={{ marginBottom: '8px' }}>Offers a robust suite of essential Components, Composables, Helpers, Functions, Plugins, and Tests.</li>
          <li style={{ marginBottom: '8px' }}><strong>Engineered a smart home automation interface with robust IoT device integration.</strong></li>
          <li style={{ marginBottom: '8px' }}><strong>Enabled real-time control and monitoring of connected devices via custom dashboards.</strong></li>
          <li style={{ marginBottom: '8px' }}><strong>Streamlined user interaction with efficient, visually appealing design elements.</strong></li>
        </ul>
      </section>

      <section className="education">
        <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>Education</h2>
        <div className="education-item">
          <h3 style={{ fontSize: '18px', marginBottom: '5px' }}>
            <strong>PDP Academy, Computer Science & Frontend Development</strong> (Jan. 2024)
          </h3>
          <ul style={{ marginLeft: '20px', paddingLeft: '0' }}>
            <li style={{ marginBottom: '8px' }}><strong>Awardee of merit-based scholarship</strong></li>
            <li style={{ marginBottom: '8px' }}><strong>Gold Certificate Professional Frontend Developer</strong></li>
          </ul>
        </div>
      </section>
    </div>
    </div>
    </div>
  );
};

export default Resume;