import React, { useState, useEffect } from 'react';

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const galleryVideos = [
    { id: 1, category: 'Awareness', title: 'Understanding Sickle Cell Disease', date: 'Jan 2024', youtubeId: 'dQw4w9WgXcQ' },
    { id: 2, category: 'Events', title: 'Mission Launch Highlights', date: 'Feb 2024', youtubeId: 'dQw4w9WgXcQ' },
    { id: 3, category: 'Tribal Focus', title: 'Healthcare Outreach in Tribal Areas', date: 'Mar 2024', youtubeId: 'dQw4w9WgXcQ' },
    { id: 4, category: 'Schools', title: 'Awareness Talk at EMRS Schools', date: 'Apr 2024', youtubeId: 'dQw4w9WgXcQ' },
    { id: 5, category: 'Screening', title: 'Mass Screening Camp Documentary', date: 'May 2024', youtubeId: 'dQw4w9WgXcQ' },
    { id: 6, category: 'Patient Stories', title: 'Living with SCD: A Success Story', date: 'Jun 2024', youtubeId: 'dQw4w9WgXcQ' },
  ];

  // क्लोज पॉप-अप ऑन एस्केप की
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedVideo(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans flex flex-col relative overflow-x-hidden">
      
      {/* --- VIDEO MODAL (पॉप-अप प्लेयर) --- */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-[110]">
             <span className="text-white font-black uppercase tracking-widest text-xs italic">Now Playing: {selectedVideo.title}</span>
             <button 
                onClick={() => setSelectedVideo(null)}
                className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white/10 hover:bg-red-600 text-white transition-all border border-white/20"
             >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
             </button>
          </div>

          <div className="relative w-full max-w-5xl aspect-video rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10" onClick={e => e.stopPropagation()}>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* --- PAGE HEADER --- */}
      <header className="bg-gradient-to-br from-[#e33d46] via-[#d32f2f] to-[#ff7043] py-28 px-6 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 italic drop-shadow-2xl">Video Gallery</h1>
          <p className="text-sm font-bold opacity-90 max-w-2xl mx-auto leading-relaxed uppercase tracking-[0.3em]">
            Visual Documentation of the Elimination Mission 2047
          </p>
        </div>
      </header>

      {/* --- VIDEO GRID --- */}
      <main className="max-w-7xl w-full mx-auto p-8 md:p-20 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryVideos.map((vid) => (
            <div 
              key={vid.id} 
              onClick={() => setSelectedVideo(vid)}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 hover:-translate-y-4 transition-all duration-700 cursor-pointer"
            >
              <div className="aspect-video bg-slate-200 overflow-hidden relative">
                {/* Thumbnail Image Placeholder */}
                <img 
                  src={`https://img.youtube.com/vi/${vid.youtubeId}/maxresdefault.jpg`} 
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors duration-500 flex items-center justify-center">
                   <div className="h-16 w-16 bg-[#e33d46] text-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                   </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-5 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-[10px] font-black text-white uppercase tracking-widest shadow-xl">
                    {vid.category}
                  </span>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-8">
                <h4 className="text-slate-900 font-black text-xl uppercase tracking-tighter italic leading-tight mb-3 group-hover:text-[#e33d46] transition-colors">
                  {vid.title}
                </h4>
                <div className="flex items-center gap-4">
                  <div className="h-1 w-10 bg-orange-500 rounded-full"></div>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{vid.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* --- FOOTER BADGE --- */}
      <footer className="py-20 bg-white border-t border-slate-100 flex flex-col items-center">
         <div className="bg-slate-50 border border-slate-200 p-2 rounded-[3rem] flex items-center gap-6 pr-10 shadow-inner group hover:border-red-200 transition-colors">
            <div className="h-16 w-16 bg-gradient-to-br from-[#e33d46] to-[#ff7043] rounded-[2.5rem] flex items-center justify-center font-black text-white text-2xl italic shadow-lg">
                2047
            </div>
            <div className="flex flex-col">
                <span className="text-[#e33d46] font-black uppercase tracking-widest text-[10px]">National Elimination Mission</span>
                <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Ministry of Health & Family Welfare</span>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default VideoGallery;