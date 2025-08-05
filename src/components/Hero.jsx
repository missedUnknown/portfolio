import React from 'react'
import meImage from '../assets/me.png'; 
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="mx-auto backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl px-10 py-4 w-[90%] flex flex-col md:flex-row">
	    
        {/* left Side - Image */}
        <div className="relative w-45 h-45 md:w-70 md:h-70 mx-auto">
          <div className="absolute rounded-full bg-purple-400 border border-amber-100 h-[90%] w-[90%] top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          </div>
          <div className=" absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex-1 flex items-center justify-center">
            <div className="relative w-40 h-40 md:w-65 md:h-65 rounded-full backdrop-blur-md border border-white/20 shadow-lg overflow-visible">
              
              <img
                src={meImage}
                alt="Abhey Kumar"
                className="absolute rounded-full top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl"
                />
            </div>
          </div>  
        </div>       
      	
        {/* Right Side - Text + Buttons */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center md:px-6">
          
          <div className=" w-full font-bold mb-4 flex flex-col md:items-baseline md:justify-between md:flex-row gap-2 flex-wrap">
            <h1 className="text-white/90 text-4xl">Abhey Kumar</h1>
            <span className="text-purple-200 text-2xl">Full Stack Developer</span>
            <span className="text-purple-200 underline">- proud to be a NSWA member.</span>
          </div>
          <p className="text-white/80 mb-4">
            A passionate Full Stack Developer skilled in the MERN stack, crafting sleek UIs with React, Tailwind, and Next.js, and building powerful backends with Node.js, Python, and MySQL. I also specialize in APIs, automations, web scraping, payment integrations, and digital marketing—bridging code with real-world impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/about"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Learn More About Me →
            </Link>
            
            {/* Projects Button */}
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-full shadow hover:bg-purple-500 hover:shadow-2xl hover:text-white border border-transparent hover:border-white/40 transition transform-3d duration-300 ease-in-out text-md font-semibold"
            >
              🚀 Projects
          </Link>
          
          <Link
            to="/learning"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-full shadow hover:bg-purple-500 hover:shadow-2xl hover:text-white border border-transparent hover:border-white/40 transition transform-3d duration-300 ease-in-out text-md font-semibold"
          >
            📚 Start Learning
          </Link>
            
          <a
              href="https://github.com/eaglefree007"
              target="_blank"
              rel="noopener noreferrer"
              className=" inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-full shadow hover:bg-purple-500 hover:shadow-2xl hover:text-white border border-transparent hover:border-white/40 transition transform-3d duration-300 ease-in-out"
            >
              <FaGithub className="text-xl" />
              <span className="text-md font-semibold">GitHub</span>
          </a>
          
          <a
            href="https://orcid.org/0009-0009-5079-640X" // replace with your ORCID
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-green-300 rounded-full border border-white/10 px-4 py-2 hover:bg-purple-400 hover:text-white transition transform-3d duration-300 ease-in-out hover:underline flex items-center gap-1"
          >
            <i className="fab fa-orcid"></i> ORCID: 0009-0009-5079-640X
          </a>

          <a href="#contact">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              📩 Contact Me
            </button>
          </a>
          </div>
        </div>
      </div>
  )
}

export default Hero
