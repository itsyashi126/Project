import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Service from "./pages/Service";
import GetQuote from './pages/GetQuote';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

export default function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/about' element={<About />} />
          <Route path='/getquote' element={<GetQuote />} />
          <Route path='/education' element={<Education />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </div>


  )
}
