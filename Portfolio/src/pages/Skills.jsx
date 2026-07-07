import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import reactjs from "../images/reactjs.png";
import tailwindcss from "../images/tailwindcss.png";
import c from "../images/c.png";
import cplus from "../images/cplus.png";
import python from "../images/python.png";
import mysql from "../images/mysql.png";
import mongodb from "../images/mongodb.png";
import github from "../images/github.png";

export default function Skills() {
    const skills = [
        { name: "HTML", image: html },
        { name: "CSS", image: css },
        { name: "JavaScript", image: js },
        { name: "React JS", image: reactjs },
        { name: "Tailwind CSS", image: tailwindcss },
        { name: "C", image: c },
        { name: "C++", image: cplus },
        { name: "Python", image: python },
        { name: "MySQL", image: mysql },
        { name: "MongoDB", image: mongodb },
        { name: "GitHub", image: github },
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-sky-100 via-blue-50 to-purple-100">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    My Skills
                </h1>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">

                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-cyan-300"
                        >
                            <img
                                src={skill.image}
                                alt={skill.name}
                                className="w-16 h-16 object-contain mb-4"
                            />

                            <h3 className="text-lg font-semibold text-gray-700 text-center">
                                {skill.name}
                            </h3>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}