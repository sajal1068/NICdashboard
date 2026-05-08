import React from 'react';

const Contact = () => {
  return (
    <>
   <div className="min-h-screen bg-[#f3f6f9] font-sans flex flex-col">
      {/* --- Navigation --- */}    

      {/* --- Header Section (Gradient Theme) --- */}
      <div className="bg-gradient-to-r from-[#e33d46] to-[#ff7043] py-20 px-6 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Find Us</h1>
          <p className="text-sm font-medium opacity-90 max-w-lg mx-auto leading-relaxed italic">
            "Eliminate sickle cell disease as a public health problem in India before 2047"
          </p>
        </div>
      </div>

      <main className="flex-1 max-w-6xl w-full mx-auto p-6 -mt-12 relative z-20">
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200 overflow-hidden border border-slate-100 flex flex-col md:flex-row min-h-[500px]">
          
          {/* --- Left Side: Address Details --- */}
          <div className="md:w-5/12 p-10 md:p-14 bg-white flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100">
            <div className="mb-10">
              <span className="text-[#e33d46] font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">Official Headquarters</span>
              <h2 className="text-3xl font-black text-slate-900 leading-tight uppercase tracking-tighter">
                Ministry of Health & <br/> Family Welfare
              </h2>
              <div className="h-1.5 w-16 bg-orange-400 mt-6 rounded-full"></div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="h-12 w-12 bg-red-50 text-[#e33d46] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#e33d46] group-hover:text-white transition-all duration-300 shadow-sm">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Office Location</h3>
                  <p className="text-lg font-bold text-slate-800 leading-tight">
                    Nirman Bhawan, <br/> New Delhi - 110011
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="h-12 w-12 bg-orange-50 text-[#ff7043] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#ff7043] group-hover:text-white transition-all duration-300 shadow-sm">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Office Hours</h3>
                  <p className="text-lg font-bold text-slate-800">
                    Mon - Fri: 9:00 AM - 5:30 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 p-6 bg-slate-50 rounded-3xl border border-slate-100">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Government of India</p>
               <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Support and coordination for the elimination of Sickle Cell Anaemia in tribal and high prevalence states.
               </p>
            </div>
          </div>
          
          <div className="md:w-7/12 bg-slate-100 relative min-h-[400px]">            
            <iframe
              title="Nirman Bhawan Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6243553080117!2d77.2151044!3d28.611044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce390eee379a9%3A0x7945a4752f00fa08!2sMinistry%20of%20Health%20and%20Family%20Welfare!5e0!3m2!1sen!2sin!4v1769757845312!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="absolute inset-0"
            ></iframe>
          </div>

        </div>
      </main>
    
    </div>
    </>
  );
}

export default Contact;
