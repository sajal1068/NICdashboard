// src/layouts/Sidebar.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import MenuItems from "./MenuItems";

const Sidebar = ({ sidebarOpen, isMobile, setSidebarOpen }) => {
  const { t } = useTranslation();

  return (
    <>
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      <div
        className={`        
        bg-gradient-to-b from-red-700 to-red-800    
        shadow-xl shadow-red-900/30       
        transform transition-all duration-300 ease-in-out        
        ${
          isMobile
            ? `fixed inset-y-0 left-0 z-50 w-64 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`
            : `relative border-r border-red-900/30 ${sidebarOpen ? "w-64" : "w-20"}`
        }
      `}
      >
       <div
  className={`
    flex items-center gap-3 h-16 px-4 
    bg-orange-600 border-b border-orange-700/50 shadow-md shadow-orange-700/20
    transition-all duration-300
    ${!sidebarOpen && !isMobile ? "justify-center" : "justify-start"}
  `}
>
  {/* 1. NHM Logo - Adjusted for h-16 container */}
  <img
    src="images/NHM.svg"
    alt="NHM Logo"
    className={`transition-all duration-300 shrink-0 drop-shadow-sm
      ${sidebarOpen || isMobile ? "h-9" : "h-8"}`}
  />

  {/* 2. SATH Description - Centered and Refined */}
  {(sidebarOpen || isMobile) && (
    <div className="flex flex-col flex-1 min-w-0 border-l border-white/30 ml-1 pl-3 py-0.5 animate-in fade-in slide-in-from-left-2 duration-500">
      <div className="flex flex-col justify-center">
        <span className="text-xs leading-[12px] text-white font-black  tracking-wider opacity-95 antialiased italic">
          Sickle cell Anemia, Thalassemia and <br />
          Haemophilia (SATH)
        </span>
        
        {/* Subtle Bottom Glow Line */}
        <div className="w-10 h-[1.5px] bg-gradient-to-r from-white/40 to-transparent mt-1 rounded-full"></div>
      </div>
    </div>
  )}
</div>
        <nav
          className={`
          /* Medical/Clean spacing */
          ${sidebarOpen || isMobile ? "p-2" : "p-2"}
        `}
        >
          <MenuItems isCollapsed={!sidebarOpen && !isMobile} />
        </nav>

        {(sidebarOpen || isMobile) && (
          <div className="absolute bottom-6 left-0 w-full px-6">
            <div className="border-t border-red-900/50 pt-4 text-center">
              <p className="text-[10px] text-red-100 uppercase font-black tracking-widest opacity-60">
                Elimination Target
              </p>
              <p className="text-3xl font-black text-white italic opacity-90">
                2047
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
