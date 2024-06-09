import React from 'react';
import contactImage from './path/to/your/contact-image.jpg'; // Adjust the path to your image file

const ContactUsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img src={contactImage} alt="Contact Us" className="w-full md:w-1/2 h-auto rounded-md mb-4 md:mb-0 md:mr-4" />
        <div className="flex-1">
          <p className="mb-2">We'd love to hear from you! Please reach out with any questions or comments.</p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
              <input type="text" id="name" className="w-full border border-gray-300 p-2 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full border border-gray-300 p-2 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
              <textarea id="message" className="w-full border border-gray-300 p-2 rounded-md" rows="4"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
