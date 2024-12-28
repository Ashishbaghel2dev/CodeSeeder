import React from 'react';
import { Link } from 'react-router-dom';

function LeftSideBar() {
  const menuItems = [
    "Introduction",
    "Installation",
    "components.json",
    "Theming",
  
  ];

  return (
    <div className="px-7 pt-3 w-full h-lvh overflow-y-scroll scrollbar-hide">
      <h1 className='text-xl'>Getting Started</h1>
      <ul className='m-0 p-0 w-full'>
        {menuItems.map((item, index) => (
          <li key={index} className="py-2 my-1 text-sm hover:bg-gray-100/10 px-5 rounded-sm ">
            <Link to={`/`}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeftSideBar;
