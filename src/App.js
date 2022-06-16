import React from "react";

import "./App.css";
import Header from "./Pages/Header";
import Sidebar from "./Pages/Sidebar";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* sidebar */}
      <Sidebar />
    </div>
  );
}

export default App;
