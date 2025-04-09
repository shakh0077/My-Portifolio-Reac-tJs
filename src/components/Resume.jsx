import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-200" id="resume">
      <div className="container px-4 sm:px-6 md:px-10 lg:px-20">
        <div data-aos="fade-down" className="text-center py-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold underline">Resume</h2>
        </div>
        <div
          data-aos="fade-down"
          className="border bg-white p-6 sm:p-8 md:p-10"
          style={{
            maxWidth: "100%",
            margin: "0 auto",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <header className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Oybek Egamberdiyev</h1>

            <div className="contact-info mb-6">
              <p className="text-sm sm:text-base mb-2">+998 902640680 | egamberdiyivoybek@gmail.com</p>
              <p className="text-sm sm:text-base mb-2">
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/oybek-egamberdiyiv-221502354/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://www.linkedin.com/in/oybek-egamberdiyiv-221502354/
                </a>
              </p>
              <p className="text-sm sm:text-base mb-2">
                GitHub:{" "}
                <a
                  href="https://github.com/shakh0077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://github.com/shakh0077
                </a>
              </p>
            </div>
          </header>

          <hr className="border-t-2 mb-6" />

          <section className="experience mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Experience</h2>

            <div className="job mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                <strong>Frontend Engineer, Smart Outsourcing Solutions LLC</strong> (Jun. 2024 – Present, Tashkent)
              </h3>
              <ul className="list-disc pl-6 text-sm sm:text-base">
                <li className="mb-2">Developed 10+ projects including CRM, Marketing, Javascript, etc.</li>
                <li className="mb-2">
                  Improved code quality and stability by removing flaky tests and increased test coverage from 50% to 85% with Unit, Integration, and E2E tests
                </li>
                <li className="mb-2">
                  Leveraged Yandex/Google Maps API to display over 10K+ locations on a map. Applied markers, clustering, and advanced optimizations to enhance performance and user experience.
                </li>
                <li className="mb-2">
                  Implemented a promotional code feature on an e-commerce site with 5K+ users, including time-limited tokens and various discount options.
                </li>
                <li className="mb-2">
                  Optimized backend performance by reducing requests and caching data, resulting in a 25% decrease in API response time.
                </li>
              </ul>
            </div>

            <div className="job mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                <strong>Business Developer (React / JavaScript)</strong>
              </h3>
              <ul className="list-disc pl-6 text-sm sm:text-base">
                <li className="mb-2">
                  Collaborated with a team of 4 developers to build using React and Git/GitHub for version control. Includes roles for admin, teacher, and student, along with chat for support.
                </li>
                <li className="mb-2">
                  Created an E-commerce site for a color trading company using HTML/CSS, JavaScript, and features including 10+ categories, 2K+ colors, and user, master, and trader cabinets.
                </li>
              </ul>
            </div>
          </section>

          <section className="projects mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Projects</h2>
            <ul className="list-disc pl-6 text-sm sm:text-base">
              <li className="mb-2">
                Created customizable Front and Admin panel templates with JavaScript, and Pinia for State Management. Available as an open-source project on GitHub.
              </li>
              <li className="mb-2">
                Optimized SEO with the use of robots, sitemaps, static tags, and image optimization.
              </li>
              <li className="mb-2">
                Offers a robust suite of essential components, composables, helpers, functions, plugins, and tests.
              </li>
              <li className="mb-2">
                <strong>Engineered a smart home automation interface with robust IoT device integration.</strong>
              </li>
              <li className="mb-2">
                <strong>Enabled real-time control and monitoring of connected devices via custom dashboards.</strong>
              </li>
              <li className="mb-2">
                <strong>Streamlined user interaction with efficient, visually appealing design elements.</strong>
              </li>
            </ul>
          </section>

          <section className="education mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Education</h2>
            <div className="education-item mb-4">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                <strong>PDP Academy, Computer Science & Frontend Development</strong> (Jan. 2024)
              </h3>
              <ul className="list-disc pl-6 text-sm sm:text-base">
                <li className="mb-2">
                  <strong>Awardee of merit-based scholarship</strong>
                </li>
                <li className="mb-2">
                  <strong>Gold Certificate Professional Frontend Developer</strong>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
