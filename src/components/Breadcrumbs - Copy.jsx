import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const UniqueBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="bg-[#f8fafc] py-6 px-6 sticky top-0 z-40 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* --- Unique Stepped Path Design --- */}
        <div className="flex items-center gap-0">
          {/* Home Icon Capsule */}
          <Link 
            to="/" 
            className="h-10 px-5 bg-white border border-slate-200 rounded-l-2xl flex items-center justify-center text-slate-400 hover:text-[#e33d46] hover:bg-red-50 transition-all shadow-sm group"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>

          {/* Dynamic Steps */}
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

            return (
              <React.Fragment key={to}>
                {/* Visual Connector Arrow */}
                <div className="h-10 w-6 bg-white border-y border-slate-200 flex items-center justify-center">
                  <div className="w-[2px] h-4 bg-slate-200 rotate-[20deg]"></div>
                </div>

                {last ? (
                  <div className="h-10 px-6 bg-gradient-to-r from-[#e33d46] to-[#ff7043] rounded-r-2xl flex items-center shadow-lg shadow-red-100 border-y border-r border-red-500">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white italic">
                      {value.replace(/-/g, ' ')}
                    </span>
                  </div>
                ) : (
                  <Link 
                    to={to} 
                    className="h-10 px-5 bg-white border-y border-slate-200 flex items-center text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-[#e33d46] transition-colors"
                  >
                    {value.replace(/-/g, ' ')}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* --- Unique Circular Target 2047 Indicator --- */}
        <div className="flex items-center gap-4 bg-white p-2 pr-6 rounded-full border border-slate-200 shadow-sm group">
          <div className="relative h-12 w-12 flex items-center justify-center">
            {/* SVG Progress Circle */}
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-slate-100" />
              <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="125.6" strokeDashoffset="43.9" className="text-[#e33d46] transition-all duration-1000 group-hover:stroke-orange-500" />
            </svg>
            <span className="absolute text-[8px] font-black italic text-slate-800">65%</span>
          </div>
          
          <div className="flex flex-col">
            <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1 text-right">Mission Status</h4>
            <div className="flex items-center gap-2 justify-end">
              <span className="text-[11px] font-black text-slate-900 italic">Elimination 2047</span>
              <div className="h-1.5 w-1.5 bg-red-600 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default UniqueBreadcrumbs;