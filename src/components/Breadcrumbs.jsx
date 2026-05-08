import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CreativeBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // लाइव तारीख और समय (IST)
  const currentDateTime = new Date().toLocaleString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }).toUpperCase();

  return (
    <nav className="bg-[#f1f5f9] py-5 px-6 border-b 0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* --- Left Side: Path Navigation --- */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Home Icon Capsule */}
          <Link 
            to="/" 
            className="h-10 w-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-[#e33d46] hover:border-[#e33d46] transition-all shadow-sm group"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>

          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

            return (
              <div key={to} className="flex items-center gap-2 animate-in fade-in slide-in-from-left-3 duration-500">
                {/* Arrow Separator */}
                <svg className="w-3 h-3 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>

                {last ? (
                  <div className="h-10 px-6 bg-white border border-slate-200 rounded-xl flex items-center shadow-sm">
                    <span className="text-[10px] font-black uppercase tracking-widest italic bg-gradient-to-r from-red-700 to-orange-600 bg-clip-text text-transparent">
                      {value.replace(/-/g, ' ')}
                    </span>
                  </div>
                ) : (
                  <Link 
                    to={to} 
                    className="h-10 px-5 bg-white/50 border border-slate-200 rounded-xl flex items-center text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-800 hover:bg-white transition-all"
                  >
                    {value.replace(/-/g, ' ')}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* --- Right Side: Target & Time --- */}
        <div className="flex items-center gap-4">
          
          {/* Target 2047 Pill */}
          <div className="h-12 pl-2 pr-6 bg-white rounded-2xl flex items-center gap-3 border border-slate-200 shadow-sm group hover:border-red-200 transition-colors">
             <div className="h-8 w-8 bg-gradient-to-br from-red-700 to-orange-600 rounded-lg flex items-center justify-center text-white font-black italic text-[9px] shadow-md group-hover:scale-110 transition-transform">
                2047
             </div>
             <div className="flex flex-col">
                <span className="text-[9px] font-black text-slate-700 uppercase tracking-widest leading-none">Elimination Goal</span>
                <span className="text-[8px] font-bold text-[#e33d46] uppercase tracking-[0.1em] mt-0.5 italic">Mission 2047</span>
             </div>
          </div>

          {/* Clock Bubble (Dark Accent for Depth) */}
          <div className="h-12 px-5 bg-[#1e293b] rounded-2xl flex items-center gap-3 shadow-lg border border-slate-700 group">
             <div className="h-1.5 w-1.5 bg-orange-500 rounded-full animate-pulse shadow-[0_0_8px_#f97316]"></div>
             <p className="text-[10px] font-black text-slate-200 uppercase tracking-widest">
                {currentDateTime}
             </p>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default CreativeBreadcrumbs;