import { useState } from "react";
import Frontend from "./layouts/FrontendLayout";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login"
import BackToTopButton from './layouts/BackToTopButton';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AdminLayout from "./layouts/AdminLayout";
import About from './pages/About'
import KnowYourReport from "./pages/KnowYourReport";
import PhotoGallery from "./pages/PhotoGallery";
import VideoGallery from "./pages/VideoGallery";
import Contact from './pages/Contact'
import PrivacyPolicy from "./pages/PrivacyPolicy";
import UserManual from "./pages/UserManual";
import SiteMap from "./pages/SiteMap";
import DownloadPPT from "./pages/DownloadPPT";
import SCDMissionDashboard from "./pages/SCDMissionDashboard";
import './i18n';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontend />}>
            <Route index element={<Home />} />            
            <Route path="/about" element={<About />} />            
            <Route path="/contact" element={<Contact />} />            
            <Route path="/KnowYourReport" element={<KnowYourReport />} />            
            <Route path="/photo-gallery" element={<PhotoGallery />} />       
            <Route path="/video-gallery" element={<VideoGallery />} /> 
            <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
            <Route path="/user-manual" element={<UserManual />} /> 
            <Route path="/sitemap" element={<SiteMap />} /> 
            <Route path="/national-ppt" element={<DownloadPPT />} />
            <Route path="/scd-dashboard" element={<SCDMissionDashboard />} />
                 
          </Route> 

          <Route path="/login" element={<Login />} />        

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />                    
          </Route> 

        </Routes>
        <BackToTopButton />
      </BrowserRouter>

      {/* <Routes>
        
        <Route path="/" element={<FrontendLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
        
      
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        
        
        <Route path="*" element={<div className="p-8 text-center">Page not found</div>} />
      </Routes>
      <BackToTopButton /> */}
    
    </>
  );
}

export default App;
