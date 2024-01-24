import React from "react";
import Header from "./screens/Header";
import AI from "./screens/AI";
import ContentsPage from "./screens/ContentsPage";
import Company from "./screens/Company";
import { LanguageProvider } from "./contexts/Language";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Header />
        <AI />
        <ContentsPage />
        <Company />
      </LanguageProvider>
    </div>
  );
}

export default App;
