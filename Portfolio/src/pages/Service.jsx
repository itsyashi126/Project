import React from "react";

export default function Service() {
    const services = [
        {
            icon: "👤",
            title: "Personal Websites",
            description:
                "Modern portfolio and personal branding websites that showcase your skills, achievements, and professional journey.",
        },
        {
            icon: "🏢",
            title: "Business Websites",
            description:
                "Professional business websites designed to establish credibility, attract customers, and grow your brand.",
        },
        {
            icon: "🛍️",
            title: "E-Commerce Websites",
            description:
                "Responsive online stores with product management, shopping cart, payment integration, and secure checkout.",
        },
        {
            icon: "🚀",
            title: "Landing Pages",
            description:
                "High-converting landing pages optimized for marketing campaigns, product launches, and lead generation.",
        },
    ];

    const process = [
        {
            step: "01",
            title: "Discovery & Planning",
            description:
                "Understanding your goals, audience, and project requirements.",
        },
        {
            step: "02",
            title: "UI/UX Design",
            description:
                "Creating beautiful, modern, and user-friendly interface designs.",
        },
        {
            step: "03",
            title: "Development",
            description:
                "Building fast, responsive, and scalable web applications.",
        },
        {
            step: "04",
            title: "Testing",
            description:
                "Ensuring your website is bug-free and performs smoothly.",
        },
        {
            step: "05",
            title: "Deployment & Support",
            description:
                "Launching your website and providing ongoing maintenance.",
        },
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-sky-100 via-blue-50 to-purple-100">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Freelancing Services
                    </h2>

                    <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
                        Ready to transform your digital vision into reality? I provide
                        end-to-end web development solutions for startups, businesses,
                        and individuals by building modern, responsive, and
                        high-performance websites tailored to your goals.
                    </p>
                </div>

                {/* Services */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300"
                        >
                            <div className="text-5xl mb-5">{service.icon}</div>

                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 leading-7">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Development Process */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-gray-800">
                        My Development Process
                    </h2>

                    <p className="mt-4 text-gray-600">
                        A simple and transparent workflow to ensure every project is
                        delivered successfully.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {process.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300"
                        >
                            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white flex items-center justify-center text-xl font-bold mb-6">
                                {item.step}
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 leading-7">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-24 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">

                    <h2 className="text-4xl font-bold">
                        Ready to Start Your Project?
                    </h2>

                    <p className="mt-5 text-lg max-w-2xl mx-auto">
                        Let's discuss your ideas and build a beautiful, fast, and
                        responsive website that helps your business grow.
                    </p>

                    <button className="mt-8 bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 hover:scale-105 transition duration-300 shadow-lg">
                        Get Free Quote
                    </button>

                </div>

            </div>
        </section>
    );
}