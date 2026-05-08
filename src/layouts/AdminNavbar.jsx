import React, { useState } from "react";

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
        <button
          className="rounded-md p-1 text-gray-700 hover:bg-gray-100 focus:outline-none"
          onClick={onToggle}
          aria-label="Toggle sidebar"
        >
          {isMobile ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : sidebarOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </button>

        <div className="flex-1 px-2 md:px-0 ml-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Notional Sickle Cell Anemic Elimination Mission
          </h2>
        </div>

        <div className="flex items-center gap-3">
  {/* Notification Dropdown */}
  <div className="relative">
    <button
      className={`
        flex items-center p-2 rounded-full transition-all duration-300
        bg-slate-50 text-slate-600 hover:bg-orange-50 hover:text-orange-600
        focus:outline-none relative
      `}
      onClick={toggleNotifications}
    >
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
      {/* Animated Ping Badge */}
      <span className="absolute top-1 right-1 flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
      </span>
    </button>

    {isNotificationsOpen && (
      <div
        className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl z-50 border border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300 overflow-hidden"
        role="menu"
      >
        <div className="px-5 py-4 bg-slate-50/80 border-b border-slate-100 flex justify-between items-center">
          <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest">
            Notifications
          </span>
          <span className="bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
            2 New
          </span>
        </div>

        <div className="max-h-80 overflow-y-auto">
          {/* Notification Item 1 */}
          <a
            href="#"
            className="block px-5 py-4 border-b border-slate-50 hover:bg-orange-50/50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]"></div>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-900 leading-tight">
                  New Patient Registration
                </p>
                <p className="mt-1 text-[10px] font-medium text-slate-500 leading-relaxed">
                  A new screening record has been uploaded from Delhi Central.
                </p>
                <p className="mt-2 text-[9px] font-bold text-slate-400 uppercase">
                  2 mins ago
                </p>
              </div>
            </div>
          </a>

          {/* Notification Item 2 */}
          <a
            href="#"
            className="block px-5 py-4 border-b border-slate-50 hover:bg-orange-50/50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-900 leading-tight">
                  Report Generated
                </p>
                <p className="mt-1 text-[10px] font-medium text-slate-500 leading-relaxed">
                  Monthly mission progress report for April 2026 is ready.
                </p>
                <p className="mt-2 text-[9px] font-bold text-slate-400 uppercase">
                  1 hour ago
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="p-3 bg-slate-50/30">
          <a
            href="#"
            className="block w-full text-center py-2 text-[10px] font-black text-red-600 hover:text-orange-600 uppercase tracking-widest transition-colors"
          >
            View All Notifications
          </a>
        </div>
      </div>
    )}
  </div>

  {/* Profile Section */}
  <div className="ml-1 relative group">
    <button
      className="flex items-center gap-2 p-1.5 rounded-full transition-all duration-300 bg-red-50 border border-red-100 hover:bg-orange-50 hover:border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
      onClick={toggleProfileMenu}
    >
      <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-red-600 to-orange-500 flex items-center justify-center text-white shadow-md shadow-red-900/20">
        <span className="text-[11px] font-black tracking-tighter uppercase">
          JP
        </span>
      </div>

      <div className="hidden md:flex flex-col items-start pr-2">
        <span className="text-[11px] font-black text-slate-900 leading-none uppercase tracking-tight">
          Jessie Pekel
        </span>
        <span className="text-[9px] font-bold text-red-600 leading-none uppercase opacity-70 mt-1">
          Administrator
        </span>
      </div>

      <svg
        className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-300 ${isProfileMenuOpen ? "rotate-180 text-orange-600" : ""}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    {isProfileMenuOpen && (
      <div
        className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl py-2 z-50 border border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300 overflow-hidden"
        role="menu"
      >
        <div className="px-4 py-3 border-b border-slate-50 bg-slate-50/50 mb-1">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            Signed in as
          </p>
          <p className="text-xs font-bold text-slate-900 truncate">
            jessie.pekel@gov.in
          </p>
        </div>

        <a
          href="/profile"
          className="flex items-center gap-3 px-4 py-2.5 text-[11px] font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
          role="menuitem"
        >
          <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Your Profile
        </a>

        <a
          href="/settings"
          className="flex items-center gap-3 px-4 py-2.5 text-[11px] font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
          role="menuitem"
        >
          <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Account Settings
        </a>

        <div className="h-px bg-slate-100 my-1 mx-2"></div>

        <a
          href="/logout"
          className="flex items-center gap-3 px-4 py-2.5 text-[11px] font-black text-red-600 hover:bg-red-50 transition-colors"
          role="menuitem"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Sign Out
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
