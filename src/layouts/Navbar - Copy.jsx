import React, { useState } from 'react';

const menuData = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Media Gallery',
    link: '/MediaGallery',
    submenu: [
      {
        label: 'Photo gallery',
        link: '/MediaGallery/photo-gallery',
      },      
      {
        label: 'Video gallery',
        link: '/MediaGallery/video-gallery',
      },
      {
        label: 'Mobile Apps',
        link: '/services/mobile',
        submenu: [
          { label: 'iOS', link: '/services/mobile/ios' },
          { label: 'Android', link: '/services/mobile/android' },
        ],
      },
    ],
  },
 {
    label: 'Know Your Report',
    link: '/know',
  },
  {
    label: 'Contact',
    link: '/contact',
  },
  {
    label: 'Login',
    link: '/login',
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center h-14">
        {/* <div className="text-xl font-bold text-gray-800">MyLogo</div> */}

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          {menuData.map((item, idx) => (
            <DesktopMenuItem key={idx} item={item} />
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-gray-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-gray-50 px-4 py-2`}>
        <ul className="space-y-2">
          {menuData.map((item, idx) => (
            <MobileMenuItem key={idx} item={item} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

const DesktopMenuItem = ({ item }) => {
  const hasSubmenu = item.submenu && item.submenu.length > 0;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={item.link}
        className="flex items-center px-3 py-2 text-gray-100 hover:text-gray-300 transition-colors"
        onClick={e => hasSubmenu && e.preventDefault()}
      >
        {item.label}
        {hasSubmenu && (
          <svg className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </a>

      {hasSubmenu && (
        <ul className={`absolute left-0 top-full mt-2 w-52 bg-white shadow-lg rounded-md transition-all duration-300 z-20 ${isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          {item.submenu.map((subitem, idx) => (
            <DesktopSubMenuItem key={idx} item={subitem} />
          ))}
        </ul>
      )}
    </li>
  );
};

const DesktopSubMenuItem = ({ item }) => {
  const hasSubmenu = item.submenu && item.submenu.length > 0;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={item.link}
        className="flex justify-between items-center text-gray-700 text-sm px-4 py-2 hover:bg-gray-100 transition-colors"
        onClick={e => hasSubmenu && e.preventDefault()}
      >
        {item.label}
        {hasSubmenu && (
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </a>
      {hasSubmenu && (
        <ul className={`absolute left-full top-0 w-52 bg-white shadow-lg rounded-md transition-all duration-300 z-30 ${isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          {item.submenu.map((third, thirdIdx) => (
            <li key={thirdIdx}>
              <a href={third.link} className="block text-gray-700 text-sm px-4 py-2 hover:bg-gray-100 hover:rounded-md transition-colors">
                {third.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const MobileMenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  return (
    <li className="relative">
      <div className="flex justify-between items-center py-2">
        <a href={item.link} onClick={e => hasSubmenu && e.preventDefault()} className="block text-gray-700 hover:text-blue-600">
          {item.label}
        </a>
        {hasSubmenu && (
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-600 hover:text-blue-600 p-1"
            aria-label="Toggle submenu"
          >
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {hasSubmenu && open && (
        <ul className="pl-4 mt-1 border-l-2 border-gray-200 space-y-1">
          {item.submenu.map((subitem, idx) => (
            <MobileMenuItem key={idx} item={subitem} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Navbar;