import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const footer = () => {
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  return (
    <>
      <section className="bg-[#111111] py-[42px]">
        <div className="container mx-auto">
          <div className="w-full flex flex-col md:flex-row pb-5">
            <div className="w-full md:w-1/3">
              <h2 className="text-white text-[1.25rem] font-semibold leading-6 capitalize relative mt-[10px] mb-[35px]">
                Contact Us
                <span className="absolute bottom-[-13px] left-0 w-[50px] h-1 bg-[#FFAA73]"></span>
              </h2>

              <span className="text-white font-medium block">
                Ministry of Health & Family Welfare,
              </span>
              <span className="text-white font-light block font-14">
                Nirman Bhawan, Near Udyog Bhawan Metro Station,
                <span className="block"></span>
                Maulana Azad Rd, New Delhi, Delhi 110011
              </span>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-white text-[1.25rem] font-semibold leading-6 capitalize relative mt-[10px] mb-[35px]">
                Quick Link
                <span className="absolute bottom-[-13px] left-0 w-[50px] h-1 bg-[#FFAA73]"></span>
              </h2>

              <div className="w-full flex ">
                <div className="w-1/3">
                  <ul className="footer-links">
                    <li>
                      <Link to="#" className="text-white">
                        About Us
                      </Link>
                    </li>
                    {/* <li><Link to="/disclaimer" onClick={() => setIsOpen(false)}>Disclaimer</Link></li> */}
                  </ul>
                </div>

                <div className="w-1/3">
                  <ul className="footer-links">
                    <li>
                      <Link to="#" className="text-white">
                        Copyright Policy
                      </Link>
                    </li>
                    {/* <li><Link to="/hyperlinking" onClick={() => setIsOpen(false)}>Hyper Linking Policy</Link></li> */}
                  </ul>
                </div>
                <div className="w-1/3">
                  <ul className="footer-links">
                    <li>
                      <Link to="#" >
                        Hyper Linking Policy
                      </Link>
                    </li>
                    {/* <li><Link to="/terms" onClick={() => setIsOpen(false)}>Terms & Conditions</Link></li> */}
                    {/* <li><Link to="/feedback" onClick={() => setIsOpen(false)}>Feedback</Link></li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto text-center py-4 font-14 font-light designedBy mt-2 border-y border-solid border-[#3c3b3b]">
          <p className="text-white">
            This site is owned by the National Health Mission (NHM),{" "}
            <Link to="#" className="linkLine">
              <span className="text-[#FFAA73]">
                Ministry of Health and Family Welfare, Government of India.
              </span>
            </Link>
            © {currentDate.getFullYear()}{" "}
          </p>
        </div>

        <div className="container mx-auto text-center pt-5">
          <span className="text-white font-medium">
            Last Updated: {formattedDate}{" "}
          </span>
        </div>
      </section>
    </>
  );
}

export default footer;
