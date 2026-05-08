import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const SickleLogin = () => {
  const { t } = useTranslation();
  const [captchaCode, setCaptchaCode] = useState("A7B2X");

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 font-sans p-4">
      <div className="max-w-5xl w-full bg-white rounded-[2rem] shadow-2xl shadow-slate-200 overflow-hidden flex flex-col md:flex-row border border-slate-100">
        
        {/* --- Left Column: Info Section --- */}
        <div className="md:w-5/12 bg-gradient-to-br from-red-600 via-red-700 to-orange-600 p-8 md:p-12 text-white flex flex-col justify-between relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('images/cubes.png')]"></div>
          
          <div className="relative z-10">
            <img src="images/ministry_of_health_india.svg" alt="MoHFW" className="h-16 mb-8 drop-shadow-md brightness-0 invert" />
            <h2 className="text-3xl font-black leading-tight uppercase tracking-tight">
              {t("mission_title")}
            </h2>
            <div className="h-1.5 w-20 bg-orange-400 mt-4 rounded-full"></div>
            <p className="mt-8 text-red-50 text-base leading-relaxed font-medium opacity-90">
              A step towards the elimination of Sickle Cell Disease through an integrated portal.
            </p>
          </div>

          <div className="relative z-10 mt-12 space-y-4">
            <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="h-10 w-10 bg-orange-500 rounded-full flex items-center justify-center text-xl font-bold">2047</div>
              <p className="text-sm font-bold tracking-wide uppercase">Elimination Mission</p>
            </div>
          </div>
        </div>

        {/* --- Right Column: Login Section --- */}
        <div className="md:w-7/12 p-8 md:p-16 flex flex-col justify-center bg-white relative">
          
          {/* --- Back Button --- */}
          <div className="absolute top-6 right-6 md:top-10 md:right-10">
    <button 
      onClick={() => window.location.href = '/'} 
      className="group flex items-center gap-2 bg-slate-50 text-slate-700 px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-sm border border-slate-100 hover:bg-red-600 hover:text-white hover:shadow-md hover:shadow-red-100 transition-all duration-300"
    >
      <span>Back to Home</span>
      <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
    </button>
  </div>

         <div className="max-w-sm mx-auto w-full mt-8 md:mt-0 px-4">
  {/* Step Indicator - Reduced margin */}
  <div className="flex gap-1.5 mb-4 justify-center md:justify-start">
    <div className="h-1 w-10 bg-red-600 rounded-full"></div>
    <div className="h-1 w-3 bg-slate-200 rounded-full"></div>
  </div>

  <header className="mb-6 text-center md:text-left">
    <h1 className="text-2xl font-black text-slate-900 tracking-tight mb-1">
      Secure Login
    </h1>
    <p className="text-slate-500 text-xs leading-relaxed font-medium">
      Enter your registered mobile number to proceed.
    </p>
  </header>

  {/* Form with reduced spacing (space-y-4 instead of 6 or 8) */}
  <form className="space-y-4">
    {/* Mobile Input Group */}
    <div className="space-y-1.5">
      <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 ml-1">
        Mobile Number
      </label>
      <div className="group relative flex items-center transition-all">
        <div className="absolute left-4 flex items-center gap-2 border-r border-slate-200 pr-3 pointer-events-none">
          <span className="text-sm">🇮🇳</span>
          <span className="text-slate-900 font-bold text-sm">+91</span>
        </div>
        <input 
          type="tel" 
          maxLength="10"
          className="w-full pl-20 pr-4 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl outline-none transition-all duration-300 focus:border-red-500 focus:bg-white text-slate-900 font-bold text-base tracking-[0.1em] placeholder:font-normal placeholder:text-slate-300"
          placeholder="00000 00000"
        />
      </div>
    </div>

    {/* Captcha Section */}
    <div className="space-y-1.5">
      <div className="flex justify-between ml-1">
        <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">
          Security Check
        </label>
        <button type="button" className="text-[9px] font-black text-red-600 hover:underline uppercase">
          Refresh
        </button>
      </div>
      <div className="flex gap-2">
        <input 
          type="text"
          className="w-1/2 px-4 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl outline-none focus:border-red-500 transition-all text-center font-black uppercase tracking-widest text-sm"
          placeholder="CODE"
        />
        <div className="w-1/2 bg-slate-900 rounded-xl flex items-center justify-center relative overflow-hidden shadow-inner">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <span className="text-white font-mono font-black italic tracking-[0.2em] text-lg select-none rotate-2">
            {captchaCode}
          </span>
        </div>
      </div>
    </div>

    {/* CTA Button - Tighter padding */}
    <div className="pt-2">
      <button className="relative w-full overflow-hidden group py-3.5 bg-slate-900 text-white rounded-xl font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-500 hover:shadow-lg hover:shadow-red-500/20 active:scale-[0.98]">
        <span className="relative z-10 flex items-center justify-center gap-2">
          Continue
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </div>
  </form>

  {/* Simplified Help Section */}
  <div className="mt-6 text-center">
    <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.15em]">
      Need assistance? <a href="#" className="text-red-600 hover:underline">Contact Support</a>
    </p>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default SickleLogin;