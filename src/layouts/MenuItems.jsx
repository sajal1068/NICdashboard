import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const MenuItems = ({ isCollapsed }) => {
  const [openSubmenus, setOpenSubmenus] = useState({});
  const navRef = useRef(null);


  const toggleSubmenu = (menuId) => {
    setOpenSubmenus(prev => ({
      [menuId]: !prev[menuId],
    }));
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenSubmenus({});
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [navRef]);


  const menuItems = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l-7 7-7-7M19 10v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>, 
      path: '/admin',
      type: 'link'
    },
    { 
      id: 'admin', 
      label: 'Admin', 
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>, 
      type: 'dropdown',
      items: [
        { id: 'users', label: 'User Management', path: '/admin/users' },
        { id: 'roles', label: 'Role Management', path: '/admin/roles' },
        { id: 'permissions', label: 'Permissions', path: '/admin/permissions' }
      ]
    },
    { 
      id: 'patients', 
      label: 'Patients', 
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, 
      type: 'dropdown',
      items: [
        { id: 'all-patients', label: 'All Patients', path: '/admin/patients' },
        { id: 'new-patient', label: 'Add New Patient', path: '/admin/patients/new' }
      ]
    }
  ];

  const baseItemClass = "flex items-center w-full p-3 rounded-lg transition-all duration-300 font-medium text-sm tracking-wider";
  const activeClass = "bg-orange-500 text-white shadow-lg shadow-orange-900/20";
  const inactiveClass = "text-red-50 hover:bg-red-800 hover:text-white";

  return (
    <ul ref={navRef} className="space-y-2 px-1">
      {menuItems.map(item => (
        <li key={item.id}>
          {item.type === 'link' ? (
            <NavLink
              to={item.path}
              className={({ isActive }) => `
                ${baseItemClass}
                ${isActive ? activeClass : inactiveClass}
                ${isCollapsed ? 'justify-center px-0' : ''}
              `}
              title={isCollapsed ? item.label : ''}
            >
              <span className={`flex-shrink-0 ${isCollapsed ? '' : 'mr-4'}`}>{item.icon}</span>
              {!isCollapsed && <span className="truncate">{item.label}</span>}
            </NavLink>
          ) : (
            <div className="relative">
              <button
                onClick={() => toggleSubmenu(item.id)}
                className={`
                  ${baseItemClass}
                  ${openSubmenus[item.id] ? 'bg-red-800/50 text-white' : inactiveClass}
                  ${isCollapsed ? 'justify-center px-0' : ''}
                `}
                title={isCollapsed ? item.label : ''}
              >
                <span className={`flex-shrink-0 ${isCollapsed ? '' : 'mr-4'}`}>{item.icon}</span>
                {!isCollapsed && (
                  <>
                    <span className="truncate flex-1 text-left">{item.label}</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${openSubmenus[item.id] ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </button>


              {!isCollapsed && openSubmenus[item.id] && (
                <ul className="mt-1 space-y-1 bg-black/10 rounded-xl p-1 animate-in fade-in slide-in-from-top-2 duration-300">
                  {item.items.map(subItem => (
                    <li key={subItem.id}>
                      <NavLink
                        to={subItem.path}
                        className={({ isActive }) => `
                          flex items-center w-full px-4 py-3 rounded-lg text-xs font-medium transition-all
                          ${isActive 
                            ? 'bg-orange-500 text-white' 
                            : 'text-red-100 hover:bg-orange-600/40 hover:text-white'}
                        `}
                      >
                        <span className="w-1 h-1 rounded-full bg-red-200 mr-3 opacity-50" />
                        <span className="truncate">{subItem.label}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}

              
              {isCollapsed && openSubmenus[item.id] && (
                <div className="absolute left-full top-0 ml-2 z-[9999] w-48">
                  <div className="bg-red-800 rounded-xl shadow-2xl py-2 border border-red-700">
                    <div className="px-4 py-1 mb-1 border-b border-red-700/50 text-[10px] font-black text-red-200 uppercase tracking-widest">
                      {item.label}
                    </div>
                    {item.items.map(subItem => (
                      <NavLink
                        key={subItem.id}
                        to={subItem.path}
                        className={({ isActive }) => `
                          block px-4 py-2 text-xs font-medium transition-colors
                          ${isActive ? 'bg-orange-500 text-white' : 'text-red-50 hover:bg-orange-600'}
                        `}
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;