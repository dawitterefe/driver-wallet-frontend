import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopUp from "./pages/TopUp";
import Balance from "./pages/Balance";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <Router>
      <div className="flex min-h-screen w-screen">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 ml-0 md:ml-64 transition-all duration-300">
          <header className="text-gray-700  p-6 flex items-center ">
            <button onClick={toggleSidebar} className="mr-4 focus:outline-none">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#4FD1C5" />
                    <stop offset="100%" stopColor="#81E6D9" />
                  </linearGradient>
                  <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow
                      dx="1"
                      dy="1"
                      stdDeviation="1"
                      floodColor="rgba(0,0,0,0.2)"
                    />
                  </filter>
                </defs>
                <path
                  filter="url(#s)"
                  stroke="url(#g)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                  fill="none"
                />
              </svg>
            </button>

            <h1 className="text-xl font-bold">Driver Wallet System</h1>
          </header>
          <main className="p-6">
            <Routes>
              <Route path="/" element={<Navigate to="/topup" />} />
              <Route path="/topup" element={<TopUp />} />
              <Route path="/balance" element={<Balance />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
