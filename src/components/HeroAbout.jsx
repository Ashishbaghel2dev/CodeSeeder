import React from "react";

function HeroAbout() {
  return (
    <div className=" py-10 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">How to Use?</h1>
        <p className="text-lg text-gray-700 leading-7">
          CodeSeeder simplifies the process of integrating stunning UI designs into your projects. 
          Browse through our collection of pre-built components, copy the code, and paste it directly into your application. 
          It’s that easy! 
        </p>
        <p className="text-lg text-gray-700 leading-7 mt-4">
          Our platform ensures that you save time and effort by providing responsive, accessible, and reusable UI components. 
          No more designing from scratch—just copy, paste, and customize as per your needs!
        </p>
      </div>
    </div>
  );
}

export default HeroAbout;
