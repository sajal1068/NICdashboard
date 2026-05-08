import React, { useState, useMemo } from "react";

const UserManual = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; 

  const manuals = [
    {
      sn: "01",
      title: "Citizen Registration Guide",
      category: "General",
      size: "2.4 MB",
      updated: "20 Oct 2025",
    },
    {
      sn: "02",
      title: "Sickle Cell Mobile App Manual",
      category: "Mobile App",
      size: "1.8 MB",
      updated: "12 Nov 2025",
    },
    {
      sn: "03",
      title: "Screening Protocol for Health Workers",
      category: "Admin",
      size: "3.1 MB",
      updated: "05 Jan 2026",
    },
    {
      sn: "04",
      title: "Genetic Counselling Module Guide",
      category: "General",
      size: "4.2 MB",
      updated: "15 Jan 2026",
    },
    {
      sn: "05",
      title: "Lab Technician Reporting Portal",
      category: "Admin",
      size: "2.9 MB",
      updated: "28 Jan 2026",
    },
    {
      sn: "06",
      title: "District DEIC Officer Dashboard Manual",
      category: "Admin",
      size: "3.5 MB",
      updated: "29 Jan 2026",
    },
    {
      sn: "07",
      title: "Public Awareness Campaign Toolkit",
      category: "General",
      size: "5.1 MB",
      updated: "30 Jan 2026",
    },
  ];

  const categories = ["All", "General", "Mobile App", "Admin"];

  // --- Logic: Filtering & Pagination ---
  const filteredData = useMemo(() => {
    return activeTab === "All"
      ? manuals
      : manuals.filter((item) => item.category === activeTab);
  }, [activeTab]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filteredData.slice(indexOfFirstItem, indexOfLastItem);
  }, [currentPage, filteredData]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] ">


      <div className="relative w-full bg-gradient-to-r from-[#e33d46] via-[#f05053] to-[#ff7043] py-10 md:py-15 overflow-hidden border-b-[12px] border-white/20">
        {/* --- Background Geometric Pattern (Same as image) --- */}
        <div className="absolute inset-0 opacity-10 bg-[url('images/cubes.png')] bg-repeat pointer-events-none"></div>

        {/* --- Floating Decorative Shapes --- */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-400/20 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Animated Icon Badge */}
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl animate-bounce-slow">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6 drop-shadow-2xl">
            USER <span className="italic opacity-90">MANUALS</span>
          </h1>

          {/* Mission Slogan (As per your image) */}
          <p className="max-w-2xl mx-auto text-white/90 text-sm md:text-lg font-medium italic tracking-wide leading-relaxed">
            "Comprehensive guides to help you navigate and utilize the portal
            for the elimination of Sickle Cell disease in India before 2047."
          </p>

          {/* Decorative Bottom Curve Support */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto py-16 ">
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div className="relative">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-1.5 w-10 bg-red-600 rounded-full"></span>
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">
                Knowledge Base
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
              User{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-orange-600">
                Manuals
              </span>
            </h1>
          </div>

          {/* Tab Filters */}
          <div className="flex flex-wrap gap-3 bg-slate-200/40 p-1.5 rounded-2xl border border-slate-200">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentPage(1);
                }}
                className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-white text-slate-900 shadow-md transform -translate-y-0.5"
                    : "text-slate-500 hover:text-red-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* --- Resources List --- */}
        <div className="space-y-4 mb-12">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-slate-200/60 rounded-[2.5rem] p-6 lg:px-10 lg:py-8 flex flex-col lg:grid lg:grid-cols-12 items-center gap-6 lg:gap-0 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-0 bg-red-600 group-hover:h-1/2 transition-all duration-500 rounded-r-full"></div>

              <div className="col-span-1 text-2xl font-black text-slate-100 group-hover:text-red-100 transition-colors uppercase italic">
                {item.sn}
              </div>

              <div className="col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                <h3 className="text-xl md:text-2xl font-black text-slate-800 group-hover:text-red-700 transition-colors tracking-tight leading-tight uppercase">
                  {item.title}
                </h3>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    PDF • {item.size}
                  </span>
                  <span className="h-1 w-1 bg-slate-300 rounded-full"></span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Modified {item.updated}
                  </span>
                </div>
              </div>

              <div className="col-span-4 w-full lg:text-right">
                <button className="w-full lg:w-auto inline-flex items-center justify-center gap-4 px-8 py-4 bg-slate-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-red-600 transition-all shadow-lg active:scale-95 group/btn">
                  Download Guide
                  <svg
                    className="w-4 h-4 transition-transform group-hover/btn:translate-y-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4-4v12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- Modern Pagination Section --- */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 pt-10 border-t border-slate-200">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`h-12 w-12 rounded-2xl flex items-center justify-center border border-slate-200 bg-white transition-all ${currentPage === 1 ? "opacity-30 cursor-not-allowed" : "hover:border-red-600 hover:text-red-600 shadow-sm active:scale-90"}`}
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`h-12 px-6 rounded-2xl text-[11px] font-black transition-all ${currentPage === i + 1 ? "bg-red-600 text-white shadow-lg shadow-red-200" : "bg-white border border-slate-200 text-slate-400 hover:border-red-200"}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`h-12 w-12 rounded-2xl flex items-center justify-center border border-slate-200 bg-white transition-all ${currentPage === totalPages ? "opacity-30 cursor-not-allowed" : "hover:border-red-600 hover:text-red-600 shadow-sm active:scale-90"}`}
            >
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManual;
