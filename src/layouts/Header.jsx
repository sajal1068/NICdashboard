import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header({ handleSkipToMain }) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { t, i18n } = useTranslation();
  
  const [fontSize, setFontSize] = useState(100);
  const [isHighContrast, setIsHighContrast] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  const updateFontSize = (newSize) => {
    if (newSize >= 80 && newSize <= 120) {
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };

  const toggleContrast = () => {
    const nextContrast = !isHighContrast;
    setIsHighContrast(nextContrast);
    if (nextContrast) {
      document.documentElement.classList.add("high-contrast-mode");
    } else {
      document.documentElement.classList.remove("high-contrast-mode");
    }
  };

  return (
    <>     
     <section className="w-full bg-gray-50 border-b border-gray-200 relative z-[9999] shadow-sm">
  <div className="container mx-auto px-4">
    {/* h-10 (40px) ensure consistency across all elements */}
    <div className="flex items-center justify-between h-10">
      
      {/* 1. Left Side: Brand Identity */}
      <div className="flex items-center gap-x-4">
        <button
          onClick={handleSkipToMain}
          className="absolute left-[-9999px] focus:relative focus:left-0 bg-orange-600 text-white px-4 py-1 text-[10px] font-black rounded shadow-lg transition-all"
        >
          {t("skip_to_main")}
        </button>

        <div className="pl-3 border-l-4 border-orange-500">
          <Link to="/" className="text-[10px] md:text-[11px] font-black text-slate-700 uppercase tracking-widest">
            {t("government_of_india")}
          </Link>
        </div>
      </div>

      {/* 2. Right Side: Accessibility & Tools */}
      <div className="flex items-center gap-x-2 md:gap-x-3 h-full">
        
        {/* Visible Skip Link - Height Matched */}
        <button
          onClick={handleSkipToMain}
          className="hidden lg:flex items-center h-7 px-3 text-[10px] font-black text-slate-500 bg-white border border-slate-300 rounded hover:text-orange-600 hover:border-orange-500 transition-all shadow-sm"
        >
          <span className="mr-1.5 opacity-50 font-sans">↵</span> {t("skip_to_main")}
        </button>

        {/* Creative Font Resizer - Height Matched */}
        <div className="relative flex items-center bg-gray-100 p-0.5 rounded border border-slate-300 shadow-sm h-7">
          {/* Sliding Indicator - Precise alignment */}
          <div 
            className="absolute h-[22px] w-7 bg-white rounded-[2px] shadow-sm transition-all duration-300 ease-in-out border border-slate-200"
            style={{
              transform: `translateX(${fontSize === 95 ? '0px' : fontSize === 100 ? '28px' : '56px'})`
            }}
          ></div>

          <button 
            onClick={() => updateFontSize(95)} 
            className={`relative z-10 w-7 h-full flex items-center justify-center text-[10px] font-black transition-colors duration-300 ${
              fontSize === 95 ? "text-red-600" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            A-
          </button>

          <button 
            onClick={() => updateFontSize(100)} 
            className={`relative z-10 w-7 h-full flex items-center justify-center text-[10px] font-black transition-colors duration-300 ${
              fontSize === 100 ? "text-red-600" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            A
          </button>

          <button 
            onClick={() => updateFontSize(105)} 
            className={`relative z-10 w-7 h-full flex items-center justify-center text-[10px] font-black transition-colors duration-300 ${
              fontSize === 105 ? "text-red-600" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            A+
          </button>
        </div>

        {/* Language Switcher - Height Matched */}
        <div 
          className="relative h-7"
          onMouseEnter={() => setIsLangOpen(true)}
          onMouseLeave={() => setIsLangOpen(false)}
        >
          <button
            className={`flex items-center h-full px-3 text-[10px] font-black rounded border transition-all shadow-sm ${
              isLangOpen ? "bg-orange-50 text-orange-600 border-orange-200" : "bg-white text-slate-600 border-slate-300"
            }`}
          >
            <span className="uppercase">{i18n.language === "hi" ? "हिंदी" : "English"}</span>
            <svg className={`w-3 h-3 ml-1.5 transition-transform ${isLangOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isLangOpen && (
            <div className="absolute right-0 top-full pt-1 w-28 z-[10000] animate-in fade-in slide-in-from-top-1 duration-200">
              <div className="bg-white rounded shadow-xl border border-slate-100 overflow-hidden">
                <button onClick={() => changeLanguage("hi")} className="w-full text-left px-4 py-2 text-[11px] font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">हिंदी</button>
                <button onClick={() => changeLanguage("en")} className="w-full text-left px-4 py-2 text-[11px] font-bold text-slate-700 hover:bg-slate-50 transition-colors border-t border-slate-50">English</button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  </div>
</section>

      {/* 2. Main Brand Section */}
      <header className="w-full bg-white border-b-4 border-red-600 shadow-md">
         <div className="container mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <img src="images/ministry_of_health_india.svg" className="h-14 md:h-20" alt="MoHFW" />
            <div className="flex-1 text-center">
               <h1 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 leading-tight">
                 {t("mission_title")}
               </h1>
            </div>
            <div className="flex items-center gap-4">
               <img src="images/digital-india.svg" className="h-10 md:h-12" alt="Digital India" />
               <img src="images/NHM.svg" className="h-12 md:h-16" alt="NHM" />
            </div>
         </div>
      </header>
    </>
  );
}