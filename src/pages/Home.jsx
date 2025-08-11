import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      
      <Skills />
      <section id="contact" className="p-10 bg-transparent text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p>Email: <a href="mailto:yourname@example.com" className="text-white">abheyk04@gmail.com</a></p>
        <Link to="/contact">
          <button className="px-6 py-2 my-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            📬 Click here..
          </button>
        </Link>
      </section>
      <footer className="text-center text-purple-900 py-6 text-sm">
        🚀 copyright {new Date().getFullYear()}, Abhey Kumar © All rights reserved. 🚀
      </footer>
    </div>
  )
}

export default Home
