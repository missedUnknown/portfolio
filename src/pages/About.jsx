import React from 'react'
import BackToHome from '../components/BackToHome'
const About = () => {
  return (
    <section className=" text-white px-6 py-10 sm:px-12 md:px-20 lg:px-32 max-w-screen-xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        🚀 I’m Abhey Kumar – Full Stack Web Developer
      </h1>

      <p className="text-lg leading-relaxed text-gray-300 mb-6">
        💻 I craft scalable, high-performance digital experiences using the MERN Stack – 
        <strong className="text-white"> MongoDB, Express.js, React.js, and Node.js</strong>. I bridge the gap between 
        <span className="text-purple-400"> frontend creativity </span>
        and <span className="text-blue-400">backend logic</span> for seamless user journeys.
      </p>

      <p className="text-lg leading-relaxed text-gray-300 mb-6">
        🎨 Skilled in <strong>HTML, CSS, JavaScript, Tailwind CSS, Bootstrap</strong>, and 
        <strong> Next.js</strong>, I build beautiful, blazing-fast ⚡ and responsive 📱 interfaces.
      </p>

      <p className="text-lg leading-relaxed text-gray-300 mb-6">
        🐍 On the backend, I use <strong>Python, MySQL, and RESTful APIs</strong> with smart 
        automations 🤖 and real-time web scraping 🕷 to power complex workflows.
      </p>

      <p className="text-lg leading-relaxed text-gray-300 mb-6">
        🛠️ I work with <strong>Git, GitHub, Heroku, Netlify, and Hostinger</strong> to ensure 
        smooth deployments 🚢 and hassle-free collaboration 🤝.
      </p>

      <p className="text-lg leading-relaxed text-gray-300 mb-6">
        💳 Need payment gateways? I’ve got you covered – from integration to secure handling.
      </p>

      <p className="text-lg leading-relaxed text-gray-300 mb-8">
        📈 I also drive growth through <strong>Digital Marketing</strong> strategies like 
        <strong> SEO, analytics, and campaigns</strong> for better reach and conversions.
      </p>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl space-y-4">
        <h2 className="text-xl font-semibold text-purple-300">🔥 Tech Stack Snapshot:</h2>

        <div>
          <strong className="text-white">Frontend:</strong> ⚛️ React.js • 💨 Tailwind CSS • ⚒️ Bootstrap • 💡 Next.js • 🧱 HTML • 🎨 CSS • 🖥️ JavaScript
        </div>

        <div>
          <strong className="text-white">Backend:</strong> 🧠 Node.js • 📦 Express.js • 🐍 Python
        </div>

        <div>
          <strong className="text-white">Database:</strong> 🍃 MongoDB • 🐬 MySQL
        </div>

        <div>
          <strong className="text-white">DevOps & Tools:</strong> 🌀 Git & GitHub • 🚀 Heroku • 🌐 Netlify • 🏡 Hostinger
        </div>

        <div>
          <strong className="text-white">Specialties:</strong> 🕸 Web Scraping • 🔌 API Development • 🤖 Automation • 💳 Payment Integration
        </div>

        <div>
          <strong className="text-white">Other Skills:</strong> 🧩 WordPress • 📢 Digital Marketing • 🌍 SEO • 🛠 Deployment & Hosting
        </div>
      </div>

      <BackToHome />
    </section>
  )
}

export default About
