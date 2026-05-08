import React from "react";
import Banner from "../layouts/Banner.jsx";

const Home = () => {
  // Data for Ministers (You can also move this to a separate config file)
  const ministers = [
    {
      name: "Shri Jagat Prakash Nadda",
      designation: "Hon’ble Cabinet Minister",
      department: "(Health and Family Welfare)",
      image: "images/HFM-01.jpg", // Ensure path is correct
      link: "https://mansukhmandaviya.in/the-man/",
      isCabinet: true,
    },
    {
      name: "Shri Prataprao Jadhav",
      designation: "Hon’ble Minister of State",
      department: "(Ministry of AYUSH & Health and Family Welfare)",
      image: "images/moshm-01.jpg",
      link: "https://sansad.in/ls/members/biography/31?from=members",
    },
    {
      name: "Smt. Anupriya Patel",
      designation: "Hon’ble Minister of State",
      department: "(Health and Family Welfare)",
      image: "images/mos-01.jpg",
      link: "https://sansad.in/ls/members/biography/5201?from=members",
    },
  ];

  const features = [
    {
      title: "Guidelines & Training Materials",
      description: "Access official clinical protocols and training modules for medical staff.",
      accentColor: "bg-blue-600",
      svgPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    },
    {
      title: "Sickle Cell Disease Info",
      description: "Detailed information about Sickle Cell symptoms, types, and daily care.",
      accentColor: "bg-red-600",
      svgPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    },
    {
      title: "Genetic Counselling",
      description: "Connect with genetic counselors to understand hereditary risks.",
      accentColor: "bg-orange-500",
      svgPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    },
    {
      title: "Dashboard",
      description: "Check the latest screening statistics across districts and states.",
      accentColor: "bg-indigo-600",
      svgPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    }
  ];

  const AboutAndLeadership = () => {
  const ministers = [
    {
      name: "Shri Jagat Prakash Nadda",
      designation: "Hon’ble Cabinet Minister",
      department: "(Health and Family Welfare)",
      image: "images/HFM-01.jpg",
      isCabinet: true,
    },
    {
      name: "Shri Prataprao Jadhav",
      designation: "Hon’ble Minister of State",
      department: "(Ministry of AYUSH & Health and Family Welfare)",
      image: "images/moshm-01.jpg",
    },
    {
      name: "Smt. Anupriya Patel",
      designation: "Hon’ble Minister of State",
      department: "(Health and Family Welfare)",
      image: "images/mos-01.jpg",
    },
  ];
  };

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* 1. Header & Banner Section */}
      <Banner />


      <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT SECTION (1/3): About Sickle Cell Disease */}
          <div className="lg:w-2/3 space-y-6">


           <div className="lg:col-span-7 bg-white py-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-bold mb-6">
              Elimination Mission 2047
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              About  &nbsp;<span className="text-red-600">Sickle Cell Disease</span>
            </h1> <div className="h-1.5 w-20 bg-red-600 rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-2">
              Sickle cell disease is a genetic blood disease which affects the whole life of affected patient. It is more common in the tribal population of India, but occurs in non tribals too. It not only causes anemia but also pain crises, reduced growth, and affects many organs like lungs, heart, kidney, eyes, bones and the brain. India has the largest density of tribal population, globally. As per Census 2011, India has an 8.6% tribal population which is 67.8 million across the Indian states.
            </p>
            <button className="text-red-600 font-bold text-sm flex items-center group mb-10">
              Read Detailed Guidelines 
              <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
            </button>
            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-red-200">
                Register for Screening
              </button>
              <button className="border-2 border-gray-200 hover:border-red-600 hover:text-red-600 text-gray-700 px-8 py-3 rounded-xl font-bold transition-all">
                Download Guidelines
              </button>
            </div>
          </div>



            <div className="inline-block px-4 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-widest border border-red-100">
              Medical Awareness
            </div>
            <h2 className="text-3xl font-black text-slate-900 leading-tight">
              About <span className="text-red-600">Sickle Cell Disease</span>
            </h2>
            <div className="h-1.5 w-20 bg-red-600 rounded-full mb-6"></div>
            
            <p className="text-slate-600 leading-relaxed">
              Sickle cell disease is a genetic blood disorder that causes red blood cells to become misshapen and break down. This can lead to anemia, periodic episodes of pain (crises), and severe organ damage over time.
            </p>

            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                <span className="text-red-600 text-xl">●</span> Impact in India
              </h4>
              <p className="text-sm text-slate-500 italic">
                "India has the largest density of tribal population globally. As per Census 2011, India has an 8.6% tribal population which is 67.8 million across the Indian states".
              </p>
            </div>

            
          </div>

          {/* RIGHT SECTION (2/3): Our Leadership */}
          <div className="lg:w-1/3">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-slate-900 leading-tight">
                Our Leadership
              </h2>
              {/* <p className="text-slate-500 text-sm mt-2">Guiding the National Elimination Mission</p> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {ministers.map((minister, index) => (
                <div
                  key={index}
                  className={`bg-slate-50 rounded-[1.0rem] p-6 border border-slate-100 hover:shadow-xl hover:bg-white transition-all duration-500 flex flex-col items-center text-center group
                    ${minister.isCabinet ? 'md:col-span-2 flex-row md:text-left md:items-center' : ''}`}
                >
                  <img
                    src={minister.image}
                    alt={minister.name}
                    className={`rounded-2xl object-cover bg-white shadow-md border-4 border-white transition-transform group-hover:scale-105
                      ${minister.isCabinet ? 'w-32 h-32 md:w-40 md:h-40' : 'w-24 h-24 mb-4'}`}
                  />
                  
                  <div className={minister.isCabinet ? 'md:ml-8 flex-1' : ''}>
                    <h3 className="font-bold text-slate-900 text-lg leading-tight mb-1">
                      {minister.name}
                    </h3>
                    <p className="text-red-600 font-bold text-xs uppercase tracking-tighter mb-2">
                      {minister.designation}
                    </p>
                    <p className="text-slate-500 text-xs line-clamp-2 px-4 md:px-0">
                      {minister.department}
                    </p>
                    <button className="mt-4 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-red-600 transition-colors">
                      View Portfolio
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>

      {/* 2. Bento Grid Action & Info Section */}
      <section className="container mx-auto mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Awareness Card (LHS) */}
          <div className="lg:col-span-7 bg-white py-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-bold mb-6">
              Elimination Mission 2047
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              About  <span className="text-red-600">Sickle Cell Disease</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Sickle cell disease is a genetic blood disease affecting millions. It causes anemia, pain crises, and affects vital organs like the heart, lungs, and brain. India has the largest tribal population density globally, where this condition is most prevalent.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-red-200">
                Register for Screening
              </button>
              <button className="border-2 border-gray-200 hover:border-red-600 hover:text-red-600 text-gray-700 px-8 py-3 rounded-xl font-bold transition-all">
                Download Guidelines
              </button>
            </div>
          </div>

          {/* Quick Stats & Features (RHS) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-3xl text-white col-span-2 shadow-lg">
              <p className="text-red-100 text-sm uppercase tracking-widest font-semibold mb-1">Mission Progress</p>
              <h2 className="text-4xl font-black">2.45 Cr+</h2>
              <p className="text-red-100 text-sm mt-2">Total Screenings Completed</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:border-red-200 transition-all flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-3 text-2xl group-hover:scale-110 transition-transform">🧬</div>
              <span className="font-bold text-gray-800 text-sm">Genetic Counseling</span>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:border-red-200 transition-all flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-3 text-2xl group-hover:scale-110 transition-transform">📊</div>
              <span className="font-bold text-gray-800 text-sm">Live Dashboard</span>
            </div>
          </div>
        </div>
      </section>


      {/* 3. New Responsive Four Box Section (Internal SVGs) */}
      <section className="container mx-auto py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${feature.accentColor.replace('bg-', 'bg-opacity-10 ')}`}>
                <svg className={`w-8 h-8 ${feature.accentColor.replace('bg-', 'text-')}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {feature.svgPath}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{feature.description}</p>
              <div className="mt-auto text-red-600 text-xs font-bold uppercase tracking-widest flex items-center">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Leadership Section */}
      <section className="container mx-auto py-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Leadership</h2>
            <div className="h-1.5 w-20 bg-red-600 rounded-full"></div>
          </div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministers.map((minister, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl flex flex-col items-center text-center 
                ${minister.isCabinet ? 'lg:col-span-1 border-t-4 border-t-red-600' : ''}`}
            >
              <img
                src={minister.image}
                alt={minister.name}
                className="w-32 h-32 rounded-2xl object-fit bg-gray-100 mb-4 shadow-inner"
              />
              <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">
                {minister.name}
              </h3>
              <p className="text-red-600 font-bold text-xs uppercase tracking-tighter mb-2">
                {minister.designation}
              </p>
              <p className="text-gray-500 text-xs line-clamp-2 px-4 mb-6">
                {minister.department}
              </p>
              
              <a
                href={minister.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full py-3 rounded-xl bg-gray-50 hover:bg-red-50 text-gray-700 hover:text-red-600 font-bold text-xs transition-colors border border-gray-100"
              >
                VIEW PORTFOLIO
              </a>
            </div>
          ))}
        </div>
      </section>

     {/* 3. LEADERSHIP PROFILES (Based on image_7621ed.png) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Our Leadership</h2>
            <div className="h-1.5 w-20 bg-red-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Minister (Centered / Large) */}
            <div className="md:col-span-2 bg-slate-50 p-8 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row items-center gap-8 hover:shadow-xl transition-all duration-500">
               <img src="images/HFM-01.jpg" alt="Minister" className="w-40 h-40 rounded-3xl object-fit shadow-2xl border-4 border-white" />
               <div className="text-center md:text-left">
                  <h3 className="text-2xl font-black text-slate-900 mb-1">Dr. Mansukh Mandaviya</h3>
                  <p className="text-red-600 font-bold mb-4 uppercase text-sm tracking-wider">Hon'ble Cabinet Minister</p>
                  <p className="text-slate-500 text-sm mb-6">(Health and Family Welfare)</p>
                  <button className="border-2 border-red-600 text-red-600 px-6 py-2 rounded-xl text-xs font-bold hover:bg-red-600 hover:text-white transition-all uppercase tracking-widest">View Portfolio</button>
               </div>
            </div>

            {/* Sub Ministers */}
            {[
              { name: "Prof. S. P. Singh Baghel", title: "Hon'ble Minister of State" },
              { name: "Dr. Bharati Pravin Pawar", title: "Hon'ble Minister of State" }
            ].map((m) => (
              <div key={m.name} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-lg transition-all active:scale-[0.98]">
                 <img src="images/moshm-01.jpg" alt={m.name} className="w-28 h-28 rounded-2xl object-fit mb-6 grayscale hover:grayscale-0 transition-all duration-500" />
                 <h4 className="font-bold text-slate-900 text-lg mb-1">{m.name}</h4>
                 <p className="text-red-600 font-bold text-xs uppercase mb-1">{m.title}</p>
                 <p className="text-slate-400 text-xs mb-6">(Health and Family Welfare)</p>
                 <button className="text-red-600 font-black text-[10px] uppercase tracking-[0.2em] border-b-2 border-red-100 hover:border-red-600 pb-1 transition-all">View Portfolio</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full  bg-[#f9e7d9] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Content & Action Buttons */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <span className="inline-block px-4 py-1.5 bg-[#f9e7d9] border border-red-500 text-red-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Official Mobile App
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Healthcare in Your Pocket. <br className="hidden lg:block" /> 
            <span className="text-red-600">Download the App Today.</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Register, screen, and access reports anytime—even offline. Link your ABHA ID for a seamless digital health experience.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            {/* Google Play Button */}
            <a href="https://play.google.com/store/apps/details?id=in.nic.sickle_cell" 
               target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-2xl transition-all shadow-lg hover:shadow-xl group">
              <img src="images/PlayStore.svg" alt="Play Store" className="w-6 h-6" />
              <div className="text-left">
                <p className="text-[10px] uppercase opacity-70 leading-none">Get it on</p>
                <p className="text-lg font-bold leading-none">Google Play</p>
              </div>
            </a>
            
            {/* App Store Button (Placeholder) */}
            <a href="#" className="flex items-center gap-3 bg-white border border-slate-200 hover:border-slate-300 text-slate-900 px-8 py-3 rounded-2xl transition-all shadow-sm group">
              <img src="/icons/apple.svg" alt="App Store" className="w-6 h-6" />
              <div className="text-left">
                <p className="text-[10px] uppercase opacity-70 leading-none">Download on the</p>
                <p className="text-lg font-bold leading-none">App Store</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side: Visual & QR Code */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center">
          {/* Subtle Background Shape */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-200/30 blur-3xl rounded-full -z-10"></div>
          
          {/* Mockup Container */}
          <div className="relative z-10">
            <img src="/mockups/app-screen.png" alt="App Screen Mockup" 
                 className="w-64 md:w-72 lg:w-80 h-auto rounded-[2.5rem] shadow-2xl border-8 border-slate-900" />
            
            {/* Floating QR Code Badge (Trending UX 2026) */}
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 flex flex-col items-center gap-2">
              <img src="/qr-code.png" alt="Scan to Download" className="w-20 h-20" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Scan to Download</span>
            </div>
          </div>
        </div>

      </div>
    </section>
    </main>
  );
};

export default Home;