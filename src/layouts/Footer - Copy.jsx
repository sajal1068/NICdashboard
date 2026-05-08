import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  const footerLogos = [
    { src: "images/NIC.svg", alt: "National Informatics Centre" },
    { src: "images/Digital.svg", alt: "Digital India" },
    { src: "images/ticket-raise.svg", alt: "Support Desk" },
  ];

  return (
    <footer>
      {/* 1. TOP SECTION: Contact & Quick Links */}
      <section className="bg-[#0B1B34] pt-12 pb-8 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Contact Information */}
            <div className="w-full md:w-1/3">
              <h2 className="text-stone-300 text-xl font-semibold leading-6 capitalize relative mb-8">
                Contact Us
                <span className="absolute bottom-[-13px] left-0 w-[50px] h-1 bg-red-700"></span>
              </h2>
              <div className="space-y-2">
                <span className="text-stone-300 font-medium block">
                  Ministry of Health & Family Welfare,
                </span>
                <p className="text-stone-400 font-light text-sm leading-relaxed">
                  Nirman Bhawan, Near Udyog Bhawan Metro Station,<br />
                  Maulana Azad Rd, New Delhi, Delhi 110011
                </p>
              </div>
            </div>

            {/* Quick Links Grid */}
            <div className="w-full md:w-2/3">
              <h2 className="text-stone-300 text-xl font-semibold leading-6 capitalize relative mb-8">
                Quick Links
                <span className="absolute bottom-[-13px] left-0 w-[50px] h-1 bg-red-700"></span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <ul className="space-y-3">
                  <li><Link to="#" className="text-stone-400 hover:text-red-500 text-sm transition-colors">About Us</Link></li>
                  <li><Link to="#" className="text-stone-400 hover:text-red-500 text-sm transition-colors">Sitemap</Link></li>
                </ul>
                <ul className="space-y-3">
                  <li><Link to="#" className="text-stone-400 hover:text-red-500 text-sm transition-colors">Copyright Policy</Link></li>
                  <li><Link to="#" className="text-stone-400 hover:text-red-500 text-sm transition-colors">Privacy Policy</Link></li>
                </ul>
                <ul className="space-y-3">
                  <li><Link to="#" className="text-stone-400 hover:text-red-500 text-sm transition-colors">Hyper Linking Policy</Link></li>
                  <li><Link to="#" className="text-stone-400 hover:text-red-500 text-sm transition-colors">Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MIDDLE SECTION: Logos & Modern Navigation */}
      <section className="bg-[#0B1B34] py-8">
        <div className="container mx-auto px-4">
          {/* Official Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-10">
            {footerLogos.map((logo, index) => (
              <img 
                key={index}
                src={logo.src} 
                alt={logo.alt} 
                className="h-12 md:h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>

          {/* Inline Bordered Navigation */}
          <div className="border-y border-white/10 py-4">
            <ul className="flex flex-wrap justify-center items-center text-xs md:text-sm tracking-[2px] md:tracking-[3.2px] uppercase">
              <li className="px-4 border-r border-white/10">
                <Link to="#" className="text-stone-400 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li className="px-4 border-r border-white/10">
                <Link to="#" className="text-stone-400 hover:text-white transition-colors">Sitemap</Link>
              </li>
              <li className="px-4">
                <Link to="#" className="text-stone-400 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. BOTTOM SECTION: Disclaimer & Last Updated */}
      <section className="bg-[#081223] py-6">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="text-stone-500 text-xs md:text-sm max-w-4xl mx-auto leading-relaxed">
            Website contents are being maintained by Ministry of Health and Family Welfare, Government of India and data is being managed by respective States. 
            Website has been designed, developed, maintained and hosted by 
            <a href="#" className="text-red-600 hover:underline font-medium"> National Informatics Centre (NIC)</a>.
          </p>
          
          <div className="text-stone-400 text-xs font-medium pt-2 border-t border-white/5 inline-block">
            Last Updated : <span className="text-stone-300">{formattedDate}</span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;