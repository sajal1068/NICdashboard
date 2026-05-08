import React from "react";
import Banner from "../layouts/Banner.jsx";
import { useTranslation ,Trans } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {
  const totalDownloads = 26843;

  const cards = [
    {
      id: 1,
      title: "Training Materials",
      path: "/training-materials",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      color: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      id: 2,
      title: "Sickle Cell Info",
      path: "/sickle-cell-info",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "text-red-600 bg-red-50 border-red-100",
    },
    {
      id: 3,
      title: "Genetic Counselling",
      path: "/genetic-counselling",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      id: 4,
      title: "Mission Dashboard",
      path: "/dashboard",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      color: "text-orange-600 bg-orange-50 border-orange-100",
    },
  ];

  const { t } = useTranslation();
  const ministers = [
    {
      name: "Shri Jagat Prakash Nadda",
      designation: "Hon’ble Cabinet Minister",
      department: "(Health and Family Welfare)",
      image: "images/HFM-01.jpg",
      link: "https://mansukhmandaviya.in/the-man/",
      isCabinet: true,
    },
    {
      name: "Shri Prataprao Jadhav",
      designation: "Hon’ble Minister of State",
      department: "(Ministry of AYUSH & Health and Family Welfare)",
      image: "images/moshm-01.jpg",
      link: "https://sansad.in/ls/members/biography/31?from=members",
    },
    {
      name: "Smt. Anupriya Patel",
      designation: "Hon’ble Minister of State",
      department: "(Health and Family Welfare)",
      image: "images/mos-01.jpg",
      link: "https://sansad.in/ls/members/biography/5201?from=members",
    },
  ];

  const features = [
    {
      title: "Training Materials",
      description:
        "Access official clinical protocols and training modules for medical staff.",
      accentColor: "bg-blue-600",
      imagePath: "images/training.svg",
    },
    {
      title: "Sickle Cell Disease Info",
      description:
        "Detailed information about Sickle Cell symptoms, types, and daily care.",
      accentColor: "bg-red-600",
      imagePath: "images/blood-analysis.svg",
    },
    {
      title: "Genetic Counselling",
      description:
        "Connect with genetic counselors to understand hereditary risks.",
      accentColor: "bg-orange-500",
      imagePath: "images/genetic-counseling.svg",
    },
    {
      title: "Dashboard",
      description:
        "Check the latest screening statistics across districts and states.",
      accentColor: "bg-indigo-600",
      imagePath: "images/dashboard.svg",
    },
  ];

  const AboutAndLeadership = () => {
    const ministers = [
      {
        name: "Shri Jagat Prakash Nadda",
        designation: "Hon’ble Cabinet Minister",
        department: "(Health and Family Welfare)",
        image: "images/HFM-01.jpg",
        isCabinet: true,
      },
      {
        name: "Shri Prataprao Jadhav",
        designation: "Hon’ble Minister of State",
        department: "(Ministry of AYUSH & Health and Family Welfare)",
        image: "images/moshm-01.jpg",
      },
      {
        name: "Smt. Anupriya Patel",
        designation: "Hon’ble Minister of State",
        department: "(Health and Family Welfare)",
        image: "images/mos-01.jpg",
      },
    ];
  };

  return (
    <main className="bg-slate-50 min-h-screen">
      <Banner />

      <section className="py-20">
        <div className="container mx-auto ">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* LEFT SECTION (1/3): About Sickle Cell Disease */}
            <div className="lg:w-2/3 space-y-6">
              <div className="lg:col-span-7 bg-white py-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
                <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-bold mb-6 border border-red-100">
                  {t("elimination_mission")}
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                  {t("about")}{" "}
                  <span class="text-red-600"> {t("sickle_cell_disease")} </span>
                </h1>
                <div className="h-1.5 w-20 bg-red-600 rounded-full mb-5"></div>
                <p className="text-gray-600 text-lg leading-relaxed mb-5">
                  {t("home_about")}
                </p>
                <button className="ml-auto text-red-600 font-bold text-sm flex items-center group mb-5 mr-3">
                  {t("read_detailed_guidelines")}
                  <span className="ml-2 group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </button>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-red-200">
                   {t('national_ppt')}
                  </button>
                  <button className="border-2 border-gray-200 hover:border-red-600 hover:text-red-600 text-gray-700 px-8 py-3 rounded-xl font-bold transition-all">
                     {t('download_guidelines')}
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT SECTION (2/3): Our Leadership */}
            <div className="lg:w-1/3">
              {/* <div className="mb-8">
                <h2 className="text-3xl font-black text-slate-900 leading-tight">
                  Our Leadership
                </h2>
                <p className="text-slate-500 text-sm mt-2">Guiding the National Elimination Mission</p>
              </div> */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ministers.map((minister, index) => (
                  <div
                    key={index}
                    className={`bg-slate-100 rounded-[1.0rem] py-3 px-5 border border-slate-200 hover:shadow-xl hover:bg-white transition-all duration-500 flex flex-col items-center text-center group
                    ${
                      minister.isCabinet
                        ? "md:col-span-2 flex-row md:text-left md:items-center"
                        : ""
                    }`}
                  >
                    <img
                      src={minister.image}
                      alt={minister.name}
                      className={`rounded-2xl object-fit bg-white shadow-md border-4 border-white transition-transform group-hover:scale-105
                      ${
                        minister.isCabinet
                          ? "w-32 h-32 md:w-40 md:h-40"
                          : "w-24 h-24 mb-4"
                      }`}
                    />

                    <div className={minister.isCabinet ? "md:ml-8 flex-1" : ""}>
                      <h3 className="font-bold text-slate-900 text-lg leading-tight mb-1">
                        {minister.name}
                      </h3>
                      <p className="text-red-600 font-medium text-xs tracking-tighter mb-2">
                        {minister.designation}
                      </p>
                      <p className="text-slate-500 text-xs line-clamp-2 px-4 md:px-0">
                        {minister.department}
                      </p>
                      <button className="mt-4 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-red-600 transition-colors">
                        View Portfolio
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto  relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Side: Large Statistics */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="space-y-2">
                {/* <span className="text-red-500 font-black text-sm uppercase tracking-[0.3em]">
                  Census 2011 Data {t("census")}
                </span>
                <h2 className="text-white text-4xl md:text-5xl font-black leading-tight">
                  Impact in <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                    India
                  </span>
                </h2> */}
                <span className="text-red-500 font-black text-sm uppercase tracking-[0.3em]">
      {t("census_label")}
    </span>

    {/* Heading Section */}
    <h2 className="text-white text-4xl md:text-5xl font-black leading-tight">
      <Trans
        i18nKey="impact_heading"
        components={{
          1: <br />,
          2: (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
              India
            </span>
          )
        }}
      />
    </h2>
              </div>

              <div className="flex items-center gap-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex-1 text-center">
                  <p className="text-4xl font-black text-white mb-1">8.6%</p>
                  <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">
                    Tribal Pop.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex-1 text-center">
                  <p className="text-4xl font-black text-white mb-1">67.8M</p>
                  <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">
                    Total Individuals
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: The Quote/Content Card */}
            <div className="lg:col-span-7">
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-14 rounded-[3rem] shadow-2xl">
                {/* Large Quote Icon Vector */}
                <svg
                  className="absolute top-8 left-8 w-12 h-12 text-white/10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21L14.017 18C14.017 16.899 14.919 16 16.017 16H19.017C19.568 16 20.017 15.551 20.017 15V9C20.017 8.449 19.568 8 19.017 8H16.017C14.919 8 14.017 7.101 14.017 6V5C14.017 3.899 14.919 3 16.017 3H19.017C21.222 3 23.017 4.794 23.017 7V15C23.017 18.311 20.329 21 17.017 21H14.017ZM0.017 21L0.017 18C0.017 16.899 0.919 16 2.017 16H5.017C5.568 16 6.017 15.551 6.017 15V9C6.017 8.449 5.568 8 5.017 8H2.017C0.919 8 0.017 7.101 0.017 6V5C0.017 3.899 0.919 3 2.017 3H5.017C7.222 3 9.017 4.794 9.017 7V15C9.017 18.311 6.329 21 3.017 21H0.017Z" />
                </svg>

                <p className="relative z-10 text-xl md:text-2xl text-slate-200 leading-relaxed font-medium italic">
                  "{t("impact")}".
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px w-12 bg-red-600"></div>
                  <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">
                    {t("health_report_home")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 md:py-24 border-y border-slate-100">
        <div className="container mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-blue-900 rounded-[3rem] shadow-2xl p-10 md:p-16 text-white">
            {/* Animated Background Pulse */}
            <div className="absolute inset-0 bg-[url('images/carbon-fibre.png')] opacity-10"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Column: Heading */}
              <div className="text-center lg:text-left space-y-4 max-w-md">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <span className="text-xs font-black uppercase tracking-widest text-white">
                    {t("live_mission_progress")}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black leading-tight">
                  Eliminating Sickle Cell <br />
                  <span className="text-red-200">Across the Nation</span>
                </h2>
              </div>

              {/* Middle Column: Big Number */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <h3 className="text-7xl md:text-9xl font-black tracking-tighter drop-shadow-2xl">
                    2.45
                    <span className="text-4xl md:text-6xl text-red-300">
                      Cr+
                    </span>
                  </h3>
                  {/* Decorative underline */}
                  <div className="h-2 w-full bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full mt-2"></div>
                </div>
                <p className="mt-4 text-xl md:text-2xl font-bold text-red-100 opacity-90 uppercase tracking-widest">
                  Total Screenings Completed
                </p>
              </div>

              {/* Right Column: CTA & Goal */}
              <div className="w-full lg:w-64 space-y-6">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-200 mb-2">
                    Target Goal 2047
                  </p>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-2xl font-black">7.0 Cr</span>
                    <span className="text-sm font-bold opacity-70">
                      35% Achieved
                    </span>
                  </div>
                  <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                    <div className="bg-white h-full w-[35%] shadow-[0_0_15px_white]"></div>
                  </div>
                </div>
                <button className="w-full bg-white text-red-700 py-4 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-red-50 transition-all shadow-xl active:scale-95">
                  Download Statistics
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="container mx-auto py-16 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "currentColor",
                    maskImage: `url(${feature.imagePath})`,
                    WebkitMaskImage: `url(${feature.imagePath})`,
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                  className="bg-gradient-to-br from-red-600 via-red-700 to-blue-900 z-10"
                />

                <div className="absolute inset-0 bg-slate-100 rounded-2xl opacity-50 group-hover:opacity-20 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <h3 class="text-xl font-bold text-slate-800 mb-3">
                {feature.title}
              </h3>

              <div className="mt-auto text-orange-600 text-xs font-black uppercase tracking-[0.2em] flex items-center group-hover:text-green-600 transition-colors duration-300">
                Learn More
                <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </div>

              <div className="absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full bg-orange-500 transition-all duration-500" />
            </div>
          ))}
        </div>
      </section> */}

      {/* <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white p-10 rounded-[3rem] border border-slate-100 shadow-[0_15px_50px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-red-100/40 transition-all duration-500 hover:-translate-y-4 overflow-hidden"
            >
              <div
                className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full opacity-5 group-hover:scale-[4] group-hover:opacity-10 transition-all duration-1000 ${card.color.split(" ")[1]}`}
              ></div>
              <div
                className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm border transition-all duration-500 group-hover:rotate-[15deg] group-hover:scale-110 ${card.color}`}
              >
                {card.icon}
              </div>              
              <div className="relative z-10">
                <div className="relative mb-1">
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 h-0 w-1 bg-red-600 group-hover:h-full transition-all duration-300 rounded-full"></div>

                  <h3 className="text-[1.15rem] font-bold text-slate-800 tracking-tight group-hover:text-[#e33d46] transition-colors leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Mission Pillar
                  </p>
                </div>
                <Link
                  to={card.path}
                  className="relative mt-4 inline-flex items-center gap-3 group/btn transition-all duration-300"
                >
                  
                  <div className="flex flex-col">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover/btn:text-[#e33d46] transition-colors duration-300">
                      View Details
                    </span>
                    
                    <div className="h-[2px] w-0 bg-gradient-to-r from-[#e33d46] to-[#ff7043] transition-all duration-500 group-hover/btn:w-full rounded-full"></div>
                  </div>

                 
                  <div className="flex items-center justify-center h-8 w-8 rounded-full border border-slate-200 bg-white shadow-sm group-hover/btn:border-[#e33d46] group-hover/btn:bg-[#e33d46] group-hover/btn:text-white transition-all duration-500">
                    <svg
                      className="w-4 h-4 text-slate-400 group-hover/btn:text-white transition-transform group-hover/btn:translate-x-0.5"
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
                </Link>
              </div>             
              <div className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-[#e33d46] to-[#ff7043] w-0 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </section> */}

      {/* <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white rounded-[3.5rem] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(227,61,70,0.15)] transition-all duration-700 hover:-translate-y-4 overflow-hidden"
            >
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/20 rounded-[3.5rem] transition-all duration-700"></div>

              <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-40 h-40 bg-gradient-to-br from-red-50 to-orange-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10 p-10 bg-white rounded-[3.4rem]">
                <div className="relative mb-10 inline-block">
                  <div
                    className={`h-20 w-20 rounded-3xl flex items-center justify-center text-3xl shadow-2xl transition-all duration-700 group-hover:rotate-[15deg] group-hover:scale-110 relative z-10 ${card.color}`}
                  >
                    {card.icon}
                  </div>

                  <div className="absolute top-0 left-0 w-full h-full border-2 border-red-100 rounded-3xl animate-ping opacity-0 group-hover:opacity-20"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full border-4 border-white shadow-sm scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                      Pillar 0{card.id}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 tracking-tighter leading-none group-hover:text-red-600 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-slate-500 text-xs font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    Focused on enhancing healthcare accessibility for sickle
                    cell patients nationwide.
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-slate-50">
                  <Link
                    to={card.path}
                    className="group/btn flex items-center justify-between w-full"
                  >
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">
                      Explore More
                    </span>
                    <div className="h-10 w-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover/btn:bg-red-600 group-hover/btn:rotate-45 transition-all duration-500 shadow-lg">
                      <svg
                        className="w-5 h-5"
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
                  </Link>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-2 text-6xl font-black text-slate-50 opacity-0 group-hover:opacity-100 transition-all duration-1000 select-none pointer-events-none uppercase italic">
                2047
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white rounded-[3.5rem] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(227,61,70,0.15)] transition-all duration-700 hover:-translate-y-4 overflow-hidden"
            >
              <div className="relative z-10 p-10 bg-white rounded-[3.4rem]">
                {/* --- Header Section (Icon + New Creative Elements) --- */}
                <div className="flex justify-between items-start mb-10">
                  <div className="relative mb-10 inline-block">
                    <div
                      className={`h-20 w-20 rounded-3xl flex items-center justify-center text-3xl shadow-2xl transition-all duration-700 group-hover:rotate-[15deg] group-hover:scale-110 relative z-10 ${card.color}`}
                    >
                      {card.icon}
                    </div>

                    <div className="absolute top-0 left-0 w-full h-full border-2 border-red-100 rounded-3xl animate-ping opacity-0 group-hover:opacity-20"></div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full border-4 border-white shadow-sm scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  </div>
                  {/* Left Side: Floating Icon */}
                  {/* <div className="relative">
                    <div
                      className={`h-20 w-20 rounded-3xl flex items-center justify-center text-3xl shadow-2xl transition-all duration-700 group-hover:rotate-[15deg] group-hover:scale-110 relative z-10 ${card.color}`}
                    >
                      {card.icon}
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full border-2 border-red-100 rounded-3xl animate-ping opacity-0 group-hover:opacity-20"></div>
                  </div> */}

                  {/* --- Right Side: filling the blank space --- */}
                  <div className="flex flex-col items-end space-y-2 opacity-20 group-hover:opacity-100 transition-all duration-700 transform translate-x-4 group-hover:translate-x-0">
                    {/* Pillar Number as a Design Element */}
                    <span className="text-5xl font-black text-slate-400 group-hover:text-red-500/30 leading-none select-none">
                      0{card.id}
                    </span>
                    {/* Subtle Progress Dots */}
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 w-4 rounded-full transition-all duration-500 ${i < card.id ? "bg-red-500" : "bg-slate-100"}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-4">
                  {/* <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Pillar Designation</span>
            </div> */}

                  <h3 className="text-2xl font-bold text-slate-900 tracking-tighter leading-none group-hover:text-red-600 transition-colors">
                    {card.title}
                  </h3>

                  {/* <p className="text-slate-500 text-xs font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
              Focused on enhancing healthcare accessibility for sickle cell patients nationwide.
            </p> */}
                </div>

                {/* Footer Action */}
                <div className="mt-10 pt-6 border-t border-slate-200">
                  <Link
                    to={card.path}
                    className="group/btn flex items-center justify-between w-full"
                  >
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
                      Explore More
                    </span>
                    <div className="h-10 w-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover/btn:bg-red-600 group-hover/btn:rotate-45 transition-all duration-500 shadow-lg">
                      <svg
                        className="w-5 h-5"
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
                  </Link>
                </div>
              </div>

              {/* Floating Background Glow */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="w-full  bg-[#f9e7d9] py-6 md:py-10 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">           

            <div className="inline-flex items-center gap-3 px-4 py-2  rounded-full shadow-sm border border-red-500 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-600">
                Official Mobile App
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Healthcare in Your Pocket. <br className="hidden lg:block" />
              <span className="text-red-600">Download the App Today.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-5 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Register, screen, and access reports anytime—even offline. Link
              your ABHA ID for a seamless digital health experience.
            </p>
            <div className="flex flex-col mb-4">
              <span className="text-5xl font-black text-slate-900 tracking-tighter tabular-nums">
                {totalDownloads.toLocaleString()}
              </span>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                Trusted Downloads
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=in.nic.sickle_cell"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img
                  src="images/Google_Play_Store.svg"
                  alt="Get it on Google Play"
                  className="h-12 w-auto"
                />
              </a>
              <a href="#" className="transition-transform hover:scale-105">
                <img
                  src="images/App_Store.svg"
                  alt="Download on the App Store"
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative flex justify-center items-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-200/30 blur-3xl rounded-full -z-10"></div>

            <div className="relative z-10">
              <img
                src="images/splash-screen.png"
                alt="App Screen Mockup"
                className="w-60 md:w-64 lg:w-70 h-auto"
              />
              <div className="absolute -bottom-6 -right-6 md:-right-10 bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 flex flex-col items-center gap-2">
                <img
                  src="images/qr-code.svg"
                  alt="Scan to Download"
                  className="w-20 h-20"
                />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  Scan to Download
                </span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="w-full bg-[#f443360f] py-10 md:py-16 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-16">
          {/* --- Left Side: Content --- */}
          <div className="w-full md:w-3/5 text-center md:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full shadow-sm border border-red-500 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-600">
                Official Mobile App
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tighter uppercase">
              Healthcare in Your Pocket. <br className="hidden lg:block" />
              <span className="text-red-600 italic">Download Today.</span>
            </h2>

            <p className="text-base text-slate-600 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
              Register, screen, and access reports anytime—even offline. Link
              your ABHA ID for a seamless digital health experience.
            </p>

            {/* --- Stats and Buttons in One Row --- */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
              {/* Trusted Downloads Badge */}
              <div className="flex flex-col items-center md:items-start border-r border-slate-300 pr-8">
                <span className="text-4xl font-black text-slate-900 tracking-tighter tabular-nums leading-none">
                  26,843+
                </span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-2">
                  Trusted Downloads
                </span>
              </div>

              {/* Action Buttons Side-by-Side */}
              <div className="flex items-center gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=in.nic.sickle_cell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105 active:scale-95"
                >
                  <img
                    src="images/Google_Play_Store.svg"
                    alt="Get it on Google Play"
                    className="h-11 w-auto shadow-sm rounded-lg"
                  />
                </a>
                <a
                  href="#"
                  className="transition-transform hover:scale-105 active:scale-95"
                >
                  <img
                    src="images/App_Store.svg"
                    alt="Download on the App Store"
                    className="h-11 w-auto shadow-sm rounded-lg"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* --- Right Side: Visual Mockup --- */}
          <div className="w-full md:w-2/5 relative flex justify-center items-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-400/10 blur-[100px] rounded-full -z-10"></div>

            <div className="relative z-10 group">
              <img
                src="images/splash-screen.png"
                alt="App Screen Mockup"
                className="w-56 md:w-64 h-auto drop-shadow-2xl border-white transition-transform duration-500 group-hover:scale-105"
              />

              {/* Floating QR Badge */}
              <div className="absolute -bottom-6 -right-6 md:-right-8 bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 flex flex-col items-center gap-2 transform transition-all group-hover:translate-y-[-5px]">
                <div className="p-1.5 bg-slate-50 rounded-xl relative">
                  <img
                    src="images/qr-code.svg"
                    alt="Scan to Download"
                    className="w-20 h-20 grayscale group-hover:grayscale-0 transition-all"
                  />
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-red-600 rounded-tl-sm"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-red-600 rounded-br-sm"></div>
                </div>
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest text-center">
                  Scan to Download
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="bg-[#fcfcfc] min-h-screen font-sans selection:bg-red-100 selection:text-red-600">
        <section className="relative w-full bg-gradient-to-r from-[#e33d46] via-[#f05053] to-[#ff7043] py-32 overflow-hidden border-b-[12px] border-white/20">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:24px_24px]"></div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
              <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">
                National Mission
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-8 leading-none">
              Eliminate SCD <br />
              <span className="italic opacity-90 text-white/80">By 2047</span>
            </h1>
            <p className="max-w-3xl mx-auto text-white/90 text-sm md:text-xl font-medium italic tracking-wide drop-shadow-sm leading-relaxed">
              "To improve care for all SCD patients and lower prevalence through
              awareness, universal screening, and holistic management."
            </p>
          </div>
        </section>
      </div> */}
    </main>
  );
};

export default Home;
