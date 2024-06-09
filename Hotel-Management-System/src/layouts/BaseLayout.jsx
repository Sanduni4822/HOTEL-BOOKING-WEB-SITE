import React from 'react'
import { Outlet,Link } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-end">
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
            <li><Link to="/sign-up" className="hover:underline">SignUp</Link></li>
            <li><Link to="/servies" className="hover:underline">Services</Link></li>
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