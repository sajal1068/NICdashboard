import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('prevention');

  const pillars = [
    { id: 'health', title: 'Health Promotion', icon: '📢', desc: 'Awareness generation & pre-marital genetic counselling.' },
    { id: 'prevention', title: 'Prevention', icon: '🛡️', desc: 'Universal screening and early detection.' },
    { id: 'management', title: 'Management', icon: '🏥', desc: 'Holistic management across primary, secondary, and tertiary levels.' }
  ];

  return (
    <div className="bg-white text-slate-900 selection:bg-red-100">
      
      {/* --- Section 1: Minimalist Header --- */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs">Mission Mode</span>
          <h1 className="text-4xl md:text-5xl font-black mt-4 mb-6 leading-tight">
            National Sickle Cell Anaemia Elimination Mission
          </h1>
          <div className="flex justify-center gap-4">
            <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg shadow-red-200">Vision 2047</div>
            <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg shadow-orange-200">7 Crore Screenings</div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Interactive Strategy Tabs --- */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-black mb-12 uppercase">The Three Pillar Strategy</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {pillars.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(p.id)}
              className={`p-6 rounded-3xl border-2 transition-all text-left ${
                activeTab === p.id 
                ? 'border-red-600 bg-red-50 ring-4 ring-red-50' 
                : 'border-slate-100 bg-white hover:border-slate-200'
              }`}
            >
              <span className="text-3xl mb-4 block">{p.icon}</span>
              <h3 className="font-black text-lg uppercase tracking-tight">{p.title}</h3>
              <p className="text-sm text-slate-500 mt-2 font-medium">{p.desc}</p>
            </button>
          ))}
        </div>

        {/* Dynamic Content based on Tab */}
        <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] min-h-[300px] flex items-center shadow-2xl">
          {activeTab === 'prevention' && (
            <div className="grid md:grid-cols-2 gap-10 items-center animate-in fade-in duration-500">
              <div>
                <h3 className="text-2xl font-black text-red-500 mb-4 italic">Universal Screening</h3>
                <p className="text-slate-400 leading-relaxed font-medium">
                  The mission focuses on universal population-based screening from 0-18 years, gradually expanding to 40 years. Universal screening is essential for early identification and lowering prevalence.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-4 text-xs tracking-widest uppercase text-slate-500">Key Focus Areas</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2"><span className="text-red-500">●</span> 17 High Prevalence States</li>
                  <li className="flex gap-2"><span className="text-red-500">●</span> RBSK & PMSMA Platforms</li>
                  <li className="flex gap-2"><span className="text-red-500">●</span> Pre-marital & Pre-conception screening</li>
                </ul>
              </div>
            </div>
          )}
          {/* Add more logic for other tabs similarly */}
        </div>
      </section>

      {/* --- Section 3: Organ Impact Visualizer (Simplified) --- */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-white p-8 rounded-full aspect-square flex items-center justify-center border-8 border-red-50 shadow-2xl relative z-10">
               <span className="text-red-600 font-black text-center text-lg uppercase leading-tight">
                 Whole Life <br/> Affected
               </span>
            </div>
            {/* Visual labels around the center circle */}
            <div className="absolute top-0 right-0 bg-white px-4 py-2 rounded-xl shadow-lg font-bold border-l-4 border-orange-500 animate-bounce">Heart</div>
            <div className="absolute bottom-10 left-[-20px] bg-white px-4 py-2 rounded-xl shadow-lg font-bold border-l-4 border-red-500">Bones & Brain</div>
            <div className="absolute top-20 left-[-40px] bg-white px-4 py-2 rounded-xl shadow-lg font-bold border-l-4 border-blue-500">Lungs & Eyes</div>
          </div>
          <div>
            <h2 className="text-3xl font-black mb-6 leading-tight">Beyond Anemia: <br/> A Multi-Organ Challenge</h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              Sickle cell disease causes pain crises, reduced growth, and affects multiple vital organs. 
              MoHFW tribal health expert committee report lists it as one of the 10 special problems affecting tribal people disproportionately.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;