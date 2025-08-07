import React from 'react'
import { Link } from 'react-router-dom'

const BackToHome = () => {
  return (
    <Link to="/" className="w-full border border-white flex items-center justify-center mt-8 p-6 rounded-lg bg-white/10 backdrop-blur-md hover:bg-purple-800 hover:shadow-2xl shadow transition duration-300 ease-in-out cursor-pointer">
        <p className='mx-auto font-bold text-lg'>Let's back to Home 👈</p>
    </Link>
  )
}

export default BackToHome
