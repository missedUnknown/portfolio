import React from 'react'
import { Link } from 'react-router-dom'

const BackToHome = () => {
  return (
    <div className="w-full border border-white flex items-center justify-center mt-8 p-6 rounded-lg bg-white/10 backdrop-blur-md">
        <Link to="/" className='mx-auto font-bold text-lg'>Let's back to Home 👈</Link>
    </div>
  )
}

export default BackToHome
