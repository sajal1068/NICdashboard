import React from 'react';
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white font-sans text-slate-900">
      
      {/* 1. Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-700 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            हमारे बारे में (About Us)
          </h1>
          <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto opacity-90 leading-relaxed">
            सिकल सेल एनीमिया उन्मूलन मिशन: एक स्वस्थ और रोग-मुक्त भविष्य की ओर भारत का संकल्प।
          </p>
        </div>
      </section>

      {/* 2. Statistical Highlights (Infographics) */}
      <section className="py-16 container mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-xl border-t-4 border-orange-500 transform hover:-translate-y-2 transition-transform">
            <h3 className="text-4xl font-black text-red-600">8.6%</h3>
            <p className="mt-2 text-slate-600 font-bold uppercase tracking-wider text-sm">जनजातीय जनसंख्या (Census 2011)</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border-t-4 border-red-600 transform hover:-translate-y-2 transition-transform">
            <h3 className="text-4xl font-black text-red-600">67.8 M</h3>
            <p className="mt-2 text-slate-600 font-bold uppercase tracking-wider text-sm">कुल प्रभावित जनजातीय लोग</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border-t-4 border-slate-800 transform hover:-translate-y-2 transition-transform">
            <h3 className="text-4xl font-black text-slate-800">10</h3>
            <p className="mt-2 text-slate-600 font-bold uppercase tracking-wider text-sm">विशेष जनजातीय स्वास्थ्य समस्याएँ</p>
          </div>
        </div>
      </section>

      {/* 3. The Core Narrative */}
      <section className="py-12 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-black mb-6 border-l-8 border-red-600 pl-4 uppercase">मिशन की पृष्ठभूमि</h2>
            <div className="space-y-4 text-slate-700 leading-relaxed text-lg">
              <p>सिकल सेल रोग एक अनुवांशिक रक्त रोग है जो प्रभावित रोगी के पूरे जीवन को प्रभावित करता है। भारत में जनजातीय आबादी का घनत्व विश्व में सर्वाधिक है।</p>
              <p>MoHFW जनजातीय स्वास्थ्य विशेषज्ञ समिति की रिपोर्ट ने सिकल सेल रोग को जनजातीय स्वास्थ्य की 10 विशेष समस्याओं में से एक के रूप में सूचीबद्ध किया है।</p>
              <p>NHM के तहत स्वास्थ्य मंत्रालय ने 2016 में हीमोग्लोबिनोपैथी (थैलेसीमिया और सिकल सेल रोग) पर काम शुरू किया था, जिसमें रोकथाम और प्रबंधन पर व्यापक दिशानिर्देश जारी किए गए थे।</p>
            </div>
          </div>
          <div className="lg:w-1/2 bg-slate-100 p-8 rounded-[2rem] border-2 border-dashed border-slate-300">
            <h3 className="text-xl font-bold mb-4 text-red-600 uppercase tracking-widest">अंगों पर प्रभाव (Impact on Organs)</h3>
            <ul className="grid grid-cols-2 gap-4">
              {['फेफड़े', 'हृदय', 'किडनी', 'आंखें', 'हड्डियाँ', 'मस्तिष्क'].map((organ) => (
                <li key={organ} className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-sm font-bold text-slate-600">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span> {organ}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Journey/Timeline Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-black uppercase tracking-widest">मिशन का सफर (The Journey)</h2>
        </div>
        <div className="max-w-4xl mx-auto px-6">
          <div className="border-l-2 border-red-500 ml-4 space-y-12">
            <div className="relative pl-10">
              <span className="absolute left-[-9px] top-1 w-4 h-4 bg-red-500 rounded-full border-4 border-slate-900"></span>
              <h4 className="text-xl font-black text-orange-400">2016</h4>
              <p className="text-slate-400 mt-2 italic">NHM के तहत हीमोग्लोबिनोपैथी (थैलेसीमिया और सिकल सेल रोग) कार्य का शुभारंभ। स्क्रीनिंग और प्रबंधन हेतु धन का प्रावधान।</p>
            </div>
            <div className="relative pl-10">
              <span className="absolute left-[-9px] top-1 w-4 h-4 bg-orange-500 rounded-full border-4 border-slate-900"></span>
              <h4 className="text-xl font-black text-orange-400">महामारी का प्रभाव</h4>
              <p className="text-slate-400 mt-2">महामारी के कारण स्क्रीनिंग और IEC (सूचना, शिक्षा और संचार) गतिविधियों के प्रयासों में कमी आई।</p>
            </div>
            <div className="relative pl-10">
              <span className="absolute left-[-9px] top-1 w-4 h-4 bg-green-500 rounded-full border-4 border-slate-900 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
              <h4 className="text-xl font-black text-green-400">वर्तमान संकल्प</h4>
              <p className="text-slate-400 mt-2 uppercase font-bold tracking-tighter">सिकल सेल का पता लगाने, प्रबंधन और जागरूकता के लिए एक समर्पित पृथक मिशन की आवश्यकता।</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
