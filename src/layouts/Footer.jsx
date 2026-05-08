import React from "react";
import { Link } from "react-router-dom";
import { useTranslation ,Trans } from "react-i18next"; 


const Footer = () => {
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  const { t, i18n } = useTranslation();  

  const footerLogos = [
    { src: "images/NIC.svg", alt: "National Informatics Centre" },
    { src: "images/Digital.svg", alt: "Digital India" },
    { src: "images/ticket-raise.svg", alt: "Support Desk" },
  ];

  return (
    <footer>        
      {/* <section className="bg-[#0B1B34] py-8"> */}
      <section className="bg-slate-900 py-8">
        <div className="container mx-auto px-4">          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-10">
            {footerLogos.map((logo, index) => (
              <img 
                key={index}
                src={logo.src} 
                alt={logo.alt} 
                className="h-12 md:h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
          
          <div className="border-y border-white/10 py-4">
            <ul className="flex flex-wrap justify-center items-center text-xs md:text-sm tracking-[2px] md:tracking-[3.2px] uppercase">
              <li className="px-4 border-r border-white/10">
                <Link to="/privacy-policy" className="text-stone-400 hover:text-white transition-colors">{t("privacy_policy")}</Link>
              </li>
              <li className="px-4 border-r border-white/10">
                <Link to="/sitemap" className="text-stone-400 hover:text-white transition-colors">{t("sitemap")}</Link>
              </li>
              <li className="px-4">
                <Link to="/contact" className="text-stone-400 hover:text-white transition-colors">{t("contact")}</Link>
              </li>
            </ul>
          </div>
        </div>
        
      </section>
     
      <section className="bg-[#081223] py-6">      
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="text-stone-500 text-xs md:text-sm mx-auto leading-relaxed">
           {t("website_contents")}
            <div></div>
            <Trans
              i18nKey="footer.credit"
              components={[
                <br key="0" />, 
                <a 
                  key="1"
                  href="https://www.nic.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-800 hover:underline font-medium"
                />
              ]}
            />
           
          </p>
          
          <div className="text-stone-400 text-xs font-medium pt-2 border-t border-white/5 inline-block">
            Last Updated : <span className="text-stone-300">{formattedDate}</span>
          </div>
        </div>
      </section>

      
    </footer>

    
  );
};

export default Footer;