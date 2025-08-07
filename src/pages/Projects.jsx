import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BackToHome from '../components/BackToHome'

const projectLinks = [
  "https://regal-sunburst-a28c98.netlify.app/",
  "https://travel-ef007.netlify.app/",
  "https://cvidshots.netlify.app/",
  "https://forkify-ef007.netlify.app/",
  "https://grocery-ef007.netlify.app/",
  "https://vaid-ef007.netlify.app/",
  "https://omnifood-ef007.netlify.app/",
]

const API_KEY = "97d496b9a88730f5a4baac2f1c5b81b5"

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchMetaData = async () => {
      const fetchedData = await Promise.all(
        projectLinks.map(async (url) => {
          try {
            const { data } = await axios.get(
              `https://api.linkpreview.net/?key=${API_KEY}&q=${url}`
            )
            return { ...data, url }
          } catch (error) {
            return { title: "Preview Unavailable", description: "", image: "", url }
          }
        })
      )
      setProjects(fetchedData)
    }

    fetchMetaData()
  }, [])

  return (
    <div className="min-h-screen to-gray-200 px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">🚀 My Projects</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-xl p-4 shadow hover:shadow-md transition-all duration-300 flex flex-col"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
            )}
            <h2 className="text-lg font-bold text-gray-800 group-hover:text-blue-600">{project.title}</h2>
            <p className="text-sm text-gray-600 mt-1">{project.description}</p>
            <span className="mt-auto text-xs text-blue-500 truncate">🔗 {project.url}</span>
          </a>
        ))}
      </div>

      <div className="mt-16">
        <BackToHome />
      </div>
    </div>
  )
}

export default Projects
