// import React, { useState } from 'react';
// import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
// import { Link , useLocation  } from 'react-router-dom';

// const SidebarItem = ({ item }) => {
// const [open, setOpen] = useState(false);
//   const Icon = item.icon;

  

//   return (
//     <>
//       <div>
//       <button
//         onClick={() => item.subItems && setOpen(!open)}
//         className="flex items-center justify-between w-full px-3 py-2 text-white hover:bg-white/10 rounded-lg transition"
//       >
//         <div className="flex items-center gap-2">
//           {Icon && <Icon className="w-4 h-4" />}
//           {item.path ? (
//             <Link to={item.path}>{item.name}</Link>
//           ) : (
//             <span>{item.name}</span>
//           )}
//         </div>
//         {item.subItems &&
//           (open ? (
//             <ChevronDown className="w-3 h-3" />
//           ) : (
//             <ChevronRight className="w-3 h-3" />
//           ))}
//       </button>

//       {open && item.subItems && (
//         <div className="ml-6 mt-1 flex flex-col gap-1">
//           {item.subItems.map((sub, i) => (
//             <Link
//               key={i}
//               to={sub.path}
//               className="text-sm text-gray-300 hover:text-white transition"
//             >
//               {sub.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//     </>
//   );
// };

// export default SidebarItem;

// src/layouts/MenuItems.jsx
import { NavLink } from 'react-router-dom';

const MenuItems = ({ isCollapsed }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊', path: '/admin/dashboard' },
    { id: 'admin', label: 'Admin', icon: '👨‍💼', path: '/admin/users' },
    { id: 'reports', label: 'Reports', icon: '📈', path: '/admin/reports' },
    { id: 'layout', label: 'Layout Utility', icon: '⚙️', path: '/admin/layout' },
  ];

  return (
    <ul className="space-y-2 px-4">
      {menuItems.map(item => (
        <li key={item.id}>
          <NavLink
            to={item.path}
            className={({ isActive }) => `
              flex items-center w-full p-3 rounded-lg text-left transition-colors duration-200
              ${isActive 
                ? 'bg-blue-800 text-white' 
                : 'text-blue-100 hover:bg-blue-800 hover:text-white'
              }
            `}
            title={isCollapsed ? item.label : ''}
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            {!isCollapsed && <span>{item.label}</span>}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;