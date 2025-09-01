// src/layouts/AdminNavbar.jsx


// const AdminNavbar = ({ onToggle, isMobile, sidebarOpen }) => {
  
//   return (
//     <header className="bg-white shadow">
//       <div className="flex items-center justify-between h-16 px-4 md:px-6">
//         {/* Toggle button - visible on ALL devices */}
//         <button 
//           className="rounded-md p-1 text-gray-700 hover:bg-gray-100 focus:outline-none"
//           onClick={onToggle}
//           aria-label="Toggle sidebar"
//         >
//           {isMobile ? (
//             // Hamburger icon for mobile
//             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           ) : (
//             // Chevron icon for desktop based on state
//             sidebarOpen ? (
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             ) : (
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             )
//           )}
//         </button>
        
//         <div className="flex-1 px-2 md:px-0 ml-4">
//           <h2 className="text-xl font-semibold text-gray-800">Notional Sickle Cell Anemic Elimination Mission</h2>
//         </div>
        
//         <div className="flex items-center">
//           <div className="relative">
//             <button className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-full">
//               <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//               </svg>
//             </button>
//             <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
//           </div>
          
//           <div className="ml-3 relative">
//             <button className="flex items-center text-sm text-gray-700 hover:bg-gray-100 rounded-full p-2">
//               <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
//                 JP
//               </div>
//               <span className="ml-2 hidden md:inline">Jessie Pekel</span>
//               <svg className="ml-1 h-4 w-4 hidden md:inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

//export default AdminNavbar;


// src/layouts/AdminNavbar.jsx
// src/layouts/AdminNavbar.jsx
// src/layouts/AdminNavbar.jsx
import React, { useState } from 'react';

const AdminNavbar = ({ onToggle, isMobile, sidebarOpen }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
    // Close other dropdowns
    if (isNotificationsOpen) {
      setIsNotificationsOpen(false);
    }
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    // Close other dropdowns
    if (isProfileMenuOpen) {
      setIsProfileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Toggle button - visible on ALL devices */}
        <button 
          className="rounded-md p-1 text-gray-700 hover:bg-gray-100 focus:outline-none"
          onClick={onToggle}
          aria-label="Toggle sidebar"
        >
          {isMobile ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            sidebarOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )
          )}
        </button>
        
        <div className="flex-1 px-2 md:px-0 ml-4">
          <h2 className="text-xl font-semibold text-gray-800">Notional Sickle Cell Anemic Elimination Mission</h2>
        </div>
        
        <div className="flex items-center">
          {/* Notifications Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-full focus:outline-none"
              onClick={toggleNotifications}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            
            {/* Notification Menu */}
            {isNotificationsOpen && (
              <div 
                className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
              >
                <div className="px-4 py-2 text-sm font-semibold text-gray-900 border-b border-gray-100">
                  Notifications
                </div>
                {/* Sample Notification Item */}
                <a href="#" className="block px-4 py-3 border-b border-gray-100 hover:bg-gray-50">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-1">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">New patient registration</p>
                      <p className="mt-1 text-sm text-gray-500">A new patient has been registered in the system. Check details.</p>
                    </div>
                  </div>
                </a>
                {/* Another Sample Notification */}
                <a href="#" className="block px-4 py-3 border-b border-gray-100 hover:bg-gray-50">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-1">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Report generated successfully</p>
                      <p className="mt-1 text-sm text-gray-500">The monthly health report is now available for download.</p>
                    </div>
                  </div>
                </a>
                <div className="p-2">
                  <a href="#" className="block w-full text-center text-sm font-medium text-blue-600 hover:text-blue-800">
                    View All Notifications
                  </a>
                </div>
              </div>
            )}
          </div>
          
          {/* Profile Dropdown */}
          <div className="ml-3 relative">
            <button 
              className="flex items-center text-sm text-gray-700 hover:bg-gray-100 rounded-full p-2 focus:outline-none"
              onClick={toggleProfileMenu}
            >
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                JP
              </div>
              <span className="ml-2 hidden md:inline">Jessie Pekel</span>
              <svg className="ml-1 h-4 w-4 hidden md:inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Profile Menu */}
            {isProfileMenuOpen && (
              <div 
                className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
              >
                <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                  Your Profile
                </a>
                <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                  Settings
                </a>
                <a href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                  Sign out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;