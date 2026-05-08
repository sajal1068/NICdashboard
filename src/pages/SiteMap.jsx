import React from 'react';
import { Link } from 'react-router-dom';

const SiteMap = () => {
  // डेटा को सरल श्रेणियों में विभाजित किया गया है
  const sitemapData = [
    {
      group: "General",
      links: [
        { label: "Home", url: "/" },
        { label: "About Mission", url: "/about" },
        { label: "Contact Us", url: "/contact" },
        { label: "Sitemap", url: "/sitemap" }
      ]
    },
    {
      group: "Resources",
      links: [
        { label: "Photo Gallery", url: "/photo-gallery" },
        { label: "Video Gallery", url: "/video-gallery" },
        { label: "User Manuals", url: "/user-manual" },
        { label: "Training Kits", url: "/training-materials" }
      ]
    },
    {
      group: "Patient Portal",
      links: [
        { label: "Know Your Report", url: "/KnowYourReport" },
        { label: "Genetic Counselling", url: "/genetic-counselling" },
        { label: "Mobile App", url: "/mobile-app" }
      ]
    },
    {
      group: "Administration",
      links: [
        { label: "Admin Login", url: "/login" },
        { label: "Mission Dashboard", url: "/dashboard" },
        { label: "Privacy Policy", url: "/privacy" }
      ]
    }
  ];

 const objectives = [
    {
      id: "01",
      title: "Universal Accessibility",
      desc: "Provision of affordable and accessible care to all SCD patients.",
      icon: "🌍",
      gradient: "from-red-500 to-orange-500"
    },
    {
      id: "02",
      title: "Quality Assurance",
      desc: "To ensure quality of care for SCD patients through standardized protocols.",
      icon: "💎",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      id: "03",
      title: "Prevalence Reduction",
      desc: "To reduce the prevalence of SCD through mass screening and awareness.",
      icon: "📉",
      gradient: "from-red-600 to-red-400"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-20">
      
      {/* --- Minimal Hero Section --- */}
      <div className="bg-gradient-to-r from-[#e33d46] to-[#ff7043] py-16 mb-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
            Site Map
          </h1>
          <div className="h-1 w-20 bg-white/40 mx-auto mt-4 rounded-full"></div>
        </div>
      </div>

      {/* --- Sitemap Grid --- */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sitemapData.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Category Title */}
              <h2 className="text-sm font-black text-red-600 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <span className="h-2 w-2 bg-red-600 rounded-full"></span>
                {category.group}
              </h2>

              {/* Links List */}
              <ul className="space-y-4">
                {category.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link 
                      to={link.url}
                      className="text-[13px] font-bold text-slate-500 hover:text-slate-900 flex items-center group transition-colors uppercase tracking-widest"
                    >
                      {/* Arrow icon visible on hover */}
                      <svg className="w-0 h-4 group-hover:w-4 transition-all text-red-600 mr-0 group-hover:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- Simple Footer Support --- */}
        <div className="mt-12 p-8 bg-slate-100 rounded-[2rem] text-center border border-slate-200">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Need more help? <Link to="/contact" className="text-red-600 border-b border-red-600 ml-1">Go to Contact Support</Link>
          </p>
        </div>
      </div>

  

    <div className="bg-[#f8fafc] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Phase 1: Main Vision Card --- */}
        <div className="relative bg-gradient-to-br from-[#e33d46] to-[#ff7043] p-12 md:p-20 rounded-[4rem] text-white shadow-2xl mb-12 overflow-hidden group">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] group-hover:scale-110 transition-transform duration-1000"></div>
          
          <div className="relative z-10 max-w-5xl">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] mb-8 opacity-70 flex items-center gap-4">
              <span className="h-1 w-10 bg-white/40 rounded-full"></span>
              The Vision 2047
            </h2>
            <p className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tighter italic mb-10">
              "Eliminate sickle cell disease as a public health problem in India before 2047."
            </p>
            
            {/* Core Pillars Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-90">
              {[
                "Increasing community awareness",
                "Mass screening for early identification",
                "Strong network of diagnosis & linkages",
                "Implementing robust monitoring system"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-sm font-bold uppercase tracking-wider">
                  <div className="h-2 w-2 bg-white rounded-full"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Phase 2: Implementation Details (Bento Grid) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Strategy Integration */}
          <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="h-12 w-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 text-2xl font-black">01</div>
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-4 leading-tight">
              Primary Care Strengthening
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Strengthening existing primary health care mechanisms to incorporate SCD-related strategies seamlessly.
            </p>
          </div>

          {/* Capacity Building */}
          <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="h-12 w-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 text-2xl font-black">02</div>
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-4 leading-tight">
              Capacity Building
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Empowering primary, secondary, and tertiary health care teams through specialized training.
            </p>
          </div>

          {/* Intensive Interventions */}
          <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className="h-12 w-12 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 text-2xl font-black">03</div>
            <h3 className="text-lg font-black uppercase tracking-tight mb-4 leading-tight">
              Higher Care Interventions
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Building cost-effective intensive interventions at higher care facilities for complex cases.
            </p>
          </div>

        </div>

        

      </div>
    </div>


 

   

    <div className="max-w-5xl mx-auto px-6 py-20 bg-white font-sans">
      {/* Header with Theme Glow */}
      <div className="relative mb-20 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-20 bg-red-500/10 blur-[80px] -z-10"></div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase italic">
          Mission <span className="text-[#e33d46]">Pathways</span>
        </h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-[#e33d46] to-[#ff7043] mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="space-y-16">
        {/* --- SECTION 1: OBJECTIVES --- */}
        <div className="relative pl-12 md:pl-20">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-slate-100 rounded-full"></div>
          
          <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white text-[10px] font-black italic">A</span>
          </div>

          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-8 italic">
            Core <span className="text-[#e33d46]">Objectives</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Affordable & Accessible Care",
              "Quality of Care Assurance",
              "Prevalence Reduction"
            ].map((text, i) => (
              <div key={i} className="group relative p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-red-100/30 transition-all duration-500">
                <div className="h-2 w-8 bg-red-500/20 rounded-full mb-4 group-hover:w-full group-hover:bg-red-500 transition-all duration-700"></div>
                <p className="text-sm font-bold text-slate-700 leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: THREE PILLARS --- */}
        <div className="relative pl-12 md:pl-20">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-slate-100 rounded-full"></div>
          
          <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-[#e33d46] rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white text-[10px] font-black italic">B</span>
          </div>

          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-10 italic">
            Strategic <span className="text-[#ff7043]">Pillars</span>
          </h3>

          <div className="space-y-12">
            {/* Pillar 01 & 02: Simple Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Health Promotion", items: ["Awareness Generation", "Pre-marital Counselling"] },
                { title: "Prevention", items: ["Universal Screening", "Early Detection"] }
              ].map((pillar, idx) => (
                <div key={idx} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-red-100 transition-all">
                  <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Pillar 0{idx + 1}</span>
                  <h4 className="text-lg font-black text-slate-900 uppercase mt-2 mb-4">{pillar.title}</h4>
                  <ul className="space-y-2">
                    {pillar.items.map((item, i) => (
                      <li key={i} className="text-xs font-bold text-slate-500 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 bg-red-500 rounded-full"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Pillar 03: Deeply Nested Layout */}
            <div className="p-8 md:p-12 bg-slate-900 rounded-[3.5rem] text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 blur-[100px] rounded-full group-hover:bg-red-600/40 transition-all duration-700"></div>
              
              <div className="relative z-10">
                <span className="text-[10px] font-black text-red-400 uppercase tracking-widest">Pillar 03</span>
                <h4 className="text-2xl font-black uppercase mt-2 mb-8 tracking-tight">Holistic Management & Care</h4>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {[
                    "Management at Primary, Secondary & Tertiary levels",
                    "Patient Support System",
                    "Community Adoption"
                  ].map((sub, i) => (
                    <div key={i} className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 transition-all">
                      <span className="text-3xl font-black text-white/10 mb-4 block italic">{i + 1}</span>
                      <p className="text-sm font-medium text-slate-300 leading-relaxed">{sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
  );
};

export default SiteMap;