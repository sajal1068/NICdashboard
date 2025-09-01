// src/layouts/Sidebar.jsx
import MenuItems from './MenuItems';

const Sidebar = ({ sidebarOpen, isMobile }) => {
  return (
    <>
      {/* Backdrop for mobile only */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
        ></div>
      )}
      
      {/* Sidebar */}
      <div className={`
        bg-blue-900 transform transition-all duration-300 ease-in-out
        ${isMobile 
          ? `fixed inset-y-0 left-0 z-30 w-64 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}` 
          : `relative ${sidebarOpen ? 'w-64' : 'w-20'}`
        }
      `}>
        <div className="flex items-center justify-center h-16 bg-blue-800">
          {sidebarOpen ? (
            <h1 className="text-white text-xl font-bold">SC Mission</h1>
          ) : (
            <span className="text-white font-bold text-lg">SC</span>
          )}
        </div>
        
        <nav className="mt-6">
          <MenuItems isCollapsed={!sidebarOpen} />
        </nav>
      </div>
    </>
  );
};

export default Sidebar;