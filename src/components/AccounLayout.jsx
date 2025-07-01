import React from 'react';
import Navbar from './Navbar';
import BackGroundImage from "../assets/plain background.png";
const AccountLayout = ({ children }) => {
  return (
    <div 
         className=" mx-auto min-h-screen bg-cover bg-center bg-no-repeat text-gray-800"
      style={{
        backgroundImage: `url(${BackGroundImage})`,
      }}
    >
      {/* Navbar always on top */}
      <Navbar />

      {/* Page Content */}
      <section className="max-w-9xl mx-auto sm:px-6 lg:px-8 ">
        <main className="w-full">
          {children}
        </main>
      </section>
    </div>
  );
};

export default AccountLayout;
