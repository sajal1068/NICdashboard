import React, { useState } from 'react';

const menuData = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Services',
    link: '/services',
    submenu: [
      {
        label: 'Web Development',
        link: '/services/web',
      },
      {
        label: 'Mobile Apps',
        link: '/services/mobile',
        submenu: [
          { label: 'iOS', link: '/services/mobile/ios' },
          { label: 'Android', link: '/services/mobile/android' },
        ],
      },
      {
        label: 'SEO',
        link: '/services/seo',
      },
    ],
  },
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Contact',
    link: '/contact',
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 border-b border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-xl font-bold">MyLogo</div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          {menuData.map((item, idx) => (
            <DesktopMenuItem key={idx} item={item} />
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
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
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white px-4 py-2`}>
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

  return (
    <li className="relative group">
      <a
        href={item.link}
        className="px-3 py-2 hover:text-blue-600"
        onClick={e => hasSubmenu && e.preventDefault()}
      >
        {item.label}
      </a>

      {hasSubmenu && (
        <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
          {item.submenu.map((subitem, idx) => (
            <li key={idx} className="group relative">
              <a
                href={subitem.link}
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={e => subitem.submenu && e.preventDefault()}
              >
                {subitem.label}
              </a>
              {subitem.submenu && (
                <ul className="absolute left-full top-0 mt-0 w-48 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-30">
                  {subitem.submenu.map((third, thirdIdx) => (
                    <li key={thirdIdx}>
                      <a href={third.link} className="block px-4 py-2 hover:bg-gray-100">
                        {third.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
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
      <div className="flex justify-between items-center">
        <a href={item.link} onClick={e => hasSubmenu && e.preventDefault()} className="py-2 block">
          {item.label}
        </a>
        {hasSubmenu && (
          <button
            onClick={() => setOpen(!open)}
            className="text-sm p-1"
            aria-label="Toggle submenu"
          >
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
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
        <ul className="pl-4 mt-1 border-l border-gray-200">
          {item.submenu.map((subitem, idx) => (
            <MobileMenuItem key={idx} item={subitem} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Navbar;
