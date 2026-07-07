import React from "react";
import laptop from "../images/laptop.png";

export default function Projects() {
    const projects = [
        {
            title: "Personal Portfolio",
            description:
                "A modern and responsive portfolio website showcasing my skills, projects, experience, and freelancing services. Built with React and Tailwind CSS.",
            technologies: ["React", "Tailwind CSS", "JavaScript"],
            demo: "https://portfolio-aco5.onrender.com",
            github: "https://github.com/itsyashi126/Portfolio.git",
        },
        {
            title: "E-Commerce Website",
            description:
                "A responsive online shopping platform featuring product listings, shopping cart, authentication, and secure checkout.",
            technologies: ["React", "Node.js", "MongoDB"],
            demo: "#",
            github: "#",
        },
        {
            title: "Student Management System",
            description:
                "A full-stack web application to manage student records with CRUD operations, authentication, and MySQL database.",
            technologies: ["Python", "MySQL", "React"],
            demo: "#",
            github: "#",
        },
        {
            title: "Landing Page",
            description:
                "A responsive business landing page with attractive UI, smooth animations, and lead generation form.",
            technologies: ["HTML", "CSS", "JavaScript"],
            demo: "#",
            github: "#",
        },
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-sky-100 via-blue-50 to-purple-100">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="flex items-center justify-center gap-3 mb-16">
                    <img src={laptop} alt="Projects" className="w-12 h-12" />

                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                        My Projects
                    </h2>
                </div>

                {/* Projects */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
                        >
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                {project.title}
                            </h3>

                            <p className="text-gray-600 leading-7 mb-6">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4 flex-wrap">
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:scale-105 transition duration-300"
                                >
                                    🚀 Live Demo
                                </a>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 border-2 border-purple-500 text-purple-600 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition duration-300"
                                >
                                    💻 Source Code
                                </a>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}