import { Link } from "react-router-dom";
import laptop from "../images/laptop.png";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-5 bg-slate-900/90 backdrop-blur-md shadow-lg">

            {/* Logo */}
            <div className="flex items-center gap-3">
                <img src={laptop} alt="Laptop" className="w-12 h-12" />
                <h2 className="text-3xl font-bold text-white">
                    Yashi Sharma
                </h2>
            </div>

            {/* Navigation */}
            <ul className="flex items-center gap-8 text-white font-medium">
                <li><Link className="hover:text-cyan-400 transition duration-300" to="/">Home</Link></li>
                <li><Link className="hover:text-cyan-400 transition duration-300" to="/about">About</Link></li>
                <li><Link className="hover:text-cyan-400 transition duration-300" to="/service">Service</Link></li>
                <li><Link className="hover:text-cyan-400 transition duration-300" to="/getquote">Get Quote</Link></li>
                <li><Link className="hover:text-cyan-400 transition duration-300" to="/education">Education</Link></li>
                <li><Link className="hover:text-cyan-400 transition duration-300" to="/experience">Experience</Link></li>
                <li><Link className="hover:text-cyan-400 transition duration-300" to="/projects">Projects</Link></li>
                <li><Link className="hover:text-cyan-400 transition duration-300" to="/skills">Skills</Link></li>
                <li><Link className="hover:text-cyan-400 transition duration-300" to="/contact">Contact</Link></li>
            </ul>

        </nav>
    );
}