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
        {/* Sidebar with smooth transition */}
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        />
        <div
          className={`flex-1 transition-all duration-300 ease-in-out ${
            sidebarOpen ? "md:ml-64" : "md:ml-20"
          } ml-0`}
        >
          <header className="text-gray-700 p-6 flex items-center">
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

            <h2 className="text-4xl font-bold">Driver Wallet System</h2>
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
