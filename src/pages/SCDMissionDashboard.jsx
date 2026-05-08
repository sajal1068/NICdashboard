import React from 'react';

const SCDMissionDashboard = () => {
  // Mock Data based on current mission stats
  const stats = [
    { label: "Total Screened", value: "6,84,29,361", color: "bg-blue-500", icon: "🔍" },
    { label: "Sickle Cell Negative", value: "6,57,07,660", color: "bg-emerald-500", icon: "🛡️" },
    { label: "Sickle Cell Traits", value: "19,33,040", color: "bg-amber-500", icon: "🧬" },
    { label: "Sickle Cell Diseased", value: "2,38,052", color: "bg-red-600", icon: "🏥" },
  ];

  const todayStats = [
    { label: "Screened Today", value: "54,177", color: "text-blue-600" },
    { label: "Negative Today", value: "52,560", color: "text-emerald-600" },
    { label: "Diseased Today", value: "89", color: "text-red-600" },
  ];

  const screeningData = [
    { label: "Screened", value: 68482816, color: "bg-[#ffb31a]", textColor: "text-[#ffb31a]", width: "100%" },
    { label: "Sickle cell Negative", value: 65760007, color: "bg-[#1fe0b0]", textColor: "text-[#1fe0b0]", width: "96%" },
    { label: "Sickle cell Traits", value: 1933564, color: "bg-[#00a3ad]", textColor: "text-[#00a3ad]", width: "15%" },
    { label: "Sickle cell Diseased", value: 238193, color: "bg-[#e33d46]", textColor: "text-[#e33d46]", width: "8%" },
    { label: "Sickle cell Confirmation under process", value: 506440, color: "bg-[#4a4a4a]", textColor: "text-[#4a4a4a]", width: "10%" },
  ];

  // 2. Today's Result Data (Vertical)
  const todayData = [
    { label: "Screened Today", value: 54342, color: "bg-[#ffb31a]", height: "90%" },
    { label: "Sickle cell Negative Today", value: 52687, color: "bg-[#1fe0b0]", height: "86%" },
    { label: "Sickle cell Traits Today", value: 620, color: "bg-[#00a3ad]", height: "15%" },
    { label: "Sickle cell Diseased Today", value: 154, color: "bg-[#e33d46]", height: "8%" },
    { label: "Sickle cell Confirmation under process Today", value: 881, color: "bg-[#4a4a4a]", height: "12%" },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans selection:bg-red-100 selection:text-red-600">
      
      {/* --- Dashboard Header --- */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-red-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-red-200">S</div>
            <div>
              <h1 className="text-xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                Mission <span className="text-red-600">Dashboard</span>
              </h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Elimination by 2047</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Last Updated</p>
              <p className="text-xs font-bold text-slate-900 mt-1">Feb 06, 2026, 05:20 PM</p>
            </div>
            <button className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-md">
              Download Report
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        
        {/* --- Global Impact Metrics (Top Cards) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
              <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-5 group-hover:scale-150 transition-transform duration-700 ${stat.color}`}></div>
              <div className="flex items-center justify-between mb-6">
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center text-xl shadow-inner ${stat.color.replace('bg-', 'bg-opacity-10 text-')}`}>
                  {stat.icon}
                </div>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Global Stats</span>
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter tabular-nums">{stat.value}</h3>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- Daily Performance Monitor --- */}
          <div className="lg:col-span-1 bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-6">
                <div className="animate-pulse flex h-2 w-2 rounded-full bg-red-600"></div>
             </div>
             <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-10 flex items-center gap-2">
                Today's Real-time Activity
             </h4>
             <div className="space-y-8">
               {todayStats.map((today, i) => (
                 <div key={i} className="flex items-center justify-between border-b border-slate-50 pb-6 group/item">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{today.label}</p>
                      <p className={`text-2xl font-black tabular-nums mt-1 ${today.color}`}>{today.value}</p>
                    </div>
                    <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover/item:bg-slate-900 group-hover/item:text-white transition-all">
                      →
                    </div>
                 </div>
               ))}
             </div>
             <button className="w-full mt-10 py-4 bg-slate-50 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-50 hover:text-red-600 transition-all border border-transparent hover:border-red-100">
                View Detailed Trends
             </button>
          </div>

          {/* --- Interactive Data Map / Chart Placeholder --- */}
          <div className="lg:col-span-2 bg-slate-900 p-10 rounded-[3.5rem] shadow-2xl relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/20 blur-[120px] rounded-full"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h4 className="text-2xl font-black italic tracking-tighter uppercase">High Focus <span className="text-red-500">States</span></h4>
                  <p className="text-xs font-medium text-slate-400 mt-1">Prevalence mapping across 17 tribal states</p>
                </div>
                <div className="flex gap-2">
                  {['Map', 'Chart', 'Table'].map(tab => (
                    <button key={tab} className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10 ${tab === 'Map' ? 'bg-white text-slate-900 shadow-lg' : 'hover:bg-white/5'}`}>{tab}</button>
                  ))}
                </div>
              </div>
              
              {/* Visual Map Placeholder */}
              <div className="flex-grow flex items-center justify-center bg-white/5 rounded-[2.5rem] border border-white/5 border-dashed relative group">
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-700">🗺️</div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 italic">Interactive Geo-Spatial Data Visualization</p>
                </div>
                {/* Floating State Snippet */}
                <div className="absolute bottom-10 right-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                   <p className="text-[8px] font-black text-red-400 uppercase leading-none">Top Performer</p>
                   <p className="text-xs font-black mt-2">Madhya Pradesh</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* --- Progress Grading Section --- */}
        <div className="mt-12 bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm">
           <div className="flex items-center justify-between mb-8">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest italic">NITI Aayog Performance Grading</h4>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Q4 2025-26 Report</span>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { label: "Screening Card Distribution", progress: "82%" },
                { label: "Genetic Counselling", progress: "65%" },
                { label: "Community Awareness", progress: "90%" },
                { label: "Laboratory Integration", progress: "74%" }
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <div className="h-2 w-full bg-slate-50 rounded-full mb-3 overflow-hidden">
                    <div className="h-full bg-red-600 rounded-full group-hover:bg-red-500 transition-all duration-1000" style={{ width: item.progress }}></div>
                  </div>
                  <p className="text-[10px] font-black text-slate-800 uppercase leading-tight mb-1">{item.label}</p>
                  <p className="text-[10px] font-bold text-red-600">{item.progress}</p>
                </div>
              ))}
           </div>
        </div>

        
<div className="bg-[#f0f2f5] p-6 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* --- LEFT: SCREENING CHART --- */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="bg-[#1ca6bc] text-white px-4 py-1 inline-block rounded-br-lg text-sm font-bold m-2">
            Screening
          </div>
          
          <div className="p-6">
            {/* Visual Bar Graph Area */}
            <div className="space-y-6 mb-8 border-l border-b border-slate-200 pl-4 pb-4">
              {screeningData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-32 text-[10px] font-bold text-slate-600 text-right leading-tight">
                    {item.label}
                  </div>
                  <div className="flex-grow h-8 bg-slate-50 rounded-sm relative group">
                    <div 
                      className={`h-full ${item.color} rounded-sm transition-all duration-1000 origin-left`}
                      style={{ width: item.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Table Representation */}
            <div className="space-y-1">
              {screeningData.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 px-3 border-b border-slate-100 text-xs font-bold">
                  <span className="text-slate-600 italic">{item.label}</span>
                  <span className={`px-4 py-1 rounded-full ${item.color} text-white min-w-[100px] text-center shadow-sm`}>
                    {item.value.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT: TODAY'S RESULT CHART --- */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="bg-[#1ca6bc] text-white px-4 py-1 inline-block rounded-br-lg text-sm font-bold m-2">
            Today's Result
          </div>

          <div className="p-6">
            {/* Visual Vertical Bar Graph Area */}
            <div className="h-64 flex items-end justify-around border-l border-b border-slate-200 mb-8 pt-10 px-4">
              {todayData.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center group w-full px-2">
                  <div 
                    className={`w-full max-w-[50px] ${item.color} rounded-t-sm transition-all duration-1000 hover:brightness-110`}
                    style={{ height: item.height }}
                  ></div>
                  <div className="h-20 w-32 mt-2">
                    <p className="text-[9px] font-bold text-slate-400 text-center leading-tight rotate-[15deg] origin-top-left">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Table Representation */}
            <div className="space-y-1">
              {todayData.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 px-3 border-b border-slate-100 text-xs font-bold">
                  <span className="text-slate-600 italic">{item.label}</span>
                  <span className={`px-4 py-1 rounded-full ${item.color} text-white min-w-[80px] text-center shadow-sm`}>
                    {item.value.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
      </main>
    </div>
  );
};

export default SCDMissionDashboard;