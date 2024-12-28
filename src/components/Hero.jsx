import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-14  space-y-6">
        <div className="flex items-center gap-4">
          <img
            src="https://i.ibb.co/myQB1bD/Screenshot-2024-12-26-at-6-53-51-PM-1.png"
            alt="CodeSeeder Logo"
            className="w-10"
          />
          <h1 className="text-7xl">CodeSeeder</h1>
        </div>
        <div className="max-w-2xl text-center">
          <p className="text-2xl text-gray-700">
            CodeSeeder is a one-stop platform for discovering and integrating
            amazing components into your projects with ease.
          </p>
        </div>

        <Link to="/login">
          <button className="bg-white border border-white/20 cursor-pointer px-7  rounded-md py-2 font-semibold text-slate-950 hover:bg-white/80">
            Exlpore Now
          </button>
        </Link>

        <div className="text-center px-6 max-w-xl"> 
          <p className="text-md italic text-gray-600 mt-4">
            The name "CodeSeeder" symbolizes growth and creativity—just like
            planting a seed that blossoms into a thriving tree, our platform
            nurtures your ideas into fully realized projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
