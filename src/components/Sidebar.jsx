import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: isOpen ? 0 : -300 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 h-full bg-slate-300 text-white w-64 z-10 shadow-lg"
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Driver Wallet</h2>
        <nav>
          <ul>
            <li className="mb-6">
              <NavLink
                to="/topup"
                className="flex items-center p-2 hover:bg-blue-400 rounded-lg transition-all duration-200"
                onClick={toggleSidebar}
              >
                <span className="ml-2">Top Up</span>
              </NavLink>
            </li>
            <li className="mb-6">
              <NavLink
                to="/balance"
                className="flex items-center p-2 hover:bg-blue-400 rounded-lg transition-all duration-200"
                onClick={toggleSidebar}
              >
                <span className="ml-2">Balance</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
