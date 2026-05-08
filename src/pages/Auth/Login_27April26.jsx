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
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('iamges/cubes.png')]"></div>
          
          <div className="relative z-10">
            <img src="images/ministry_of_health_india.svg" alt="MoHFW" className="h-16 mb-8 drop-shadow-md brightness-0 invert" />
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

        {/* --- Right Column: Login Form (Login Section) --- */}
        <div className="md:w-7/12 p-8 md:p-16 flex flex-col justify-center bg-white relative">
          
          {/* --- Highlighted Back Button Inside Login Section --- */}
          <div className="absolute top-6 left-6 md:top-10 md:left-10">
            <button 
              onClick={() => window.location.href = '/'} 
              className="group flex items-center gap-2 bg-slate-50 text-slate-700 px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-sm border border-slate-100 hover:bg-red-600 hover:text-white hover:shadow-md hover:shadow-red-100 transition-all duration-300"
            >
              <span className="text-sm group-hover:-translate-x-1 transition-transform">←</span>
              <span>Back to Home</span>
            </button>
          </div>

          <div className="max-w-sm mx-auto w-full mt-12 md:mt-0">
            {/* Center Logo */}
            <div className="flex justify-center mb-6">
              <img 
                src="images/ministry_of_health_india.svg" 
                alt="MoHFW Logo" 
                className="h-20 w-auto object-contain" 
              />
            </div>

            <header className="mb-10 text-center md:text-left">
              <h1 className="text-3xl font-black text-slate-900 leading-none mb-3">
                पहुँच पोर्टल (Login)
              </h1>
              <p className="text-slate-500 font-medium">OTP प्राप्त करने के लिए अपना विवरण भरें</p>
            </header>

            <form className="space-y-6">
              {/* Mobile Number Input */}
              <div className="group">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1 transition-colors group-focus-within:text-red-500">
                  Mobile Number
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-slate-400 font-bold border-r border-slate-200 pr-3">+91</span>
                  <input 
                    type="tel" 
                    maxLength="10"
                    className="w-full pl-16 pr-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none transition-all focus:border-red-500 focus:bg-white text-slate-800 font-medium tracking-wider"
                    placeholder="99999 99999"
                  />
                </div>
              </div>

              {/* Captcha Section */}
              <div className="group">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1 transition-colors group-focus-within:text-red-500">
                  Enter Captcha
                </label>
                <div className="flex gap-3">
                  <input 
                    type="text"
                    className="flex-1 px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none transition-all focus:border-red-500 focus:bg-white text-slate-800 font-medium uppercase"
                    placeholder="Type code"
                  />
                  <div className="w-32 bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-200 select-none">
                    <span className="italic font-serif font-bold text-slate-600 tracking-widest line-through decoration-red-500/30">
                      {captchaCode}
                    </span>
                  </div>
                </div>
                <button 
                  type="button" 
                  className="mt-2 text-[10px] font-bold text-red-500 hover:text-red-600 uppercase tracking-tighter ml-1"
                >
                  ↻ Refresh Captcha
                </button>
              </div>

              {/* Action Button */}
              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-slate-200 hover:bg-red-600 hover:shadow-red-200 active:scale-[0.98] transition-all duration-300">
                Send OTP
              </button>
            </form>

            <div className="mt-10 pt-8 border-t border-slate-100 text-center">
              <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">
                मदद चाहिए? <a href="#" className="text-red-600 hover:underline">हेल्पडेस्क से संपर्क करें</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SickleLogin;