import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SickleLogin = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans p-4">
      <div className="max-w-5xl w-full bg-white rounded-[2rem] shadow-2xl shadow-slate-200 overflow-hidden flex flex-col md:flex-row border border-slate-100">
        
        {/* --- Left Column: Info Section (Mission Context) --- */}
        <div className="md:w-5/12 bg-gradient-to-br from-red-600 via-red-700 to-orange-600 p-8 md:p-12 text-white flex flex-col justify-between relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <div className="relative z-10">
            <img src="images/ministry_logo_white.png" alt="MoHFW" className="h-16 mb-8 drop-shadow-md" />
            <h2 className="text-3xl font-black leading-tight uppercase tracking-tight">
              {t("mission_title")}
            </h2>
            <div className="h-1.5 w-20 bg-orange-400 mt-4 rounded-full"></div>
            <p className="mt-8 text-red-50 text-base leading-relaxed font-medium opacity-90">
              एकीकृत पोर्टल के माध्यम से सिकल सेल रोग के उन्मूलन की दिशा में एक कदम।
            </p>
          </div>

          <div className="relative z-10 mt-12 space-y-4">
            <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="h-10 w-10 bg-orange-500 rounded-full flex items-center justify-center text-xl font-bold">2047</div>
              <p className="text-sm font-bold tracking-wide uppercase">Elimination Mission</p>
            </div>
          </div>
        </div>

        {/* --- Right Column: Updated Form Fields --- */}
        <div className="md:w-7/12 p-8 md:p-16 flex flex-col justify-center bg-white relative">
          
          {/* Logo at Top Center for Mobile/Tablets */}
          <div className="flex justify-center mb-8">
             <img src="images/sickle_mission_logo.png" className="h-20 w-auto" alt="Mission Logo" />
          </div>

          <div className="max-w-sm mx-auto w-full">
            <form className="space-y-6">
              
              {/* Mobile Number Field with India Flag */}
              <div className="group">
                <label className="block text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">
                  Enter Mobile Number
                </label>
                <div className="flex items-center bg-slate-50 border-2 border-slate-100 rounded-2xl overflow-hidden focus-within:border-red-500 focus-within:bg-white transition-all">
                  <div className="flex items-center px-4 border-r border-slate-200 bg-slate-100/50">
                    <img src="images/india_flag.svg" alt="India" className="w-6 h-auto" />
                    <span className="ml-2 text-sm font-bold text-slate-500">+91</span>
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Enter Mobile Number"
                    className="w-full px-4 py-4 bg-transparent outline-none text-slate-800 font-medium"
                  />
                </div>
              </div>

              {/* Captcha Section */}
              <div className="group">
                <label className="block text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">
                  Enter Captcha
                </label>
                <div className="grid grid-cols-12 gap-2">
                  {/* Visual Captcha Area */}
                  <div className="col-span-5 bg-slate-100 rounded-xl flex items-center justify-center border-2 border-slate-200 italic font-serif text-lg tracking-widest text-slate-700 select-none">
                    3S2FBG
                  </div>
                  
                  {/* Refresh Button */}
                  <button type="button" className="col-span-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>

                  {/* Captcha Input */}
                  <input 
                    type="text" 
                    placeholder="Code"
                    className="col-span-5 px-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl outline-none focus:border-red-500 focus:bg-white text-slate-800 font-medium"
                  />
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full py-4 bg-red-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-red-100 hover:bg-red-700 active:scale-[0.98] transition-all duration-300">
                Send OTP
              </button>
            </form>

            {/* Support Links */}
            <div className="mt-8 text-center">
              <Link to="/" className="text-sm font-bold text-blue-600 hover:underline">
                Back to Home
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SickleLogin;