import React from 'react'
import { Outlet,Link } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-end">
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/rooms" className="hover:underline">Rooms</Link></li>
            <li><Link to="/activities" className="hover:underline">Activities</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/facilities" className="hover:underline">Facilities</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/login or join" className="hover:underline">Login/Join</Link></li>
            <li><Link to="/sign-up" className="hover:underline">SignUp</Link></li>
            <li><Link to="/book now" className="hover:underline">Book Now!</Link></li>
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