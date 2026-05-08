import React, { useRef } from 'react';
import Header from '../layouts/Header.jsx'
import Navbar from '../layouts/Navbar.jsx'
import Footer from '../layouts/Footer.jsx'
import { Outlet } from "react-router-dom";
import Breadcrumbs from '../components/Breadcrumbs.jsx';

const FrontendLayout = () => {

  const handleSkipToMain = (e) => {
    e.preventDefault();
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.setAttribute('tabindex', '-1');
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header handleSkipToMain={handleSkipToMain} />
      <Navbar />      
       <main 
        id="main-content" className='bg-white'
        >          
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default FrontendLayout;
