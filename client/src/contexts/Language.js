import React, { useState, createContext } from "react";

const LanguageContext = createContext({
  language: "ko", // 기본 언어는 한국어로 설정
  toggleLanguage: () => {},
});

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ko");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "ko" ? "en" : "ko"));
  };

  const value = { language, toggleLanguage };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
