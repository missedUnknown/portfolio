import React from 'react';
import axios from 'axios';
import BackToHome from '../components/BackToHome';

const Contact = () => {
  return (
    <div className="p-10 text-center border rounded-3xl hover:bg-purple-700 transition-all duration-300 ease-in-out shadow hover:shadow-2xl">
      <h1 className="text-4xl font-bold mb-6">📬 Contact Me</h1>
      <p className="mb-2 ">Email: <a href="mailto:yourname@example.com" className="text-white">abheyk04@gmail.com</a></p>
      {/* <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-600" target="_blank">Your Profile</a></p> */}
      <p>Phone: +91-8860105247</p>

      <br />
      {/* <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form> */}

      <div className="italic text-2xl">Currently updating location. Soon !!!</div>
      <br />
      <BackToHome />
    </div>
  );
};

export default Contact;


const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value,
  };

  try {
    const response = await axios.post('http://localhost:5000/contact', formData);
    alert('Message Sent!');
  } catch (error) {
    alert('Error sending message.');
    console.error(error);
  }
};