import React from "react";
import Header from "./screens/Header";
import AI from "./screens/AI";
import ContentsPage from "./screens/ContentsPage";
import Company from "./screens/Company";

function App() {
  return (
    <div className="App">
      <Header />
      <AI />
      <ContentsPage />
      <Company />
    </div>
  );
}

export default App;
