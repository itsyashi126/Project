import React from "react";
import user from "../images/user.png";
import profile from "../images/profile.png";

export default function About() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-purple-100 py-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="flex items-center justify-center gap-3 mb-16">
                    <img src={user} alt="User Icon" className="w-10 h-10" />
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                        About Me
                    </h2>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* Left Side */}
                    <div className="flex justify-center">
                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-3xl blur-xl opacity-30"></div>

                            <div className="relative bg-white p-4 rounded-3xl shadow-2xl hover:scale-105 duration-300">

                                <img
                                    src={profile}
                                    alt="Profile"
                                    className="w-80 md:w-96 rounded-2xl object-cover"
                                />

                            </div>

                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-xl">

                        <h3 className="text-4xl font-bold text-gray-800">
                            Hi, I'm <span className="text-cyan-600">Yashi Sharma</span>
                        </h3>

                        <h4 className="text-xl font-semibold text-purple-600 mt-3">
                            MCA Graduate | Full Stack Developer
                        </h4>

                        <p className="mt-6 text-gray-700 leading-8 text-lg">
                            I'm a passionate Software Developer specializing in
                            <span className="font-semibold text-cyan-600">
                                {" "}Full Stack Web Development.
                            </span>{" "}
                            I have completed my MCA from Medicaps University, Indore.
                            My expertise includes React.js, JavaScript, Python, MySQL,
                            DBMS, Tailwind CSS, HTML, and CSS.

                            <br />
                            <br />

                            I enjoy building responsive, user-friendly applications
                            that solve real-world problems while continuously learning
                            new technologies to improve my development skills.
                        </p>

                        {/* Info Cards */}
                        <div className="grid sm:grid-cols-2 gap-5 mt-10">

                            <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl p-5 shadow-md hover:-translate-y-1 hover:shadow-lg transition duration-300">
                                <h5 className="font-bold text-cyan-700 mb-2">
                                    📧 Email
                                </h5>

                                <p className="text-gray-700 break-all">
                                    yashisharma99935@gmail.com
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-5 shadow-md hover:-translate-y-1 hover:shadow-lg transition duration-300">
                                <h5 className="font-bold text-purple-700 mb-2">
                                    📍 Location
                                </h5>

                                <p className="text-gray-700">
                                    Ujjain, Madhya Pradesh
                                </p>
                            </div>

                        </div>

                        {/* Resume Button */}
                        <div className="mt-10">
                            <a
                                href="/Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
                            >
                                📄 Download Resume
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}