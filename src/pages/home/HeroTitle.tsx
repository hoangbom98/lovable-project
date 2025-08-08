
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroTitle = () => {
  const { language } = useLanguage();
  
  const title = language === 'vi' 
    ? '120+ Công Cụ Trực Tuyến Casino Dev' 
    : '120+ Casino Dev Online Tools';
    
  return (
    <h1
      className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight
        bg-gradient-to-r from-primary via-blue-500 to-secondary bg-clip-text text-transparent
        drop-shadow-sm transition-all"
      style={{
        letterSpacing: '-0.02em',
      }}
      tabIndex={-1}
      aria-label={title}
    >
      {title}
    </h1>
  );
};

export default HeroTitle;
