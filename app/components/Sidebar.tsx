import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">NextGenAds</h2>
      <ul>
        <li>Dashboard</li>
        <li>Campaigns</li>
        <li>Audiences</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;