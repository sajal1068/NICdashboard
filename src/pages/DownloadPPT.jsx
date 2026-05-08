import React, { useState } from 'react';

const DownloadPPT = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const resources = [
    { id: 1, title: "National Mission Guidelines 2023", category: "Guidelines", format: "PDF", size: "4.2 MB", date: "15 Jul 2023" },
    { id: 2, title: "Operational Strategy PPT", category: "Presentation", format: "PPTX", size: "12.5 MB", date: "10 Aug 2023" },
    { id: 3, title: "Genetic Counselling Manual", category: "Guidelines", format: "PDF", size: "2.8 MB", date: "05 Sep 2023" },
    { id: 4, title: "ASHA Training Module", category: "Training", format: "PDF", size: "8.1 MB", date: "12 Oct 2023" },
    { id: 5, title: "Community Awareness Video", category: "Media", format: "MP4", size: "45 MB", date: "20 Nov 2023" },
    { id: 6, title: "Annual Progress Report", category: "Reports", format: "PDF", size: "1.5 MB", date: "01 Dec 2023" },
    { id: 7, title: "Lab Technician Protocol", category: "Guidelines", format: "PDF", size: "3.2 MB", date: "15 Jan 2024" },
    { id: 8, title: "Mission Logo Assets", category: "Media", format: "ZIP", size: "22 MB", date: "20 Jan 2024" },
  ];

  // Filtering based on search
  const filteredData = resources.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-20">
      
      {/* --- Page Header --- */}
      <div className="relative w-full bg-gradient-to-r from-[#e33d46] via-[#f05053] to-[#ff7043] py-12 border-b-8 border-white/20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('images/cubes.png')] bg-repeat"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic leading-none">
                Resource <span className="opacity-80">Database</span>
              </h1>
              <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.3em] mt-4">Official Mission Documentation</p>
            </div>
            
            {/* Search Input */}
            <div className="relative group">
              <input 
                type="text"
                placeholder="Search resources..."
                className="w-full md:w-80 px-8 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/60 text-xs outline-none focus:bg-white/20 backdrop-blur-md transition-all"
                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              />
              <svg className="w-4 h-4 text-white/40 absolute right-6 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-[3rem] border border-slate-100 shadow-2xl overflow-hidden">
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Document Details</th>
                  <th className="px-6 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Type</th>
                  <th className="px-6 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Size</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right font-black">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {currentItems.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition-all group">
                    <td className="px-10 py-6">
                      <div className="flex items-center gap-5">
                        <div className="h-12 w-12 bg-slate-100 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                          {item.format === 'PDF' ? '📄' : '📊'}
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-900 uppercase tracking-tight">{item.title}</p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Uploaded: {item.date}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <span className="px-3 py-1 bg-red-50 text-[9px] font-black text-red-600 rounded-lg uppercase tracking-widest">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-xs font-black text-slate-400 tracking-widest uppercase">{item.size}</td>
                    <td className="px-10 py-6 text-right">
                      <button className="h-12 w-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:bg-red-600 shadow-lg transition-all active:scale-90 mx-auto lg:ml-auto lg:mr-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* --- Innovative Pagination Bar --- */}
          <div className="px-10 py-8 border-t border-slate-50 bg-slate-50/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} entries
            </p>
            
            <div className="flex items-center gap-2">
              <button 
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
                className="h-10 px-4 border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest disabled:opacity-30 hover:bg-white transition-all shadow-sm"
              >
                Previous
              </button>
              
              <div className="flex gap-1">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`h-10 w-10 rounded-xl text-[10px] font-black transition-all ${currentPage === i + 1 ? 'bg-red-600 text-white shadow-lg shadow-red-200' : 'text-slate-400 hover:bg-white hover:shadow-sm border border-transparent'}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button 
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => prev + 1)}
                className="h-10 px-4 border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest disabled:opacity-30 hover:bg-white transition-all shadow-sm"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPPT;