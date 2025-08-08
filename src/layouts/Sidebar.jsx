// src/components/Sidebar.jsx
import React, { useState } from 'react';
import SidebarItem from '../components/Sidebar/SidebarItem';
import { FaTimes, FaUsers, FaCog, FaChartBar } from 'react-icons/fa';

const menuItems = [
  {
    name: "Dashboard",
    icon: FaChartBar,
    path: "/",
  },
  {
    name: "Users",
    icon: FaUsers,
    path: "/users",
  },
  {
    name: "Settings",
    icon: FaCog,
    path: "/settings",
    subItems: [
      { name: "Profile", path: "/settings/profile" },
      { name: "Account", path: "/settings/account" },
    ],
  },
];

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={`
      bg-gray-800 text-white transition-all duration-300
      transform
      ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      md:translate-x-0
      fixed inset-y-0 left-0 z-50 w-64 p-4 flex flex-col
      md:relative md:w-64 md:h-auto
    `}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin</h1>
        <button onClick={toggleSidebar} className="md:hidden p-2 rounded hover:bg-gray-700">
          <FaTimes className="w-6 h-6" />
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto">
        {menuItems.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;