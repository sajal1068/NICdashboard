import React, { useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";

export default function header({ handleSkipToMain }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="w-full h-[35px] flex justify-items-center bg-gray-100 text-black">
        {/* #FF7217 */}
        <div className="container mx-auto">
          <ul className="flex w-full h-full sm:justify-end md:justify-end items-center">
            <li className="hidden sm:hidden md:hidden lg:block xl:block 2xl:block pr-2 relative after:absolute after:content-[''] after:w-px after:bg-white after:h-[calc(100%+12px)] after:right-0 after:top-[-6px]">
              <Link to="https://www.india.gov.in/">भारत सरकार</Link>
            </li>
            <li className="hidden sm:hidden md:hidden lg:block xl:block 2xl:block flex-grow flex-shrink-0 basis-0 px-2">
              <Link to="https://www.india.gov.in/">Government of india</Link>
            </li>
            <li className="flex items-end px-2 relative after:absolute after:content-[''] after:w-px after:bg-white after:h-[calc(100%+12px)] after:right-0 after:top-[-6px]">
              <Link
                to="#main-content"
                onClick={handleSkipToMain}
                title="Skip to main content"
              >
                Skip to main content
              </Link>
            </li>
            <li className="items-end px-2 relative after:absolute after:content-[''] after:w-px after:bg-white after:h-[calc(100%+12px)] after:right-0 after:top-[-6px]">
              <Link to="#">
                <img src="images/font-size.svg" className="max-w-full h-auto" />
              </Link>
            </li>
            {/* <li className="self-end"><Link to="#"><img src="images/google-translate.svg" className="max-w-full h-auto" /></Link></li> */}
            <li
              className="relative px-2"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <Link
                to="#"
                className="flex items-center flex-row text-gray-700 hover:text-gray-900"
              >
                <img
                  src="images/google-translate.svg"
                  className="max-w-full h-auto"
                  alt="Translate"
                />
                <span className="text-black">▾</span>
              </Link>
              {isOpen && (
                <ul className="absolute left-0 flex mt-0 flex-wrap w-auto bg-white rounded shadow-lg z-10">
                  <li className="border-b w-full">
                    <Link
                      to="#"
                      // Prevent default link behavior
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Hindi
                    </Link>
                  </li>
                  <li className="border-b w-full">
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      English
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </section>

      <section className="lg:max-h-[150px] p-[10px] bg-white">
        <div className="container mx-auto">
          <ul className="logo flex w-full flex-wrap items-center list-none">
            <li className="order-2 sm:order-2 lg:order-1 xl:order-1 flex-auto">
              <img
                src="images/ministry_of_health_india.svg"
                className="sm:max-h-[70px] lg:max-h-[100px]"
              />
            </li>
            <li className="order-1 w-full lg:w-auto lg:order-2 xl:order-2 xl:w-auto md:order-1 sm:order-1 sm:w-full">
              <div className="text-center">
                <span className="hindi block">मंत्रालय / विभाग नाम</span>
                <span className="english block">
                  Ministry / Department Name
                </span>
              </div>
            </li>
            <li className="order-3 sm:order-3">
              <img
                src="images/digital-india.svg"
                className="sm:max-h-[70px] md:max-h-[70px] lg:max-h-[97px] xl:max-h-[100px] max-h-[90px] mr-5"
              />
            </li>
            <li className="order-4 sm:order-4">
              <img
                src="images/NHM.svg"
                className="sm:max-h-[70px] lg:max-h-[100px]"
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
