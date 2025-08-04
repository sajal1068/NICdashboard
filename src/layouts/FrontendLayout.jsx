import React, { useRef } from 'react';
import Header from '../layouts/Header.jsx'
import Navbar from '../layouts/Navbar.jsx'
import Footer from '../layouts/Footer.jsx'
import { Outlet } from "react-router-dom";


const FrontendLayout = () => {
      const mainContentRef = useRef(null);
  const handleSkipToMain = (event) => {
    event.preventDefault(); 
    if (mainContentRef.current) {
        mainContentRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
       });
      mainContentRef.current.focus();
    }
  };

  return (
    <>
      <Header />
      <Navbar />
       <main ref={mainContentRef}
        id="main-content"
        >
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default FrontendLayout;
