import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("prevention");

  

  const Section = ({ title, children }) => (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
          {title}
        </h2>
        <div className="text-slate-700 leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </section>
  );



  const [openIndex, setOpenIndex] = useState(0);

  const accordionData = [
    {
      id: "01",
      title: "Awareness & Counselling",
      content: [
        {
          label: "Core Strategy",
          text: "Individuals with known or detected SCDs are encouraged to register on the Sickle Cell Disease Support Corner to bridge the gap between patients and health care services.",
        },        
      ],
    },
    {
      id: "02",
      title: "SCD Support Corner",
      content: [
        {
          label: "Individual",
          text: "At INDIVIDUAL/Household level- Individuals with known or detected SCDs would also be encouraged to register on Sickle Cell Disease Support Corner, to bridge the gap between patients and health care services in tribal areas.",
        },
      ],
    },
    {
      id: "03",
      title: "Local Platforms",
      content: [
        {
          label: "Community",
          text: "Platforms such as monthly Village Health Sanitation and Nutrition Committee (VHSNC)/ Mahila Arogya Samiti (MAS) meetings, Village/Urban Health Sanitation and Nutrition Days (V/UHSND) meetings at Anganwadis, Jan Arogya Samitis in AB-HWC, Arogya Sabha, Self-Help Groups (SHG), youth clubs, parent-teachers meetings in schools, etc., shall be leveraged to sensitize people on the importance of sickle cell disease and screening service available at AB-HWCs.",
        },       
      ],
    },
     {
      id: "04",
      title: "Patient Support Groups",
      content: [
        {
          label: "Family Support",
          text: "Patients Support Groups (PSG)-facilitated by the MPWs/ASHA or other frontline workers to improve treatment compliance and engaging not only those with the disease condition but also family members or care givers.",
        },       
      ],
    },
    {
      id: "05",
      title: "Pre-marital Screening",
      content: [
        {
          label: "Genetics",
          text: "Mechanisms to be established at community level for pre-marital and pre-conception screening backed by genetic counselling services. Also, at the level of community, for all individuals detected or known as carrier or patients, extended family screening is to be ensured.",
        },       
      ],
    },
     {
      id: "06",
      title: "School & College Outreach",
      content: [
        {
          label: "Education",
          text: "At Schools: In all blocks with sickle cell disease, Community Health Officers (CHO) at Sub Health Centre – Health and Wellness Centre (SHC-HWC) and Medical Officer at Primary Health Centre – Health and Wellness Centre (PHC-HWC) shall conduct talk sessions and counselling at all schools & colleges including ‘schools tribal residential schools, tribal hostels and Ekalvya Model Residential Schools, for early detection of SCD among school going children.AB-Health and Wellness ambassadors would also be trained information in form of interesting activities which would be either classroom based or as an outreach. o Eklavya Model Residential School (EMRS), one of the flagship initiatives of GoI, would be utilized as a platform to undertake and ensure all SCD related interventions at this level.",
        },       
      ],
    },
     {
      id: "07",
      title: "Professional Guidance",
      content: [
        {
          label: "Health Facility",
          text: "At Schools: In all blocks with sickle cell disease, Community Health Officers (CHO) at Sub Health Centre – Health and Wellness Centre (SHC-HWC) and Medical Officer at Primary Health Centre – Health and Wellness Centre (PHC-HWC) shall conduct talk sessions and counselling at all schools & colleges including ‘schools tribal residential schools, tribal hostels and Ekalvya Model Residential Schools, for early detection of SCD among school going children.AB-Health and Wellness ambassadors would also be trained information in form of interesting activities which would be either classroom based or as an outreach. o Eklavya Model Residential School (EMRS), one of the flagship initiatives of GoI, would be utilized as a platform to undertake and ensure all SCD related interventions at this level.",
        },       
      ],
    },
    {
      id: "08",
      title: "IEC & Mass Media",
      content: [
        {
          label: "National",
          text: "At Schools: In all blocks with sickle cell disease, Community Health Officers (CHO) at Sub Health Centre – Health and Wellness Centre (SHC-HWC) and Medical Officer at Primary Health Centre – Health and Wellness Centre (PHC-HWC) shall conduct talk sessions and counselling at all schools & colleges including ‘schools tribal residential schools, tribal hostels and Ekalvya Model Residential Schools, for early detection of SCD among school going children.AB-Health and Wellness ambassadors would also be trained information in form of interesting activities which would be either classroom based or as an outreach. o Eklavya Model Residential School (EMRS), one of the flagship initiatives of GoI, would be utilized as a platform to undertake and ensure all SCD related interventions at this level.",
        },       
      ],
    },
    {
      id: "09",
      title: "CBO & NGO Engagement",
      content: [
        {
          label: "Partnerships",
          text: "At Schools: In all blocks with sickle cell disease, Community Health Officers (CHO) at Sub Health Centre – Health and Wellness Centre (SHC-HWC) and Medical Officer at Primary Health Centre – Health and Wellness Centre (PHC-HWC) shall conduct talk sessions and counselling at all schools & colleges including ‘schools tribal residential schools, tribal hostels and Ekalvya Model Residential Schools, for early detection of SCD among school going children.AB-Health and Wellness ambassadors would also be trained information in form of interesting activities which would be either classroom based or as an outreach. o Eklavya Model Residential School (EMRS), one of the flagship initiatives of GoI, would be utilized as a platform to undertake and ensure all SCD related interventions at this level.",
        },       
      ],
    },
    
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const objectives = [
    {
      id: "01",
      title: "Universal Accessibility",
      desc: "Provision of affordable and accessible care to all SCD patients.",
      icon: "🌍",
      gradient: "from-red-500 to-orange-500",
    },
    {
      id: "02",
      title: "Quality Assurance",
      desc: "To ensure quality of care for SCD patients through standardized protocols.",
      icon: "💎",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      id: "03",
      title: "Prevalence Reduction",
      desc: "To reduce the prevalence of SCD through mass screening and awareness.",
      icon: "📉",
      gradient: "from-red-600 to-red-400",
    },
  ];

  return (
    <div className="bg-slate-50 text-slate-900 selection:bg-red-100">
      <div className="relative w-full bg-gradient-to-r from-[#e33d46] via-[#f05053] to-[#ff7043] py-20 overflow-hidden border-b-[12px] border-white/20">
        <div className="absolute inset-0 opacity-10 bg-[url('images/cubes.png')] bg-repeat"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6">
            ABOUT{" "}
            <span className="italic opacity-90 text-white/80">THE MISSION</span>
          </h1>
          <p className="max-w-3xl mx-auto text-white/90 text-sm md:text-lg font-medium italic tracking-wide drop-shadow-sm">
            "Eliminate sickle cell disease as a public health problem in India
            before 2047"
          </p>
        </div>
      </div>

      <section className="bg-[#fcfcfc] py-20 px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* --- Left Side: Smaller & Elegant Image Section --- */}
            <div className="w-full lg:w-[40%] relative group">
              {/* Soft Background Glow */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-red-100 rounded-full blur-[100px] opacity-40"></div>

              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-white transition-all duration-700 group-hover:shadow-red-100/50">
                <img
                  src="images/aboutus.png"
                  alt="Sickle Cell Elimination Mission 2047"
                  className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Compact Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-xl p-5 rounded-2xl border border-white/20 shadow-xl">
                  <div className="flex justify-around items-center divide-x divide-slate-200">
                    <div className="px-4 text-center">
                      <p className="text-2xl font-black text-red-600 leading-none">
                        8.6%
                      </p>
                      <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                        Tribal Pop.
                      </p>
                    </div>
                    <div className="px-4 text-center">
                      <p className="text-2xl font-black text-slate-900 leading-none">
                        10
                      </p>
                      <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                        Priority Prob.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Dot Pattern */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-[radial-gradient(#e33d46_1.5px,transparent_1.5px)] [background-size:10px_10px] opacity-30 -z-10"></div>
            </div>

            {/* --- Right Side: Expanded Narrative Section --- */}
            <div className="w-full lg:w-[60%] space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-1 w-10 bg-red-600 rounded-full"></div>
                <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.4em]">
                  Context & History
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.95]">
                Sickle Cell  <span className="text-red-600"> Disease</span>
              </h2>

              <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                <p className="text-justify">
                  Sickle cell disease is a genetic blood disease which affects
                  the whole life of affected patient. It is more common in the
                  tribal population of India, but occurs in non tribals too. It
                  not only causes anemia but also pain crises, reduced growth,
                  and affects many organs like lungs, heart, kidney, eyes, bones
                  and the brain.
                </p>

                <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border-l-4 border-red-600 shadow-sm relative overflow-hidden group/quote">
                  <div className="absolute -right-4 -bottom-4 text-9xl font-black text-slate-100 -z-0 group-hover/quote:text-red-50 transition-colors">
                    “
                  </div>
                  <p className="relative z-10 text-slate-700 italic font-semibold leading-relaxed">
                    "India has the largest density of tribal population,
                    globally. As per Census 2011, India has an 8.6% tribal
                    population which is 67.8 million across the Indian states."
                  </p>
                </div>

                <p className="text-justify">
                  The MoHFW tribal health expert committee report has listed sickle cell disease as one of the 10 special problems in tribal heath that affect the tribal people disproportionately, thus making this an important intervention. Ministry of health under NHM initiated the work on hemoglobinopathies (Thalassemia & Sickle Cell Disease) in 2016 wherein comprehensive guidelines on prevention and management of heamoglobinopathies were released and provision of funds towards screening and management of Sickle cell disease were made. Thereafter, as per the State’s proposals, support is continuously being provided. However, the pandemic reduced the efforts towards prevention through screening and IEC activities. Now, it is felt that a separate scheme/Mission to detect, management, prevention and awareness needs to be initiated.
                </p>
{/* 
                <button className="flex items-center gap-4 group/btn">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-900 group-hover/btn:text-red-600 transition-colors">
                    Read Full Mission History
                  </span>
                  <div className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center group-hover/btn:bg-red-600 group-hover/btn:text-white transition-all">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-[#fcfcfc] py-24 px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative group">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-red-100 rounded-full blur-[100px] opacity-60"></div>
              <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white transition-transform duration-700 group-hover:scale-[1.02]">
                <img
                  src="images/aboutus.png"
                  alt="Sickle Cell Elimination Mission 2047"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20">
                  <div className="grid grid-cols-2 gap-4 divide-x divide-slate-200">
                    <div className="text-center">
                      <p className="text-3xl font-black text-red-600 leading-none mb-1">
                        8.6%
                      </p>
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                        Tribal Population
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-black text-slate-900 leading-none mb-1">
                        10
                      </p>
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                        Priority Problems
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-[radial-gradient(#e33d46_2px,transparent_2px)] [background-size:12px_12px] opacity-20"></div>
            </div>

            
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-12 bg-red-600 rounded-full"></div>
                <span className="text-xs font-black text-red-600 uppercase tracking-[0.4em]">
                  Context & History
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">
                Sickle Cell Disease
              </h2>
              <div className="space-y-6 text-slate-600 text-base leading-relaxed text-justify">
                <p>
                  Sickle cell disease is a genetic blood disease which affects
                  the whole life of affected patient. It is more common in the
                  tribal population of India, but occurs in non tribals too. It
                  not only causes anemia but also pain crises, reduced growth,
                  and affects many organs like lungs, heart, kidney, eyes, bones
                  and the brain.
                </p>
                <div className="bg-slate-100 p-8 rounded-4xl border-l-8 border-red-600 shadow-inner relative overflow-hidden">
                  <p className="relative z-10 text-slate-700 italic">
                    "India has the largest density of tribal population,
                    globally. As per Census 2011, India has an 8.6% tribal
                    population which is 67.8 million across the Indian states."
                  </p>
                </div>
                <p>
                  The MoHFW tribal health expert committee report has listed
                  sickle cell disease as one of the 10 special problems in
                  tribal heath that affect the tribal people disproportionately,
                  thus making this an important intervention. Ministry of health
                  under NHM initiated the work on hemoglobinopathies in 2016
                  wherein comprehensive guidelines were released.
                </p>
                <p>
                  Thereafter, as per the State’s proposals, support is
                  continuously being provided. However, the pandemic reduced the
                  efforts towards prevention through screening and IEC
                  activities. Now, it is felt that a separate scheme/Mission to
                  detect, management, prevention and awareness needs to be
                  initiated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-black uppercase italic mb-8">
                Beyond Anemia: <br />
                <span className="text-red-600">Multi-Organ Effect</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Lungs", "Heart", "Kidney", "Eyes", "Bones", "Brain"].map(
                  (item) => (
                    <div
                      key={item}
                      className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center font-bold text-sm hover:bg-red-600 transition-colors cursor-default uppercase tracking-widest"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-red-600 to-orange-500 p-10 rounded-[3rem] shadow-2xl">
                <h3 className="text-2xl font-black uppercase italic mb-4">
                  Vision 2047
                </h3>
                <p className="leading-relaxed font-medium mb-6 opacity-90">
                  Eliminate sickle cell disease as a public health problem in
                  India before 2047 through mass screening, early
                  identification, and strengthening primary health care.
                </p>
                <div className="flex gap-4">
                  <div className="bg-white text-red-600 font-black px-6 py-2 rounded-xl text-sm uppercase">
                    7 Crore Screenings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#f8fafc] py-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-gradient-to-br from-[#e33d46] to-[#ff7043] p-12 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
              <h2 className="text-xl font-black uppercase tracking-[0.5em] mb-8 opacity-70">
                Our Vision 2047
              </h2>
              <p className="text-base">
                Eliminate sickle cell disease as a public health problem in
                India before 2047 there is need for increasing the awareness
                about the disease in the community, implementation of mass
                screening activities for early identification, building a strong
                network of diagnosis and linkages, implementing robust
                monitoring system, strengthening the existing primary health
                care mechanism to incorporate SCD related strategies, capacity
                building of primary, secondary and tertiary health care teams
                and building cost-effective intensive interventions at higher
                care facilities.
              </p>
              <div className="mt-12 flex flex-wrap gap-4 opacity-80 text-[10px] font-bold uppercase tracking-widest">
                <span>Awareness</span> • <span>Mass Screening</span> •{" "}
                <span>Early Identification</span>
              </div>
            </div>
            <div className="lg:col-span-4 bg-white p-12 rounded-[4rem] border border-slate-200 shadow-sm flex flex-col justify-center">
              <h2 className="text-xl font-black text-red-600 uppercase tracking-[0.5em] mb-6">
                The Mission
              </h2>
              <p className="text-slate-600 text-lg font-bold leading-relaxed italic">
                To improve care of all Sickle Cell Disease patients for their
                better future and to lower the prevalence of the disease through
                multi-faced coordinated approach towards screening and awareness
                strategies
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="w-full bg-slate-900 py-12 px-6 overflow-hidden relative group">
    
        <div className="absolute top-0 right-0 w-96 h-full bg-red-600/10 skew-x-[-20deg] translate-x-32 group-hover:translate-x-20 transition-transform duration-1000"></div>

        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
           
            <div className="lg:w-1/4 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter leading-none italic">
                Mission <br />
                <span className="text-red-500">Objectives</span>
              </h2>
              <div className="h-1 w-12 bg-red-500 mt-4 rounded-full"></div>
            </div>

            
            <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {[
                "Provision of affordable and accessible care to all SCD patients",
                "To ensure quality of care for SCD patients",
                "To reduce the prevalence of SCD",
              ].map((obj, idx) => (
                <div
                  key={idx}
                  className="relative flex items-center gap-5 p-5 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 hover:border-red-500/50 transition-all duration-300 group/item"
                >
                  
                  <span className="h-12 w-12 flex-shrink-0 bg-gradient-to-br from-red-600 to-orange-500 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg group-hover/item:scale-110 transition-transform">
                    0{idx + 1}
                  </span>

                  
                  <p className="text-white font-bold uppercase text-[11px] tracking-widest leading-tight">
                    {obj}
                  </p>

                  
                  <div className="absolute top-3 right-3 opacity-0 group-hover/item:opacity-100 transition-opacity">
                    <svg
                      className="h-4 w-4 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Mission Objectives */}

      <section className=" px-6 py-20 bg-white my-5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="w-full">
               <div className="flex items-center gap-3 mb-6">
        <div className="h-1.5 w-12 bg-red-600 rounded-full"></div>
        <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.4em]">Elimination Mission</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-none mb-8">
        Mission <span className="text-[#e33d46]">Objectives</span>
      </h2>
                         
              <p className="text-slate-500 font-medium mt-4 text-lg italic">
                The overall aim is to enable access to affordable and quality
                health care to all SCD patients, and to lower the prevalence
                through awareness, change of practices and screening
                interventions.
              </p>
            </div>
            <div className="h-1 w-24 bg-red-600 rounded-full hidden md:block mb-4"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {objectives.map((obj, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-[3rem] bg-slate-50 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-red-100 hover:-translate-y-3"
              >
                <div className="flex justify-between items-start mb-10">
                  <div
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${obj.gradient} flex items-center justify-center text-3xl shadow-lg transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}
                  >
                    {obj.icon}
                  </div>
                  <span className="text-5xl font-black text-slate-200 group-hover:text-red-500/10 transition-colors duration-500 italic">
                    {obj.id}
                  </span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter group-hover:text-[#e33d46] transition-colors">
                    {obj.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    {obj.desc}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r from-[#e33d46] to-[#ff7043] group-hover:w-full transition-all duration-700 rounded-full"></div>
              </div>
            ))}
          </div>
          <div className="w-full py-5">
            <p className="text-slate-600 font-medium mt-4 text-lg italic">These objectives would be attained through strategies spanning awareness generation, strengthening of screening and testing facilities, strengthening of laboratory services for diagnosis, facilitation of management & treatment, establishing linkages across level of care, inter sectoral convergence towards holistic approach and linkages with social security schemes/benefit packages. Strategy: The strategy emphasizes on THREE pillars:</p>
          </div>
          <div className="w-full mt-10">
            <h2 class="text-3xl font-black uppercase border-l-8 border-red-600 pl-4">
              Strategy :
              <span className="text-[#e33d46]"> The Three Pillars</span>
            </h2>
          </div>
          <ul className="space-y-6 pl-4 mt-5">           
            <li className="border-l-2 border-slate-100 pl-6">
              <span className="font-bold text-[#e33d46] block mb-2 uppercase text-sm tracking-widest">
                01. Health Promotion
              </span>
              <ul className="list-disc list-inside space-y-2 text-slate-600 font-medium">
                <li>Awareness generation & pre-marital genetic counselling</li>
              </ul>
            </li>           
            <li className="border-l-2 border-slate-100 pl-6">
              <span className="font-bold text-[#e33d46] block mb-2 uppercase text-sm tracking-widest">
                02. Prevention
              </span>
              <ul className="list-disc list-inside space-y-2 text-slate-600 font-medium">
                <li>Universal screening and early detection</li>
              </ul>
            </li>            
            <li className="border-l-2 border-slate-100 pl-6">
              <span className="font-bold text-[#e33d46] block mb-2 uppercase text-sm tracking-widest">
                03. Holistic Management & Continuum of Care
              </span>
              <ul className="space-y-3 mt-4 ml-2">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-slate-900 min-w-[20px]">
                    1.
                  </span>
                  <span className="text-slate-600">
                    Management of persons with sickle cell disease at primary,
                    secondary and tertiary health care levels; treatment
                    facilities at tertiary health care facilities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-slate-900 min-w-[20px]">
                    2.
                  </span>
                  <span className="text-slate-600">Patient support system</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-slate-900 min-w-[20px]">
                    3.
                  </span>
                  <span className="text-slate-600">Community adoption</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

     

      <section className="bg-[#fbf5f6] py-20 px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* --- Left Side: High-Impact Metrics --- */}
            <div className="lg:w-1/3 space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-12 bg-red-600 rounded-full"></div>
                <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.4em]">
                  Target Audience
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none italic">
                Beneficiaries & <br />{" "}
                <span className="text-red-600">Mission Reach</span>
              </h2>

              {/* Big Goal Card */}
              <div className="bg-slate-900 p-8 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <p className="text-[10px] font-bold text-red-400 uppercase tracking-[0.3em] mb-2">
                  3.5 Year Goal
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black italic tracking-tighter text-white">
                    7 Cr
                  </span>
                  <span className="text-sm font-bold text-slate-400 uppercase">
                    People
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-4 leading-relaxed font-medium">
                  Universal screening, counselling, and care for people with SCD
                  in mission mode.
                </p>
              </div>

              {/* Integration Note */}
              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-lg">
                  ⚙️
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-900 uppercase">
                    Integrated Strategy
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Leveraging RBSK & PMSMA platforms to minimize duplication.
                  </p>
                </div>
              </div>
            </div>

            {/* --- Right Side: Phase-wise States Grid --- */}
            <div className="lg:w-2/3 w-full">
              <div className="bg-[#fcfcfc] border border-slate-100 p-8 md:p-12 rounded-[4rem] shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight italic">
                      Initial Phase States
                    </h3>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
                      17 High Prevalence States
                    </p>
                  </div>
                  <div className="px-4 py-2 bg-red-50 text-red-600 text-[9px] font-black uppercase tracking-widest rounded-full">
                    Phase-wise Expansion
                  </div>
                </div>

                {/* States Chips Grid */}
                <div className="flex flex-wrap gap-3">
                  {[
                    "Gujarat",
                    "Maharashtra",
                    "Rajasthan",
                    "Madhya Pradesh",
                    "Jharkhand",
                    "Chhattisgarh",
                    "West Bengal",
                    "Odisha",
                    "Tamil Nadu",
                    "Telangana",
                    "Andhra Pradesh",
                    "Karnataka",
                    "Assam",
                    "Uttar Pradesh",
                    "Kerala",
                    "Bihar",
                    "Uttarakhand",
                  ].map((state, i) => (
                    <div
                      key={i}
                      className="group flex items-center gap-3 px-5 py-3 bg-white border border-slate-200 rounded-2xl hover:border-red-600 hover:shadow-md transition-all cursor-default"
                    >
                      <span className="text-[10px] font-black text-slate-300 group-hover:text-red-500 transition-colors">
                        {i + 1 < 10 ? `0${i + 1}` : i + 1}
                      </span>
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-tight group-hover:text-slate-900">
                        {state}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Population Scope */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-100 pt-10">
                  <div className="flex gap-4">
                    <div className="h-2 w-2 bg-red-600 rounded-full mt-1.5"></div>
                    <p className="text-[11px] font-bold text-slate-500 leading-relaxed uppercase">
                      <span className="text-slate-900">Priority:</span> Entire
                      population from 0 to 18 years.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-2 w-2 bg-slate-900 rounded-full mt-1.5"></div>
                    <p className="text-[11px] font-bold text-slate-500 leading-relaxed uppercase">
                      <span className="text-slate-900">Incremental:</span>{" "}
                      Including entire population up to 40 years.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] w-full">
        <div className="container mx-auto px-6 pt-20 mb-16 text-center md:text-left ">
           <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase italic">
            Awareness & <span className="text-[#e33d46]">Counselling</span>
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-[#e33d46] to-[#ff7043] mt-3 rounded-full"></div>
        </div>


             <div className="space-y-5">
          {accordionData.map((item, index) => (
            <div
              key={item.id}
              className={`border rounded-xl overflow-hidden transition-all duration-500 shadow ${
                openIndex === index
                  ? "border-red-100 shadow-2xl shadow-red-50"
                  : "border-slate-100"
              }`}
            >
              {/* Header */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex object-contain items-center gap-6 p-5 md:p-5 bg-white text-left group"
              >
               
                <div
                  className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl text-white font-black italic transition-all duration-500 ${
                    openIndex === index ? "bg-slate-900" : "bg-[#e33d46]"
                  }`}
                >
                  {item.id}
                </div>

                <span
                  className={`flex-grow text-lg md:text-xl font-black uppercase tracking-tight transition-colors duration-300 ${
                    openIndex === index ? "text-[#e33d46]" : "text-slate-800"
                  }`}
                >
                  {item.title}
                </span>

                {/* Plus/Minus Icon Box */}
                <div
                  className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-500 ${
                    openIndex === index
                      ? "bg-[#e33d46] rotate-90 shadow-lg shadow-red-200"
                      : "bg-slate-900"
                  }`}
                >
                  {openIndex === index ? (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M18 12H6"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M12 6v12M6 12h12"
                      />
                    </svg>
                  )}
                </div>
              </button>

              {/* Content */}
              <div
                className={`transition-all duration-700 ease-in-out ${
                  openIndex === index
                    ? "max-h-[1200px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-8 md:p-10 pt-0 space-y-8 bg-white">
                  <div className="h-px w-full bg-slate-50 mb-8"></div>
                  {item.content.map((sub, idx) => (
                    <div
                      key={idx}
                      className="relative pl-6 border-l-2 border-slate-100 hover:border-[#e33d46] transition-colors"
                    >
                      <h4 className="text-[10px] font-black text-[#ff7043] uppercase tracking-[0.2em] mb-2">
                        {sub.label}
                      </h4>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium italic">
                        {sub.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        </div>
      </section>

      

      {/* CTA */}
      {/* <section className="bg-[#0B1324] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Towards a Sickle Cell Free India
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            Early screening and awareness can save lives and future generations.
          </p>
          <button className="bg-[#D71920] px-8 py-3 rounded-lg font-semibold hover:bg-[#B11217]">
            Get Screened
          </button>
        </div>
      </section> */}

     

      {/* --- Section 1: Hero Header --- */}
      {/* <section className="py-20 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="text-red-500 font-bold tracking-[0.3em] uppercase text-xs">
            National Health Mission
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-4 mb-6 leading-tight uppercase">
            Sickle Cell Anaemia <br /> Elimination Mission
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 font-medium">
            Affordable and quality health care to all SCD patients, lowering
            prevalence through awareness and screening.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-red-600 px-6 py-2 rounded-full text-sm font-black shadow-lg shadow-red-900/20 uppercase tracking-widest">
              Vision 2047
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-sm font-black border border-white/10 uppercase tracking-widest text-orange-400">
              7 Crore Screenings
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[url('images/cubes.png')]"></div>
      </section> */}

     
    </div>
  );
};

export default About;
