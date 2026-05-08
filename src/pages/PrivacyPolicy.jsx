import React from "react";

const PrivacyPolicy = () => {
  const steps = [
    {
      title: "Tiered Medical Management",
      desc: "Management of persons with sickle cell disease at primary, secondary and tertiary health care levels; treatment facilities at tertiary health care facilities.",
      icon: "🏥",
      color: "border-red-500"
    },
    {
      title: "Patient Support System",
      desc: "A robust network providing social security linkages, affordable medicines, and continuous health monitoring.",
      icon: "🤝",
      color: "border-orange-500"
    },
    {
      title: "Community Adoption",
      desc: "Building a supportive ecosystem through community-led awareness and local health care strengthening.",
      icon: "🏡",
      color: "border-slate-800"
    }
  ];

  const preventionPoints = [
    {
      id: "01",
      level: "Core Strategy",
      title: "Awareness & Counselling",
      desc: "Awareness Generation & Premarital Counselling serve as the foundation of primary prevention.",
      icon: "📣",
      grid: "md:col-span-1"
    },
    {
      id: "02",
      level: "Individual",
      title: "SCD Support Corner",
      desc: "Individuals with known SCD are encouraged to register on the Support Corner to bridge the gap between patients and tribal health services.",
      icon: "👤",
      grid: "md:col-span-1"
    },
    {
      id: "03",
      level: "Community",
      title: "Local Platforms",
      desc: "Leveraging VHSNC, MAS, and Jan Arogya Samitis to sensitize communities on screening services available at AB-HWCs.",
      icon: "🏘️",
      grid: "md:col-span-1"
    },
    {
      id: "04",
      level: "Family Support",
      title: "Patient Support Groups",
      desc: "PSGs facilitated by ASHA/frontline workers improve treatment compliance by engaging both patients and caregivers.",
      icon: "🤝",
      grid: "md:col-span-1"
    },
    {
      id: "05",
      level: "Genetics",
      title: "Pre-marital Screening",
      desc: "Establishing community-level mechanisms for pre-conception screening and ensuring extended family screening for all carriers.",
      icon: "🧬",
      grid: "md:col-span-1"
    },
    {
      id: "06",
      level: "Education",
      title: "School & College Outreach",
      desc: "CHOs and MOs conduct counselling at tribal hostels and EMRS, using AB-Health ambassadors for classroom-based information.",
      icon: "🏫",
      grid: "md:col-span-1"
    },
    {
      id: "07",
      level: "Health Facility",
      title: "Professional Guidance",
      desc: "Primary health center counsellors are responsible for supporting all individuals diagnosed with Sickle Cell Anemia.",
      icon: "🏥",
      grid: "md:col-span-1"
    },
    {
      id: "08",
      level: "National",
      title: "IEC & Mass Media",
      desc: "A 'Health in All' approach driven by MOTA, utilizing GOAL program mentors as ambassadors for mass awareness.",
      icon: "📡",
      grid: "md:col-span-1"
    },
    {
      id: "09",
      level: "Partnerships",
      title: "CBO & NGO Engagement",
      desc: "Utilizing NGOs for mobilization and screening services, adhering to the NGO involvement framework under NHM.",
      icon: "🌍",
      grid: "md:col-span-1"
    }
  ];

  const pillars = [
    {
      title: "Health Promotion",
      desc: "Awareness generation & pre-marital genetic counselling for community empowerment.",
      icon: "📢"
    },
    {
      title: "Universal Prevention",
      desc: "Mass screening and early detection to identify cases at the earliest stage.",
      icon: "🔍"
    },
    {
      title: "Holistic Management",
      desc: "Continuum of care across primary, secondary, and tertiary health care levels.",
      icon: "🏥"
    }
  ];

  return (
    <div className="bg-[#F8FAFC] font-sans text-slate-900 pb-20">
      {/* <header className="bg-gradient-to-br from-[#e33d46] via-[#d32f2f] to-[#ff7043] py-24 px-6 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 animate-in fade-in slide-in-from-top-10 duration-700">
          <div className="h-20 w-20 bg-white/20 backdrop-blur-md rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-2xl border border-white/30">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic drop-shadow-xl">Privacy Policy</h1>
          <p className="text-sm font-bold opacity-90 mt-4 uppercase tracking-[0.3em] max-w-xl mx-auto">
            Governing the SICKLE CELL Mobile App Services
          </p>
        </div>
      </header> */}

      <header className="bg-gradient-to-br from-[#e33d46] via-[#d32f2f] to-[#ff7043] py-20 px-6 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 animate-in fade-in slide-in-from-top-10 duration-700">
          <div className="h-20 w-20 bg-white/20 backdrop-blur-md rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 shadow-2xl border border-white/30">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic drop-shadow-xl">
            Privacy Policy
          </h1>
          <p className="text-xs font-bold opacity-90 mt-4 uppercase tracking-[0.3em] max-w-xl mx-auto">
            Governing the SICKLE CELL Mobile App Services
          </p>
        </div>
      </header>

      <main className="container w-full mx-auto p-6 md:p-12 -mt-16 relative z-20">
        {/* --- Section 1: Introduction (Bento Box) --- */}
        <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-12 mb-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1.5 w-12 bg-red-600 rounded-full"></div>
            <h2 className="text-xl font-black uppercase tracking-widest text-slate-800 italic">
              Privacy Policy for SICKLE CELL Mobile App
            </h2>
          </div>
          <div className="space-y-6 text-slate-500 text-base leading-relaxed text-justify">
            <p className="bg-slate-50 p-6 rounded-2xl border-l-4 border-orange-400 italic text-base">
              This privacy policy governs your use of the software applications
              (“Applications”) for mobile devices that was hosted at NIC e-Gov
              Mobile App Store in Google Play. The Applications mainly provide
              eGovernance Services delivery and intends to provide better
              citizen services by the government. The contents published on
              these Applications were provided by the concerned
              Ministries/Departments of Government of India or the allied
              government establishment. This information provided through these
              applications may not have any legal sanctity and are for general
              reference only, unless otherwise specified. However, every effort
              has been made to provide accurate and reliable information through
              these applications. Users are advised to verify the correctness of
              the facts published here from the concerned authorities. Neither
              National Informatics Centre nor Government of India and its allied
              establishments will not be responsible for the accuracy and
              correctness of the contents available in these applications.
            </p>
          </div>
        </div>

        {/* --- Section 2: User Information (Interactive Grid) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Collection Card */}
          <div className="bg-[#fff8f8] p-10 rounded-[3rem] border-l-[12px] border-[#e33d46] shadow-sm">
            <h3 className="text-[#e33d46] text-2xl font-black mb-6 uppercase tracking-tight italic">
              User Provided Info
            </h3>
            <p>The Applications may obtain the information you provide when you download and register the Application. Registration is optional. However, please keep in mind that you may not be able to use some of the features offered by an Application unless you register.</p>
           <p>When you register and use the Application, you generally provide </p>
            <ul className="space-y-4 text-slate-700 font-bold text-sm">
              <li className="flex gap-3">
                <span className="text-red-500">●</span> Name, Age, Mobile
                Number, Blood Group
              </li>
              <li className="flex gap-3">
                <span className="text-red-500">●</span> Screening
                (POC/Solubility) Test Details
              </li>
              <li className="flex gap-3">
                <span className="text-red-500">●</span> Confirmatory
                (HPLC/Electrophoresis) Details
              </li>
              <li className="flex gap-3">
                <span className="text-red-500">●</span> Aadhaar/ABHA ID
                Information
              </li>
            </ul>
          </div>

          {/* Security Card */}
          <div className="bg-[#0f172a] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-orange-400 text-2xl font-black mb-6 uppercase tracking-tight italic">
                Security Safeguards
              </h3>
              <p className="text-slate-300 font-medium text-sm leading-relaxed mb-6">
                We provide physical, electronic, and procedural safeguards to
                protect information we process and maintain. We limit access to
                authorized employees and contractors who need to know that
                information.
              </p>
              <div className="inline-flex px-4 py-2 bg-white/10 rounded-xl border border-white/20 text-[10px] font-black uppercase tracking-widest">
                Protected Data Storage
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl group-hover:bg-red-600/20 transition-all"></div>
          </div>
        </div>

        {/* --- Section 3: Data Retention & Disclosure (Detailed) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <div className="text-3xl mb-4">⌛</div>
            <h4 className="font-black uppercase text-xs tracking-widest text-slate-800 mb-4">
              Data Retention
            </h4>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              We will retain User provided data for as long as you use the
              Application and for a reasonable time thereafter.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <div className="text-3xl mb-4">⚖️</div>
            <h4 className="font-black uppercase text-xs tracking-widest text-slate-800 mb-4">
              Legal Disclosure
            </h4>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Disclosed as required by law, to protect rights/safety, or with
              trusted service providers.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <div className="text-3xl mb-4">📲</div>
            <h4 className="font-black uppercase text-xs tracking-widest text-slate-800 mb-4">
              Stopping Collection
            </h4>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              You can stop all collection of information easily by uninstalling
              the Application.
            </p>
          </div>
        </div>

        {/* --- Consent Section (Action Area) --- */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 p-12 rounded-[3rem] text-center text-white relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-2xl font-black uppercase italic mb-4">
              Your Consent
            </h3>
            <p className="text-slate-400 font-medium max-w-2xl mx-auto mb-8 text-sm">
              By using the Application, you are consenting to our processing of
              your information as set forth in this Privacy Policy now and as
              amended by us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-2 bg-orange-500 text-white font-black text-[10px] uppercase tracking-widest rounded-full shadow-lg">
                I Agree
              </span>
              <span className="px-6 py-2 bg-white/10 text-white border border-white/20 font-black text-[10px] uppercase tracking-widest rounded-full">
                Updated: Jan 2026
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* --- Mission Footer --- */}
      <footer className="mt-20 py-16 bg-white border-t border-slate-100 flex flex-col items-center">
        <div className="flex items-center gap-6">
          <div className="h-16 w-16 bg-gradient-to-br from-[#e33d46] to-[#ff7043] rounded-[2rem] flex items-center justify-center font-black text-white text-2xl shadow-xl italic">
            2047
          </div>
          <div className="text-left">
            <p className="text-[#e33d46] font-black uppercase tracking-widest text-[10px]">
              National Elimination Mission
            </p>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">
              Ministry of Health & Family Welfare
            </p>
          </div>
        </div>
      </footer>

      <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 pb-20 overflow-x-hidden">
        {/* --- Section 1: Dynamic Header (Red-Orange Theme) --- */}

        <main className="max-w-6xl w-full mx-auto p-6 md:p-12 -mt-12 relative z-20">
          {/* --- Section 2: Introduction Card --- */}
          <div className="bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-12 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1.5 w-12 bg-red-600 rounded-full"></div>
              <h2 className="text-xl font-black uppercase tracking-widest text-slate-800 italic">
                Governing Use
              </h2>
            </div>
            <div className="space-y-6 text-slate-500 font-medium leading-relaxed text-justify text-sm">
              <p>
                This privacy policy governs your use of the software
                applications (“Applications”) for mobile devices that was hosted
                at NIC e-Gov Mobile App Store in Google Play. The Applications
                mainly provide eGovernance Services delivery and intends to
                provide better citizen services by the government.
              </p>
              <div className="bg-slate-50 p-6 rounded-[2rem] border-l-4 border-orange-400 italic">
                The contents published on these Applications were provided by
                the concerned Ministries/Departments of Government of India or
                the allied government establishment. Users are advised to verify
                the correctness of the facts published here from the concerned
                authorities.
              </div>
            </div>
          </div>

          {/* --- Section 3: Data Collection (Grid Layout) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* User Provided Information Card */}
            <div className="bg-[#fff8f8] p-10 rounded-[3rem] border-l-[12px] border-[#e33d46] shadow-sm flex flex-col h-full">
              <h3 className="text-[#e33d46] text-xl font-black mb-6 uppercase tracking-tight italic">
                User Provided Information
              </h3>
              <div className="space-y-4 text-slate-700 font-bold text-xs flex-grow">
                <p className="opacity-70 font-medium leading-relaxed">
                  The Applications may obtain the information you provide when
                  you download and register.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-red-500">●</span> (a) Name, age,
                    mobile number, blood group, gender.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500">●</span> (b) Screening test
                    (POC or Solubility Test) details.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500">●</span> (c) Confirmatory
                    Test (HPLC/Electrophoresis) Details.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500">●</span> (d) Aadhaar number
                    for ABHA ID creation.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500">●</span> (e) ABHA ID may be
                    required and saved.
                  </li>
                </ul>
              </div>
            </div>

            {/* Security & Access Card */}
            <div className="bg-[#0f172a] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group h-full">
              <div className="relative z-10">
                <h3 className="text-orange-400 text-xl font-black mb-6 uppercase tracking-tight italic">
                  Security & Safeguards
                </h3>
                <p className="text-slate-300 font-medium text-xs leading-relaxed mb-6">
                  We are concerned about safeguarding the confidentiality of
                  your information. We provide physical, electronic, and
                  procedural safeguards to protect information we process and
                  maintain. Access is limited to authorized employees and
                  contractors.
                </p>
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-orange-200">
                  Unauthorized access is strictly limited
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl group-hover:bg-red-600/20 transition-all duration-700"></div>
            </div>
          </div>

          {/* --- Section 4: Policy Details (Bento Grid Style) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Disclosure */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 font-bold">
                  ⚖️
                </div>
                <h4 className="font-black uppercase text-[10px] tracking-widest text-slate-800 mb-3">
                  Disclosure
                </h4>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  As required by law, such as to comply with a subpoena, or to
                  protect our rights and safety.
                </p>
              </div>
            </div>

            {/* Retention */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4 font-bold">
                  ⌛
                </div>
                <h4 className="font-black uppercase text-[10px] tracking-widest text-slate-800 mb-3">
                  Data Retention
                </h4>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  We retain user provided data for as long as you use the
                  application and for a reasonable time thereafter.
                </p>
              </div>
            </div>

            {/* Uninstall */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4 font-bold">
                  📲
                </div>
                <h4 className="font-black uppercase text-[10px] tracking-widest text-slate-800 mb-3">
                  Opt-Out
                </h4>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  Stop all collection easily by uninstalling the application via
                  standard processes.
                </p>
              </div>
            </div>
          </div>

          {/* --- Section 5: Misuse & Consent Area --- */}
          <div className="bg-slate-900 rounded-[3.5rem] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">
                  Your Consent & Responsibilities
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  By using the Application, you are consenting to our processing
                  of your information as set forth in this Privacy Policy now
                  and as amended by us.
                </p>
                <div className="flex gap-4">
                  <span className="px-5 py-2 bg-[#e33d46] rounded-full text-[9px] font-black uppercase tracking-widest">
                    Targeted Use Only
                  </span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 space-y-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">
                    Misuse Protection
                  </p>
                </div>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">
                  Misuse by non-targeted users should be prevented by the owner
                  of the mobile device.
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                    Policy Updated regularly
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-[#ff7043]/10 rounded-full blur-3xl"></div>
          </div>
        </main>

        {/* --- Section 6: Mission Footer --- */}
        <footer className="py-16 bg-white border-t border-slate-100 flex flex-col items-center">
          <div className="bg-slate-50 border border-slate-200 p-2 rounded-[3rem] flex items-center gap-6 pr-10 shadow-inner group hover:border-red-200 transition-colors">
            <div className="h-16 w-16 bg-gradient-to-br from-[#e33d46] to-[#ff7043] rounded-[2.5rem] flex items-center justify-center font-black text-white text-2xl italic shadow-lg group-hover:rotate-12 transition-transform">
              2047
            </div>
            <div className="flex flex-col">
              <span className="text-[#e33d46] font-black uppercase tracking-widest text-[10px]">
                National Elimination Mission
              </span>
              <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                Ministry of Health & Family Welfare
              </span>
            </div>
          </div>
        </footer>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 bg-white rounded-[4rem] shadow-sm border border-slate-100">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">
          Holistic Management & <br />
          <span className="text-red-600 italic">Continuum of Care</span>
        </h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full"></div>
      </div>

      <div className="relative">
        {/* Vertical Line for Desktop */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2"></div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Content Side */}
              <div className="lg:w-1/2 w-full text-center lg:text-left px-4">
                <div className={`inline-block px-4 py-1 rounded-full bg-slate-50 border-l-4 ${step.color} text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4`}>
                  Step 0{index + 1}
                </div>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-3 italic">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium max-w-md mx-auto lg:mx-0">
                  {step.desc}
                </p>
              </div>

              {/* Icon / Center Side */}
              <div className="relative z-10 flex items-center justify-center h-16 w-16 bg-white border-4 border-slate-50 rounded-3xl shadow-xl text-2xl group hover:scale-110 transition-transform">
                <span className="group-hover:animate-pulse">{step.icon}</span>
              </div>

              {/* Empty Side for Desktop Balance */}
              <div className="hidden lg:block lg:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
      
      

      <div className="mt-20 p-8 bg-slate-50 rounded-[3rem] text-center border border-dashed border-slate-200">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.4em]">
          Integrated Patient Support Framework
        </p>
      </div>
    </div>

    <div className="bg-[#fcfcfc] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1.5 w-12 bg-red-600 rounded-full"></div>
            <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.4em]">Section 01</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-6">
            Primary <span className="text-red-600 italic">Prevention</span>
          </h2>
          <div className="h-px w-full bg-slate-200"></div>
        </div>

        {/* --- 9-Point Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {preventionPoints.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              {/* Background ID Watermark */}
              <div className="absolute top-6 right-8 text-5xl font-black text-slate-50 italic group-hover:text-red-50 transition-colors select-none">
                {item.id}
              </div>

              <div className="flex flex-col h-full">
                <div className="text-[9px] font-black text-red-500 uppercase tracking-widest mb-4 bg-red-50 self-start px-3 py-1 rounded-full">
                  {item.level}
                </div>
                
                <div className="text-3xl mb-6">{item.icon}</div>
                
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 group-hover:text-red-600 transition-colors leading-none">
                  {item.title}
                </h3>
                
                <p className="text-slate-500 text-[13px] font-medium leading-relaxed">
                  {item.desc}
                </p>

                {/* Bottom Border Accent */}
                <div className="mt-8 h-1 w-12 bg-slate-100 group-hover:bg-red-600 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Call to Action Footer --- */}
        <div className="mt-20 bg-slate-900 p-10 md:p-14 rounded-[4rem] text-center shadow-2xl">
          <p className="text-white text-lg font-bold uppercase tracking-widest italic mb-6">
            "Promoting Health Through Awareness and Early Detection"
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <button className="px-8 py-3 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-white hover:text-red-600 transition-all">Download Awareness Material</button>
             <button className="px-8 py-3 bg-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-xl border border-white/20 hover:bg-white/20 transition-all">SCD Support Corner</button>
          </div>
        </div>

      </div>
    </div>

    <div className="bg-[#f8fafc] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Phase 1: Vision & Mission (Bento Style) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Vision Card - Taking more space for impact */}
          <div className="lg:col-span-8 bg-gradient-to-br from-[#e33d46] to-[#ff7043] p-12 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
            <h2 className="text-xs font-black uppercase tracking-[0.5em] mb-8 opacity-70">Our Vision 2047</h2>
            <p className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tighter italic drop-shadow-lg">
              "Eliminate sickle cell disease as a public health problem in India before 2047."
            </p>
            <div className="mt-12 flex flex-wrap gap-4 opacity-80 text-[10px] font-bold uppercase tracking-widest">
              <span>Awareness</span> • <span>Mass Screening</span> • <span>Early Identification</span>
            </div>
          </div>

          {/* Mission Card - Sidebar style */}
          <div className="lg:col-span-4 bg-white p-12 rounded-[4rem] border border-slate-200 shadow-sm flex flex-col justify-center">
            <h2 className="text-xs font-black text-red-600 uppercase tracking-[0.5em] mb-6">The Mission</h2>
            <p className="text-slate-600 text-lg font-bold leading-relaxed italic">
              Improving care for a better future through multi-faced coordinated screening and awareness strategies.
            </p>
          </div>
        </div>

        {/* --- Phase 2: Overall Aim (Highlight Bar) --- */}
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-14 text-center mb-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <p className="relative z-10 text-white text-xl md:text-2xl font-medium leading-relaxed max-w-5xl mx-auto italic opacity-90">
            "Enable access to affordable and quality health care to all SCD patients and lower prevalence through awareness and screening interventions."
          </p>
        </div>

        {/* --- Phase 3: The Strategy Pillars (Card Grid) --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-4 italic">
            Three Strategy <span className="text-red-600">Pillars</span>
          </h2>
          <div className="h-1.5 w-20 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="h-16 w-16 bg-slate-50 text-3xl rounded-2xl flex items-center justify-center mb-8 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">{pillar.title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* --- Phase 4: Objectives (Checklist Design) --- */}
        <div className="bg-white rounded-[4rem] border border-slate-200 p-12 md:p-20 overflow-hidden relative">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9] mb-6 italic">
                Mission <br /> <span className="text-red-600">Objectives</span>
              </h2>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">Attaining holistic healthcare</p>
            </div>
            <div className="lg:w-1/2 space-y-6">
              {[
                "Provision of affordable and accessible care",
                "Ensure quality of care for SCD patients",
                "Reduce the prevalence of SCD"
              ].map((obj, idx) => (
                <div key={idx} className="flex items-center gap-6 p-6 bg-slate-50 rounded-3xl border border-transparent hover:border-red-100 transition-all group">
                  <span className="h-10 w-10 flex-shrink-0 bg-white shadow-sm rounded-full flex items-center justify-center text-red-600 font-black group-hover:bg-red-600 group-hover:text-white transition-all">
                    {idx + 1}
                  </span>
                  <span className="text-slate-700 font-bold uppercase text-[13px] tracking-tight">{obj}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
    
    </div>
  );
};

export default PrivacyPolicy;
