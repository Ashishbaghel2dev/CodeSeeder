import React from 'react';

function RightSideBar() {
  return (
    <div className="p-4">
      <div className="bg-slate-950 z-0 bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-6 my-3 border-white/10 border">
        <h2 className="text-xl font-bold mb-2">New Update Announcement</h2>
        <p className='text-sm'>
          We are excited to announce the release of our latest update! This update includes several new features and improvements to enhance your experience.
        </p>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>New user interface design</li>
          <li>Improved performance and speed</li>
          <li>Bug fixes and stability improvements</li>
          <li>New integrations with third-party services</li>
        </ul>
        <p className="mt-2 text-sm">
          Make sure to check out the full release notes for more details. Thank you for your continued support!
        </p>
        <button className='px-5 py-3 text-sm rounded-md border-white/20 border my-3 mx-1'>Chekout Now</button>
      </div>
     
    </div>
  );
}

export default RightSideBar;