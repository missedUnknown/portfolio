import React, { useState } from "react";
import BackToHome from '../components/BackToHome';
import { Link } from 'react-router-dom';


const syllabusData = [
  {
    title: "🐍 Python",
    topics: [
      "Syntax and Variables",
      "Data Types & Operators",
      "Control Flow (if/else, loops)",
      "Functions & Modules",
      "Object-Oriented Programming",
      "File Handling",
      "Error Handling",
      "Web Scraping with BeautifulSoup",
    ],
  },
  {
    title: "📜 JavaScript",
    topics: [
      "Variables (var, let, const)",
      "Data Types & Operators",
      "Functions (ES5 & ES6)",
      "DOM Manipulation",
      "Event Handling",
      "Fetch API & Promises",
      "ES6+ Features",
    ],
  },
  {
    title: "⚛️ React.js",
    topics: [
      "JSX and Components",
      "Props and State",
      "Hooks (useState, useEffect)",
      "React Router",
      "Conditional Rendering",
      "Forms and Inputs",
      "API Integration",
    ],
  },
  {
    title: "🧠 Node.js + Express.js",
    topics: [
      "Intro to Node.js",
      "Creating Servers",
      "Routing with Express",
      "Middleware",
      "REST API",
      "CRUD Operations",
    ],
  },
  {
    title: "🍃 MongoDB",
    topics: [
      "Documents & Collections",
      "CRUD Operations",
      "Mongoose ODM",
      "Schema & Models",
      "MongoDB Atlas",
    ],
  },
  {
    title: "🐬 MySQL",
    topics: [
      "Tables & Relationships",
      "SQL Queries",
      "Joins & Subqueries",
      "CRUD Operations",
      "Integration with Node.js",
    ],
  },
  {
    title: "🌍 Git & GitHub",
    topics: [
      "Git Basics & Commands",
      "Branches & Merging",
      "Pull Requests",
      "Collaboration & Issues",
    ],
  },
  {
    title: "🕸 Web Scraping",
    topics: [
      "Intro to Scraping",
      "BeautifulSoup Basics",
      "Requests Library",
      "Scraping Tables",
      "Automation with Python",
    ],
  },
  {
    title: "📢 Digital Marketing",
    topics: [
      "SEO Basics",
      "Google Analytics",
      "Email Campaigns",
      "Paid Ads Overview",
    ],
  },
];

const Learning = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen  rounded-lg text-white px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        📚 Learning Slaybus
      </h1>

      <div className="w-full  flex items-center justify-center pb-4">
        <Link to="/curriculum" className="text-white/60 hover:italic transition duration-300 ease-in-out hover:shadow-2xl text-center mx-auto hover:underline">
          View Curriculum
        </Link>
      </div>
      <div className="max-w-4xl mx-auto space-y-3">
        {syllabusData.map((section, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left px-6 py-4 font-semibold text-xl hover:bg-gray-700 transition flex justify-between"
            >
              {section.title}
              <span>{activeIndex === index ? "−" : "+"}</span>
            </button>
            {activeIndex === index && (
              <ul className="px-8 pb-4 list-disc list-inside space-y-1 text-sm text-gray-300">
                {section.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <BackToHome />
    </div>
  );
};

export default Learning;
