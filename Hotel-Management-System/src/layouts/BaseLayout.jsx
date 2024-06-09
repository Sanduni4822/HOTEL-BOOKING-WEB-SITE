import React from 'react';
import { Outlet, Link } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <nav className="flex-1">
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/rooms" className="hover:underline">Rooms</Link></li>
              <li><Link to="/activities" className="hover:underline">Activities</Link></li>
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><Link to="/facilities" className="hover:underline">Facilities</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/login" className="hover:underline">Login</Link></li>
              <li><Link to="/sign-up" className="hover:underline">SignUp</Link></li>
              <li><Link to="/book-now" className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded">Book Now!</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow p-4">
        <Outlet />
      </main>
    </div>
  );
}; 
  
export default BaseLayout;
