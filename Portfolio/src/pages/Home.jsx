import React from "react";
import { Typewriter } from "react-simple-typewriter";

import profile from "../images/profile.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import instagram from "../images/instagram.png";
import gmail from "../images/gmail.png";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-purple-100 flex items-center px-6 py-16">
      <div className="max-w-7xl mx-auto w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">

            <p className="text-2xl md:text-3xl text-gray-700 mb-3">
              👋 Hi There,
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
              I'm{" "}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Yashi Sharma
              </span>
            </h1>

            <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-purple-600 h-12">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Full Stack Developer",
                  "React Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl mx-auto lg:mx-0">
              Passionate about building responsive, modern and user-friendly
              web applications using React, JavaScript, Tailwind CSS,
              Python and MySQL.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-5 mt-8">

              <a
                href="https://github.com/itsyashi126"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition"
              >
                <img src={github} alt="GitHub" className="w-7 h-7" />
              </a>

              <a
                href="https://www.linkedin.com/in/yashisharma1206"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition"
              >
                <img src={linkedin} alt="LinkedIn" className="w-7 h-7" />
              </a>

              <a
                href="https://www.instagram.com/code_with_yashi/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition"
              >
                <img src={instagram} alt="Instagram" className="w-7 h-7" />
              </a>

              <a
                href="mailto:yashisharma99935@gmail.com"
                className="bg-white p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition"
              >
                <img src={gmail} alt="Gmail" className="w-7 h-7" />
              </a>

            </div>

            {/* Resume Button */}
            <div className="mt-10">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
              >
                📄 Download Resume
              </a>
            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative">

              <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-30"></div>

              <img
                src={profile}
                alt="Profile"
                className="relative w-72 sm:w-80 md:w-96 rounded-full border-8 border-white shadow-2xl hover:scale-105 transition duration-500"
              />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}