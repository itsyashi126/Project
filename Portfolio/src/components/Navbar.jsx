import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import laptop from "../images/laptop.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img
                        src={laptop}
                        alt="Laptop"
                        className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                        Yashi Sharma
                    </h2>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-white font-medium">
                    <li>
                        <Link className="hover:text-cyan-400 transition" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:text-cyan-400 transition" to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:text-cyan-400 transition" to="/service">
                            Service
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:text-cyan-400 transition" to="/getquote">
                            Get Quote
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:text-cyan-400 transition" to="/education">
                            Education
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:text-cyan-400 transition" to="/experience">
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:text-cyan-400 transition" to="/projects">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:text-cyan-400 transition" to="/skills">
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:text-cyan-400 transition" to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-slate-900 border-t border-slate-700">
                    <ul className="flex flex-col items-center py-4 space-y-4 text-white font-medium">
                        <li>
                            <Link to="/" onClick={() => setIsOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={() => setIsOpen(false)}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/service" onClick={() => setIsOpen(false)}>
                                Service
                            </Link>
                        </li>
                        <li>
                            <Link to="/getquote" onClick={() => setIsOpen(false)}>
                                Get Quote
                            </Link>
                        </li>
                        <li>
                            <Link to="/education" onClick={() => setIsOpen(false)}>
                                Education
                            </Link>
                        </li>
                        <li>
                            <Link to="/experience" onClick={() => setIsOpen(false)}>
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" onClick={() => setIsOpen(false)}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/skills" onClick={() => setIsOpen(false)}>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={() => setIsOpen(false)}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}