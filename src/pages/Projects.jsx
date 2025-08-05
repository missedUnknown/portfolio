import React from 'react'
import BackToHome from '../components/BackToHome'

const projects = [
  {
    name: "Role Based Access Control",
    url: "https://regal-sunburst-a28c98.netlify.app/",
  },
  {
    name: "Travigo - Travel Booking",
    url: "https://travel-ef007.netlify.app/",
  },
  {
    name: "Youtube clone",
    url: "https://cvidshots.netlify.app/",
  },
  {
    name: "Forkify - Recipe App",
    url: "https://forkify-ef007.netlify.app/",
  },
  {
    name: "Grocery Store App",
    url: "https://grocery-ef007.netlify.app/",
  },
  {
    name: "Hospital Management System - UI",
    url: "https://vaid-ef007.netlify.app/",
  },
  {
    name: "Omnifood - Food Delivery",
    url: "https://omnifood-ef007.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">🚀 My Projects</h1>
      <div className="max-w-3xl mx-auto space-y-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800 hover:bg-gray-700 px-6 py-4 rounded-lg shadow-lg transition-all duration-200"
          >
            <span className="text-lg font-semibold">{project.name}</span>
            <span className="block text-sm text-purple-400 mt-1">
              🔗 {project.url}
            </span>
          </a>
        ))}
      </div>
      <BackToHome />
    </div>
  )
}

export default Projects