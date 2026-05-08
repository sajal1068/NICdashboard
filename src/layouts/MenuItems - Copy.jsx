import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const MenuItems = ({ isCollapsed }) => {
  const [openSubmenus, setOpenSubmenus] = useState({});
  const navRef = useRef(null);

  const toggleSubmenu = (menuId) => {
    setOpenSubmenus(prev => ({
      ...Object.fromEntries(
        Object.keys(prev).map(key => [key, key === menuId ? !prev[key] : false])
      ),
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
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navRef]);

  const menuItems = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      icon: '📊', 
      path: '/admin',
      type: 'link'
    },
    { 
      id: 'admin', 
      label: 'Admin', 
      icon: '👨‍💼', 
      type: 'dropdown',
      items: [
        { id: 'users', label: 'User Management', path: '/admin/users' },
        { id: 'roles', label: 'Role Management', path: '/admin/roles' },
        { id: 'permissions', label: 'Permissions', path: '/admin/permissions' }
      ]
    },
    { 
      id: 'reports', 
      label: 'Reports', 
      icon: '📈', 
      type: 'dropdown',
      items: [
        { id: 'patient-reports', label: 'Patient Reports', path: '/admin/reports/patients' },
        { id: 'treatment-reports', label: 'Treatment Reports', path: '/admin/reports/treatments' },
        { id: 'financial-reports', label: 'Financial Reports', path: '/admin/reports/financial' }
      ]
    },
    { 
      id: 'layout', 
      label: 'Layout Utility', 
      icon: '⚙️', 
      type: 'dropdown',
      items: [
        { id: 'themes', label: 'Themes', path: '/admin/layout/themes' },
        { id: 'widgets', label: 'Widgets', path: '/admin/layout/widgets' },
        { id: 'settings', label: 'Settings', path: '/admin/layout/settings' }
      ]
    },
    { 
      id: 'patients', 
      label: 'Patients', 
      icon: '👥', 
      type: 'dropdown',
      items: [
        { id: 'all-patients', label: 'All Patients', path: '/admin/patients' },
        { id: 'new-patient', label: 'Add New Patient', path: '/admin/patients/new' },
        { id: 'patient-groups', label: 'Patient Groups', path: '/admin/patients/groups' }
      ]
    }
  ];

  return (
    <ul ref={navRef} className="space-y-1 px-2">
      {menuItems.map(item => (
        <li key={item.id} className='border border-[#ffffff1a] rounded'>
          {item.type === 'link' ? (
            // Simple link item
            <NavLink
              to={item.path}
              className={({ isActive }) => `
                flex items-center w-full p-3 rounded transition-colors duration-200
                ${isActive 
                  ? 'bg-blue-800 text-white' 
                  : 'text-blue-100 hover:bg-blue-800 hover:text-white'
                }
                ${isCollapsed ? 'justify-center' : ''}
              `}
              title={isCollapsed ? item.label : ''}
            >
              <span className={`text-lg ${isCollapsed ? '' : 'mr-3'}`}>{item.icon}</span>
              {!isCollapsed && <span className="truncate flex-1 text-sm font-normal">{item.label}</span>}
            </NavLink>
          ) : (
            // Dropdown item
            <div>
              <button
                onClick={() => toggleSubmenu(item.id)}
                className={`
                  flex items-center w-full p-3 rounded transition-colors duration-200
                  text-blue-100 hover:bg-blue-800 hover:text-white
                  ${isCollapsed ? 'justify-center' : ''}
                  ${openSubmenus[item.id] ? 'bg-blue-800 text-white' : ''}
                `}
                title={isCollapsed ? item.label : ''}
              >
                <span className={`text-lg ${isCollapsed ? '' : 'mr-3'}`}>{item.icon}</span>
                {!isCollapsed && (
                  <>
                    <span className="truncate flex-1 text-left">{item.label}</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${openSubmenus[item.id] ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </button>

              {/* Submenu items */}
              {!isCollapsed && openSubmenus[item.id] && (
                <ul className="ml-6 mt-1 space-y-1 border-l-2 border-blue-700 pl-2">
                  {item.items.map(subItem => (
                    <li key={subItem.id}>
                      <NavLink
                        to={subItem.path}
                        className={({ isActive }) => `
                          flex items-center w-full p-2 rounded transition-colors duration-200
                          ${isActive 
                            ? 'bg-blue-800 text-white' 
                            : 'text-blue-100 hover:bg-blue-800 hover:text-white'
                          }
                        `}
                      >
                        <span className="text-sm truncate">{subItem.label}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}

              {/* Collapsed submenu tooltip */}
              {isCollapsed && openSubmenus[item.id] && (
                <div className="relative">
                  <div className="absolute left-full top-0 ml-2 z-50">
                    <div className="bg-blue-800 rounded shadow-lg py-2 min-w-[200px]">
                      {item.items.map(subItem => (
                        <NavLink
                          key={subItem.id}
                          to={subItem.path}
                          className={({ isActive }) => `
                            block px-4 py-2 text-sm transition-colors duration-200
                            ${isActive 
                              ? 'bg-blue-700 text-white' 
                              : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                            }
                          `}
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
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