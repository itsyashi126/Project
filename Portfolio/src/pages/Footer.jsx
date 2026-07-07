import React from "react";
import { Link } from "react-router-dom";

import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import instagram from "../images/instagram.png";
import gmail from "../images/gmail.png";
import phone from "../images/phone.png";
import location from "../images/location.png";

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-300 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-14">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* About */}
                    <div>
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Yashi Sharma
                        </h2>

                        <p className="mt-5 text-gray-400 leading-7">
                            Full Stack Developer passionate about creating modern,
                            responsive and high-performance web applications with
                            beautiful user experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-5">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-cyan-400 transition duration-300"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/about"
                                    className="hover:text-cyan-400 transition duration-300"
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/skills"
                                    className="hover:text-cyan-400 transition duration-300"
                                >
                                    Skills
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/services"
                                    className="hover:text-cyan-400 transition duration-300"
                                >
                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/projects"
                                    className="hover:text-cyan-400 transition duration-300"
                                >
                                    Projects
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:text-cyan-400 transition duration-300"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-5">
                            Contact
                        </h3>

                        <div className="space-y-4">

                            <div className="flex items-center gap-3">
                                <img src={phone} alt="Phone" className="w-5 h-5" />
                                <a
                                    href="tel:+916232770133"
                                    className="hover:text-cyan-400 transition"
                                >
                                    +91 62327 70133
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <img src={gmail} alt="Email" className="w-5 h-5" />
                                <a
                                    href="mailto:yashisharma99935@gmail.com"
                                    className="hover:text-cyan-400 transition break-all"
                                >
                                    yashisharma99935@gmail.com
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <img src={location} alt="Location" className="w-5 h-5" />
                                <span>Ujjain, Madhya Pradesh</span>
                            </div>

                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-5">
                            Follow Me
                        </h3>

                        <div className="flex gap-5">

                            <a
                                href="https://www.linkedin.com/in/yashisharma1206"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-3 rounded-full hover:bg-cyan-500 hover:scale-110 transition duration-300"
                            >
                                <img
                                    src={linkedin}
                                    alt="LinkedIn"
                                    className="w-6 h-6"
                                />
                            </a>

                            <a
                                href="https://github.com/itsyashi126"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-3 rounded-full hover:bg-white hover:scale-110 transition duration-300"
                            >
                                <img
                                    src={github}
                                    alt="GitHub"
                                    className="w-6 h-6"
                                />
                            </a>

                            <a
                                href="https://www.instagram.com/code_with_yashi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-3 rounded-full hover:bg-pink-500 hover:scale-110 transition duration-300"
                            >
                                <img
                                    src={instagram}
                                    alt="Instagram"
                                    className="w-6 h-6"
                                />
                            </a>

                            <a
                                href="mailto:yashisharma99935@gmail.com"
                                className="bg-gray-800 p-3 rounded-full hover:bg-red-500 hover:scale-110 transition duration-300"
                            >
                                <img
                                    src={gmail}
                                    alt="Gmail"
                                    className="w-6 h-6"
                                />
                            </a>

                        </div>

                        <p className="mt-6 text-gray-500 text-sm">
                            Let's build something amazing together 🚀
                        </p>

                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">

                    <p className="text-gray-500 text-sm text-center">
                        © {new Date().getFullYear()}{" "}
                        <span className="text-cyan-400 font-semibold">
                            Yashi Sharma
                        </span>
                        . All Rights Reserved.
                    </p>

                    <p className="text-gray-500 text-sm text-center">
                        Designed & Developed with
                        <span className="text-red-500 mx-1">❤</span>
                        by Yashi
                    </p>

                </div>

            </div>
        </footer>
    );
}