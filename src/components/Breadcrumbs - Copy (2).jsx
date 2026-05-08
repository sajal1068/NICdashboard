import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CreativeBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const currentDateTime = new Date().toLocaleString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }).toUpperCase();

  return (
    <nav className="bg-gradient-to-r from-red-700 to-orange-600 py-6 px-6 relative overflow-hidden shadow-2xl">
      {/* Background Pattern for Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('images/cubes.png')] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* --- Left Side: Floating Path (Glass Bubbles) --- */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Home Bubble - Simple White Style */}
          <Link 
            to="/" 
            className="h-11 w-11 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-white hover:text-red-700 transition-all duration-300 group"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>

          {/* Path Steps */}
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

            return (
              <React.Fragment key={to}>
                {/* Visual Connector Arrow */}
                <div className="flex items-center">
                   <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                   </svg>
                </div>

                {last ? (
                  <div className="h-11 px-8 bg-white rounded-full flex items-center justify-center shadow-xl border border-white/50">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-700 italic">
                       {value.replace(/-/g, ' ')}
                    </span>
                  </div>
                ) : (
                  <Link 
                    to={to} 
                    className="h-11 px-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-[10px] font-black text-white uppercase tracking-widest hover:bg-white/30 transition-all shadow-sm"
                  >
                    {value.replace(/-/g, ' ')}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* --- Right Side: Mission & Clock --- */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          
          {/* Target 2047 Badge (Glass Version) */}
          <div className="h-14 pl-2 pr-8 bg-black/20 backdrop-blur-md rounded-full flex items-center gap-4 border border-white/10 group">
             <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-red-700 font-black italic text-[10px] shadow-lg group-hover:rotate-[360deg] transition-transform duration-700">
                2047
             </div>
             <div className="flex flex-col">
                <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none">Elimination Mission</span>
                <span className="text-[8px] font-bold text-orange-200 uppercase tracking-[0.2em] mt-1 italic">Mission 2047 Target</span>
             </div>
          </div>

          {/* Real-time Clock (High Contrast) */}
          <div className="h-14 px-6 bg-white rounded-full flex items-center gap-3 shadow-2xl border border-red-50 group">
             <div className="h-2 w-2 bg-red-600 rounded-full animate-ping"></div>
             <p className="text-[10px] font-black text-slate-800 uppercase tracking-widest group-hover:scale-105 transition-transform">
                {currentDateTime}
             </p>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default CreativeBreadcrumbs;