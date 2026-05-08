import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';



const Navbar = () => {
  const { t } = useTranslation();

  const menuData = [
    { label: t("menu.home"), link: "/" },
    { label: t("menu.about_us"), link: "/about" },
    {
      label: t("menu.media_gallery"),
      link: "#",
      submenu: [
        { label: t("menu.photo_gallery"), link: "/photo-gallery" },
        { label: t("menu.video_gallery"), link: "/video-gallery" },
        {
          label: t("menu.mobile_apps"),
          link: "/services/mobile",
          submenu: [
            { label: t("menu.ios"), link: "/services/mobile/ios" },
            { label: t("menu.android"), link: "/services/mobile/android" },
          ],
        },
      ],
    },
    { label: t("menu.know_your_report"), link: "/KnowYourReport" },
    { label: t("menu.user_manual"), link: "/user-manual" },
    { label: t("menu.download_ppt"), link: "/national-ppt" },
    { label: t("menu.contact_us"), link: "/contact" },
    // { label: t("menu.login"), link: "#" },
  ];

  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const leftMenuItems = menuData.filter((item) => item.label !== "Login");

  return (
    <>
      <nav className="bg-slate-900 border-b border-gray-700 sticky top-0 z-[100]">
        <div className="container mx-auto px-4 flex justify-between items-center h-16 md:h-14">
          {/* --- Desktop View --- */}
          <div className="hidden md:flex justify-between items-center w-full h-full">
            <ul className="flex items-center h-full">
              {leftMenuItems.map((item, idx) => (
                <DesktopMenuItem
                  key={idx}
                  item={item}
                  isLast={idx === leftMenuItems.length - 1}
                />
              ))}
            </ul>

            {/* Right Side: Login Button triggers state change */}
            <div className="flex items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg shadow-red-900/20 active:scale-95 ml-4"
              >
                Login
              </button>
            </div>
          </div>

          {/* --- Mobile Menu Button --- */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* --- Mobile View Menu --- */}
        <div
          className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} bg-slate-800 px-4 py-4 shadow-2xl border-t border-slate-700 animate-in fade-in slide-in-from-top-4 duration-300`}
        >
          <ul className="space-y-1">
            {leftMenuItems.map((item, idx) => (
              <MobileMenuItem key={idx} item={item} />
            ))}
            <li className="pt-4 border-t border-slate-700 mt-4">
              <button
                className="block w-full text-center bg-red-600 text-white py-3 rounded-xl font-bold uppercase tracking-widest text-sm"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* --- Super Creative Login Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
          {/* Overlay: Backdrop blur makes the content pop */}
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity cursor-zoom-out"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Container: Using a "Floating" aesthetic */}
          <div className="relative bg-white w-full max-w-lg rounded-xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border border-white transition-all transform animate-in zoom-in-95 duration-500">
            {/* Header: Visual Identity */}
            <div className="bg-gradient-to-br from-[#e33d46] to-[#ff7043] p-5 text-center relative overflow-hidden">
              {/* Decorative Circle in Header */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>

              {/* Close Button: Fixed logic for closing */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-5 h-10 w-10 flex items-center justify-center bg-black/20 hover:bg-white hover:text-red-600 rounded-full transition-all duration-300 z-20 group"
                aria-label="Close"
              >
                <svg
                  className="h-5 w-5 transition-transform group-hover:rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="relative z-10 flex flex-col items-center">
                <div className="h-12 w-12 bg-white/20 rounded-2xl backdrop-blur-md flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white uppercase tracking-widest leading-relaxed">
                  Secure Access
                </h3>
                <p className="text-xs font-bold text-white/60 uppercase tracking-[0.3em] mt-2">
                  Select your identity to proceed
                </p>
              </div>
            </div>

            <div className="p-5 md:p-10 space-y-10 bg-white">
              {/* Option 1: Gov/NIC Email */}
              <div className="relative group">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 h-10 w-10 rounded-full bg-red-50 border border-red-200 text-red-600 flex items-center justify-center text-sm font-semibold">
                    01
                  </span>
                  <p className="text-sm font-semibold text-slate-500 tracking-widest leading-relaxed">
                    If you have Gov/NIC email-id, login with{" "}
                    <span className="text-slate-900 ">
                      Parichay SSO Platform.
                    </span>
                  </p>
                </div>

                <Link 
                  to="https://sickle.nhm.gov.in/Ssologin/index"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-4 bg-[#0088af] text-white py-5 rounded-[1.75rem] font-semibold uppercase tracking-[0.2em] text-xs hover:bg-[#007699] transition-all hover:-translate-y-1 shadow-xl shadow-[#0088af]/20 active:scale-95 group no-underline decoration-transparent"
                >
                  Login with Parichay
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>

              {/* Creative Divider */}
              <div className="relative flex items-center justify-center py-0">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-300"></div>
                </div>
                <div className="relative bg-white px-6">
                  <div className="h-12 w-12 rounded-full bg-slate-50 border border-slate-300 flex items-center justify-center text-sm font-black text-slate-500">
                    OR
                  </div>
                </div>
              </div>

              {/* Option 2: Mobile Login */}
              <div className="relative group">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 h-10 w-10 rounded-full border border-slate-200 bg-slate-100 text-slate-400 flex items-center justify-center text-sm font-bold">
                    02
                  </span>
                  <p className="text-sm font-semibold text-slate-500  tracking-widest leading-relaxed">
                    Don't have a Gov email? Use{" "}
                    <span className="text-slate-900">
                      Mobile Number OTP Login.
                    </span>
                  </p>
                </div>
                <Link 
                  to="/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-4 bg-slate-900 text-white py-5 rounded-[1.75rem] font-semibold uppercase tracking-[0.2em] text-xs hover:bg-black transition-all hover:-translate-y-1 shadow-xl shadow-bg-black/20 active:scale-95 group no-underline decoration-transparent"
                >
                  Login with Mobile
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </Link>
               
                
              </div>
            </div>

            {/* Footer Support Info */}
            <div className="bg-slate-50/80 p-6 text-center border-t border-slate-200">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.4em] flex items-center justify-center gap-2">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Secure Government Access
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// ... Internal Helper Components (DesktopMenuItem, etc.) remain the same as your previous version
const DesktopMenuItem = ({ item, isLast }) => {
  const location = useLocation();
  const hasSubmenu = item.submenu && item.submenu.length > 0;
  const [isHovered, setIsHovered] = useState(false);

  const checkActive = (currItem) => {
    if (location.pathname === currItem.link) return true;
    if (currItem.submenu)
      return currItem.submenu.some((sub) => checkActive(sub));
    return false;
  };

  const isActive = checkActive(item);

  return (
    <li
      className={`relative flex items-center h-full ${!isLast ? "border-r border-gray-700" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={item.link}
        className={`group relative flex items-center px-5 py-2 text-sm font-medium transition-colors h-full ${
          isActive ? "text-white" : "text-gray-100 hover:text-white"
        }`}
      >
        {item.label}
        {hasSubmenu && (
          <svg
            className={`w-3 h-3 ml-2 transition-transform duration-300 ${isHovered ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
        <span
          className={`absolute bottom-0 left-0 h-[3px] bg-red-600 transition-all duration-300 ease-in-out origin-center ${isActive ? "w-full scale-x-100" : "w-full scale-x-0 group-hover:scale-x-100"}`}
        />
      </Link>

      {hasSubmenu && (
        <ul
          className={`absolute left-0 top-full w-56 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-b-2xl border border-gray-100 transition-all duration-300 z-50 ${isHovered ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
        >
          {item.submenu.map((subitem, idx) => (
            <DesktopSubMenuItem key={idx} item={subitem} />
          ))}
        </ul>
      )}
    </li>
  );
};

const DesktopSubMenuItem = ({ item }) => {
  const location = useLocation();
  const hasSubmenu = item.submenu && item.submenu.length > 0;
  const [isHovered, setIsHovered] = useState(false);
  const isActive =
    location.pathname === item.link ||
    item.submenu?.some((sub) => location.pathname === sub.link);

  return (
    <li
      className="relative border-b border-gray-50 last:border-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={item.link}
        className={`flex justify-between items-center text-[11px] font-bold px-5 py-4 transition-all hover:bg-red-50 ${isActive ? "text-red-600 bg-red-50/50" : "text-gray-700"}`}
      >
        {item.label}
        {hasSubmenu && (
          <svg
            className="w-3 h-3 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </Link>
      {hasSubmenu && (
        <ul
          className={`absolute left-full top-0 w-52 bg-white shadow-2xl rounded-xl border border-gray-100 transition-all duration-300 z-[60] ${isHovered ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`}
        >
          {item.submenu.map((third, tIdx) => (
            <li key={tIdx} className="border-b border-gray-50 last:border-0">
              <Link
                to={third.link}
                className={`block text-[11px] font-bold px-5 py-4 hover:bg-red-50 transition-colors ${location.pathname === third.link ? "text-red-600 bg-red-50/50" : "text-gray-700"}`}
              >
                {third.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const MobileMenuItem = ({ item }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const hasSubmenu = item.submenu && item.submenu.length > 0;
  const isActive = location.pathname === item.link;

  return (
    <li className="border-b border-slate-700 last:border-0">
      <div className="flex justify-between items-center py-3">
        <Link
          to={item.link}
          onClick={() => hasSubmenu && setOpen(!open)}
          className={`block text-sm font-bold uppercase tracking-widest ${isActive ? "text-red-500" : "text-slate-300"}`}
        >
          {item.label}
        </Link>
        {hasSubmenu && (
          <button onClick={() => setOpen(!open)} className="text-slate-400 p-2">
            <svg
              className={`w-4 h-4 transition-transform ${open ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
      {hasSubmenu && open && (
        <ul className="pl-4 pb-3 space-y-2 border-l border-red-600/30 ml-2">
          {item.submenu.map((sub, i) => (
            <MobileMenuItem key={i} item={sub} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Navbar;
