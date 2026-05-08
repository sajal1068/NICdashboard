import React, { useState } from "react";

const KnowYourReport = () => {
  const managementSections = [
    {
      id: "01",
      title: "Tiered Medical Management",
      points: [
        "Primary, Secondary, and Tertiary care levels integration",
        "Advanced treatment facilities at Tertiary care centers",
        "Standardized protocols for all health care teams",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      bg: "bg-red-50",
      text: "text-red-600",
    },
    {
      id: "02",
      title: "Patient Support System",
      points: [
        "Robust monitoring and follow-up mechanisms",
        "Linkages with social security schemes & benefit packages",
        "Ensuring affordable and quality health care access",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      bg: "bg-orange-50",
      text: "text-orange-600",
    },
    {
      id: "03",
      title: "Community Adoption",
      points: [
        "Community-led awareness and practice change",
        "Inter-sectoral convergence for holistic care",
        "Strengthening primary health care SCD strategies",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      bg: "bg-slate-100",
      text: "text-slate-800",
    },
  ];

  const pillars = [
    {
      id: "01",
      title: "Health Promotion",
      desc: "Awareness generation & pre-marital genetic counselling",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      id: "02",
      title: "Prevention",
      desc: "Universal screening and early detection for timely intervention",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      id: "03",
      title: "Holistic Management",
      desc: "Continuum of care across primary, secondary, and tertiary levels",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
  ];
  const [otpSent, setOtpSent] = useState(false);

  return (
    <>
      {/* <section className="bg-gradient-to-r from-red-700 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Sickle Cell Disease Mission
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-emerald-100">
            A national initiative to improve quality of life, ensure early
            detection, and eliminate Sickle Cell Disease as a public health
            challenge in India by 2047.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50">
              Know Your Status
            </button>
            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-700">
              Find Screening Centre
            </button>
          </div>
        </div>
      </section> */}

     {/* --- Header / Hero Section --- */}
      <div className="relative w-full bg-gradient-to-r from-[#e33d46] via-[#f05053] to-[#ff7043] py-10 overflow-hidden border-b-[12px] border-white/20">
        <div className="absolute inset-0 opacity-10 bg-[url('images/cubes.png')] bg-repeat"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">          
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <p className="text-[10px] font-black text-white uppercase tracking-[0.4em]">
              Diagnostic Guide
            </p>
          </div>          
          <h1 className="text-2xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
            KNOW YOUR  
            <span className="italic opacity-90 text-white/80"> SCD REPORT</span>
          </h1>          
          <p className="max-w-2xl mx-auto text-white/90 text-sm md:text-lg font-medium italic tracking-wide drop-shadow-sm leading-relaxed">
            "Understanding your screening results is the first step towards
            effective management and a healthier future."
          </p>          
          <div className="absolute top-1/2 left-10 w-24 h-24 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:12px_12px] opacity-20 -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-10 w-24 h-24 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:12px_12px] opacity-20 -translate-y-1/2"></div>
        </div>
      </div>

      {/* --- Main Login / Form Section --- */}
      <div className="bg-[#f0f4f8] font-sans flex items-center justify-center py-10">
        <div className="max-w-5xl w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
          
          {/* Left Column: Mission Info */}
          <div className="md:w-5/12 bg-gradient-to-br from-[#e33d46] via-[#d32f2f] to-[#ff7043] p-10 text-white flex flex-col justify-between relative">
            <div className="absolute inset-0 opacity-10 bg-[url('images/cubes.png')]"></div>

            <div className="relative z-10">
              <h1 className="text-3xl font-black leading-tight uppercase tracking-tight mb-4">
                National Sickle Cell <br /> Anaemia Elimination <br /> Mission
              </h1>
              <div className="h-1.5 w-20 bg-orange-400 rounded-full mb-8"></div>
              <p className="text-lg leading-relaxed opacity-90 font-medium italic">
                "A significant step towards eliminating Sickle Cell Disease through an integrated digital portal."
              </p>
            </div>

            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-3 w-fit">
                <div className="h-10 w-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-lg italic">
                  2047
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest leading-none">
                  ELIMINATION <br /> MISSION
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Login Form */}
          <div className="md:w-7/12 p-8 md:p-14 bg-white flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <header className="mb-10">
                <h2 className="text-3xl font-black text-[#1a202c] mb-2">
                  Access Your Report
                </h2>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-red-600"></span> 
                  Enter details to download your SCD report
                </p>
              </header>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {/* Phone Input */}
                <div className="group">
                  <label className="block text-sm font-semibold uppercase tracking-[0.1em] text-slate-400 mb-2 ml-1">
                    Registered Mobile Number
                  </label>
                  <div className="flex items-center bg-slate-50 border-2 border-slate-200 rounded-lg overflow-hidden focus-within:border-[#e33d46] focus-within:bg-white transition-all">
                    <div className="px-4 py-4 border-r border-slate-200 bg-slate-100 font-bold text-[#64748b] text-sm">
                      +91
                    </div>
                    <input
                      type="tel"
                      placeholder="Enter 10-digit number"
                      className="w-full px-5 py-4 bg-transparent outline-none text-[#1e293b] font-bold placeholder:text-slate-300"
                    />
                  </div>
                </div>

                {/* Captcha Section */}
                <div className="group">
                  <label className="block text-sm font-semibold uppercase tracking-[0.1em] text-slate-400 mb-2 ml-1">
                    Security Verification
                  </label>
                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-5 bg-white border-2 border-slate-200 rounded-lg flex items-center justify-center font-serif italic text-lg tracking-[0.3em] font-black text-slate-700 select-none shadow-inner bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]">
                      A7B2X
                    </div>
                    <button
                      type="button"
                      title="Refresh Captcha"
                      className="col-span-2 bg-[#ff7043] hover:bg-[#f4511e] text-white rounded-xl flex items-center justify-center transition-all shadow-md active:scale-95 group"
                    >
                      <svg
                        className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      placeholder="CODE"
                      className="col-span-5 px-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl outline-none focus:border-[#e33d46] focus:bg-white text-[#1e293b] font-bold uppercase placeholder:text-slate-300"
                    />
                  </div>
                  <button
                    type="button"
                    className="text-[10px] font-black text-red-600 uppercase mt-2 ml-1 hover:underline tracking-widest"
                  >
                    ↻ Refresh Captcha
                  </button>
                </div>

                <div className="space-y-4 pt-2">
                  {!otpSent ? (
                    <button
                      onClick={() => setOtpSent(true)}
                      className="w-full py-4 bg-[#0f172a] text-white rounded-xl font-black text-xs uppercase tracking-[0.3em] shadow-xl shadow-slate-200 hover:bg-[#1e293b] active:scale-[0.98] transition-all duration-300"
                    >
                      Send OTP
                    </button>
                  ) : (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
                      <div className="group">
                        <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 ml-1">
                          Verify OTP
                        </label>
                        <input
                          type="text"
                          placeholder="••••••"
                          className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl outline-none focus:border-[#e33d46] focus:bg-white text-[#1e293b] font-black text-center text-2xl tracking-[0.5em] placeholder:text-slate-300"
                        />
                      </div>
                      <button className="w-full py-4 bg-gradient-to-r from-[#e33d46] to-[#ff7043] text-white rounded-xl font-black text-xs uppercase tracking-[0.3em] shadow-xl shadow-red-200 active:scale-[0.98] transition-all duration-300">
                        Sign In / View Report
                      </button>
                    </div>
                  )}
                </div>
              </form>

              <footer className="mt-12 text-center border-t border-slate-100 pt-8">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                  Need Assistance?{" "}
                  <a href="#" className="text-red-600 hover:underline italic">
                    Contact Helpdesk
                  </a>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>

     

    

      
    </>
  );
};

export default KnowYourReport;
