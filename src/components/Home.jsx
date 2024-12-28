import React from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import { Outlet, useLocation } from "react-router-dom";
import Hero from "./Hero";
import HeroAbout from "./HeroAbout";

function Home() {
  const location = useLocation();


  const isChildRoute = location.pathname !== "/";

  return (
    <>
      <div className="flex text-white mt-20 h-screen  m-auto">
        {/* Left Section */}
        <div className="w-1/5 flex items-center border-white/5 border-r-2">
          <LeftSideBar />
        </div>

        {/* Center Section */}
        <div className="w-3/5  overflow-y-scroll scrollbar-hide">
          <div className="h-full p-5">
            {!isChildRoute && <div>
              

              
                <Hero/>
              
              
              <HeroAbout/>
              
              
              
              
              </div>}
            <Outlet />
          </div>
        </div>

        {/* Right Section */}
        <div className=" w-1/5 flex  justify-center border-white/5 border-l-2">
          <RightSideBar />
        </div>
      </div>
    </>
  );
}

export default Home;
