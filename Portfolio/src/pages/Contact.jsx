import React from "react";
import gettouch from "../images/gettouch.png";
import user from "../images/user.png";
import gmail from "../images/gmail.png";
import phone from "../images/phone.png";
import message from "../images/message.png";

export default function Contact() {
    return (
        <section className="min-h-screen w-full bg-gradient-to-br from-sky-50 via-white to-indigo-100 flex items-center px-6 lg:px-20 py-12">
            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Section */}
                <div className="flex flex-col items-center justify-center text-center">
                    <img
                        src={gettouch}
                        alt="Contact Illustration"
                        className="w-full max-w-md lg:max-w-lg"
                    />

                    <h2 className="text-5xl font-bold text-slate-800 mt-8">
                        Let's Connect
                    </h2>

                    <p className="text-gray-600 text-lg mt-4 max-w-md leading-8">
                        Have an idea, project, or freelance opportunity?
                        I'd love to hear from you. Fill out the form and I'll get back to
                        you as soon as possible.
                    </p>
                </div>

                {/* Right Section */}
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-10">

                    <h3 className="text-3xl font-bold text-slate-800 mb-8">
                        Send Me a Message
                    </h3>

                    <form className="space-y-6">

                        {/* Name */}
                        <div>
                            <label className="flex items-center gap-2 font-medium text-gray-700 mb-2">
                                <img src={user} alt="User" className="w-5 h-5" />
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="flex items-center gap-2 font-medium text-gray-700 mb-2">
                                <img src={gmail} alt="Email" className="w-5 h-5" />
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="example@gmail.com"
                                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="flex items-center gap-2 font-medium text-gray-700 mb-2">
                                <img src={phone} alt="Phone" className="w-5 h-5" />
                                Phone Number
                            </label>

                            <input
                                type="tel"
                                placeholder="+91 XXXXX XXXXX"
                                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="flex items-center gap-2 font-medium text-gray-700 mb-2">
                                <img src={message} alt="Message" className="w-5 h-5" />
                                Message
                            </label>

                            <textarea
                                rows="5"
                                placeholder="Tell me about your project..."
                                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-xl"
                        >
                            Send Message
                        </button>

                    </form>
                </div>

            </div>
        </section>
    );
}