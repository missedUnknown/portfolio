import React from 'react';
import BackToHome from '../components/BackToHome';

const Contact = () => {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-6">📬 Contact Me</h1>
      <p className="mb-2 ">Email: <a href="mailto:yourname@example.com" className="text-white">abheyk04@gmail.com</a></p>
      {/* <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-600" target="_blank">Your Profile</a></p> */}
      <p>Phone: +91-8860105247</p>

      <br />

      <BackToHome />
    </div>
  );
};

export default Contact;