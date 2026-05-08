import React, { useState, useEffect, useCallback } from 'react';

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const galleryImages = [
    { id: 1, category: 'Events', title: 'Mission Launch 2024', date: 'Jan 2024' },
    { id: 2, category: 'Screening', title: 'Mass Screening Camp', date: 'Feb 2024' },
    { id: 3, category: 'Awareness', title: 'Tribal Outreach Program', date: 'Mar 2024' },
    { id: 4, category: 'Events', title: 'Ministerial Visit', date: 'Apr 2024' },
    { id: 5, category: 'Schools', title: 'EMRS Awareness Talk', date: 'May 2024' },
    { id: 6, category: 'Screening', title: 'Mobile Van Unit', date: 'Jun 2024' },
  ];

  // Fancybox Navigation Functions
  const showNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const showPrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, [galleryImages.length]);

  const closeGallery = () => setCurrentIndex(null);

  // Keyboard Support (Esc, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, showNext, showPrev]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col relative">
      
      {/* --- FANCYBOX MODAL --- */}
      {currentIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in zoom-in duration-300"
          onClick={closeGallery}
        >
          {/* Top Toolbar */}
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-[110] bg-gradient-to-b from-black/50 to-transparent">
            <span className="text-white/70 text-xs font-black uppercase tracking-widest">
              {currentIndex + 1} / {galleryImages.length} — {galleryImages[currentIndex].title}
            </span>
            <button 
              onClick={closeGallery}
              className="h-12 w-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-600 text-white transition-all shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Main Image Container */}
          <div className="relative max-w-5xl w-full flex items-center justify-center group" onClick={(e) => e.stopPropagation()}>
            
            {/* Previous Button (Fancybox Style) */}
            <button 
              onClick={showPrev}
              className="absolute left-4 z-[120] h-16 w-16 flex items-center justify-center rounded-full bg-black/40 hover:bg-white hover:text-black text-white transition-all opacity-0 group-hover:opacity-100 shadow-2xl backdrop-blur-sm"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <img 
              src={`images/gallery_${galleryImages[currentIndex].id}.jpg`} 
              alt="Gallery Content"
              className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500 border border-white/10"
            />

            {/* Next Button (Fancybox Style) */}
            <button 
              onClick={showNext}
              className="absolute right-4 z-[120] h-16 w-16 flex items-center justify-center rounded-full bg-black/40 hover:bg-white hover:text-black text-white transition-all opacity-0 group-hover:opacity-100 shadow-2xl backdrop-blur-sm"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Bottom Info Section */}
          <div className="mt-8 text-center animate-in fade-in slide-in-from-top-4 duration-700">
            <h3 className="text-orange-400 text-sm font-black uppercase tracking-[0.3em] mb-1">
              {galleryImages[currentIndex].category}
            </h3>
            <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest italic">
              Captured: {galleryImages[currentIndex].date}
            </p>
          </div>
        </div>
      )}

      {/* --- PAGE HEADER --- */}
      <header className="bg-gradient-to-r from-[#e33d46] to-[#ff7043] py-24 px-6 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 italic drop-shadow-lg">Media Gallery</h1>
          <p className="text-sm font-medium opacity-90 max-w-2xl mx-auto leading-relaxed uppercase tracking-widest">
            Eliminating Sickle Cell Anaemia Across India Before 2047
          </p>
        </div>
      </header>

      {/* --- GALLERY GRID --- */}
      <main className="max-w-7xl w-full mx-auto p-8 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryImages.map((img, index) => (
            <div 
              key={img.id} 
              onClick={() => setCurrentIndex(index)}
              className="group relative bg-white rounded-md overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 hover:-translate-y-3 transition-all duration-500 cursor-zoom-in"
            >
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src={`images/gallery_${img.id}.jpg`} 
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-5 py-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-[10px] font-black text-white uppercase tracking-widest shadow-lg">
                    {img.category}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-8 left-8 right-8 z-20 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h4 className="text-white font-black text-xl uppercase tracking-tighter italic">{img.title}</h4>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="h-[2px] w-8 bg-orange-500 rounded-full"></span>
                    <p className="text-orange-400 text-[10px] font-black uppercase tracking-widest">{img.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

     
    </div>
  );
};

export default PhotoGallery;