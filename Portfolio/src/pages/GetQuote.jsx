import React from "react";

export default function GetQuote() {
    return (
        <>
            <section className="min-h-screen bg-slate-950 text-white py-16 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

                    {/* Left Card */}
                    <div className="bg-slate-900 rounded-3xl p-10 shadow-2xl border border-slate-800">
                        <h2 className="text-4xl font-bold mb-8 text-cyan-400">
                            Why Choose Me?
                        </h2>

                        <div className="space-y-6">

                            <div className="bg-slate-800 p-5 rounded-xl hover:bg-slate-700 transition">
                                <h4 className="text-xl font-semibold text-white">
                                    Quick Delivery
                                </h4>
                                <p className="text-gray-400 mt-2">
                                    Deliver your project on time.
                                </p>
                            </div>

                            <div className="bg-slate-800 p-5 rounded-xl hover:bg-slate-700 transition">
                                <h4 className="text-xl font-semibold">
                                    Clear Communication
                                </h4>
                                <p className="text-gray-400 mt-2">
                                    Regular updates and transparent process.
                                </p>
                            </div>

                            <div className="bg-slate-800 p-5 rounded-xl hover:bg-slate-700 transition">
                                <h4 className="text-xl font-semibold">
                                    Quality Guarantee
                                </h4>
                                <p className="text-gray-400 mt-2">
                                    100% satisfaction guarantee.
                                </p>
                            </div>

                            <div className="bg-slate-800 p-5 rounded-xl hover:bg-slate-700 transition">
                                <h4 className="text-xl font-semibold">
                                    Client Focused
                                </h4>
                                <p className="text-gray-400 mt-2">
                                    Solutions tailored to your specific goals.
                                </p>
                            </div>

                            <div className="bg-slate-800 p-5 rounded-xl hover:bg-slate-700 transition">
                                <h4 className="text-xl font-semibold">
                                    Modern Technology
                                </h4>
                                <p className="text-gray-400 mt-2">
                                    Latest frameworks and best practices.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="bg-slate-900 rounded-3xl p-10 shadow-2xl border border-slate-800">

                        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-8">
                            Get a Free Quote
                        </h2>

                        <form className="space-y-5">

                            <div>
                                <label
                                    htmlFor="fullname"
                                    className="block mb-2 font-medium"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullname"
                                    className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 font-medium"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block mb-2 font-medium"
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
                                    placeholder="+91 XXXXX XXXXX"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="company"
                                    className="block mb-2 font-medium"
                                >
                                    Company / Organization
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
                                    placeholder="Company Name"
                                />
                            </div>

                            {/* Service Required */}
                            <div>
                                <label
                                    htmlFor="service"
                                    className="block mb-2 font-medium"
                                >
                                    Service Required
                                </label>

                                <select
                                    id="service"
                                    className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
                                >
                                    <option>Choose a Service</option>
                                    <option>Landing Page</option>
                                    <option>E-Commerce Website</option>
                                    <option>Business Websites</option>
                                    <option>Website Redesign</option>
                                    <option>Portfolio Website</option>
                                    <option>Logo Making</option>
                                    <option>Landing Page</option>
                                </select>
                            </div>

                            {/* Budget */}
                            <div>
                                <label
                                    htmlFor="budget"
                                    className="block mb-2 font-medium"
                                >
                                    Budget Range
                                </label>

                                <select
                                    id="budget"
                                    className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
                                >
                                    <option>Select Budget</option>
                                    <option>under 5000</option>
                                    <option>₹5,000 - ₹10,000</option>
                                    <option>₹10,000 - ₹25,000</option>
                                    <option>₹25,000 - ₹50,000</option>
                                    <option>₹50,000 - ₹1,00,000</option>
                                    <option>₹1,00,000+</option>
                                </select>
                            </div>

                            {/* Timeline */}
                            <div>
                                <label
                                    htmlFor="timeline"
                                    className="block mb-2 font-medium"
                                >
                                    Project Timeline
                                </label>

                                <select
                                    id="timeline"
                                    className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
                                >
                                    <option>Select Timeline</option>
                                    <option>ASAP</option>
                                    <option>1 Week</option>
                                    <option>2-4 Weeks</option>
                                    <option>1-2 Months</option>
                                    <option>Flexible</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="details"
                                    className="block mb-2 font-medium"
                                >
                                    Project Details
                                </label>

                                <textarea
                                    id="details"
                                    rows="5"
                                    className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-cyan-500 hover:bg-cyan-600 rounded-xl font-semibold text-lg transition duration-300 shadow-lg hover:shadow-cyan-500/40"
                            >
                                Send Project Inquiry
                            </button>

                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}