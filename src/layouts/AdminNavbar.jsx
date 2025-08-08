import React from 'react';
import { FaBars } from 'react-icons/fa';

const AdminNavbar = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="text-gray-500 mr-4 p-2 rounded hover:bg-gray-200">
          <FaBars className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-semibold">Dashboard</h2>
      </div>
    </header>
  );
};

export default AdminNavbar;