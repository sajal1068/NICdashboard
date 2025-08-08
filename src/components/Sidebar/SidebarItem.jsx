import React, { useState } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SidebarItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    if (item.subItems) {
      setIsOpen(!isOpen);
    }
  };

  const hasSubItems = item.subItems && item.subItems.length > 0;

  return (
    <div>
      <div 
        className="flex items-center justify-between py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 cursor-pointer"
        onClick={toggleSubMenu}
      >
        <div className="flex items-center">
          <item.icon className="w-5 h-5 mr-3" />
          <span>{item.name}</span>
        </div>
        {hasSubItems && (
          <span className="ml-auto">
            {isOpen ? <FaAngleDown /> : <FaAngleRight />}
          </span>
        )}
      </div>

      {hasSubItems && isOpen && (
        <div className="ml-6 border-l-2 border-gray-600">
          {item.subItems.map((subItem, index) => (
            <Link key={index} to={subItem.path} className="block py-2 px-4 rounded transition duration-200 hover:bg-gray-700">
              {subItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;