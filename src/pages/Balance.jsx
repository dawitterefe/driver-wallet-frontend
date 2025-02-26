import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Balance = () => {
  const [driverId, setDriverId] = useState("");
  const [balanceData, setBalanceData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBalance = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8000/api/wallet/balance/${driverId}`
      );
      setBalanceData(response.data);
    } catch (error) {
      setBalanceData({
        message: error.response?.data?.message || "Error fetching balance",
      });
    }
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <h2 className="text-3xl font-bold mb-6 text-blue-800">
        Check Wallet Balance
      </h2>
      <form
        onSubmit={fetchBalance}
        className="max-w-md bg-slate-200 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-6"
      >
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Driver ID
          </label>
          <input
            type="number"
            value={driverId}
            onChange={(e) => setDriverId(e.target.value)}
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition-all duration-200"
          disabled={loading}
        >
          {loading ? "Fetching..." : "Check Balance"}
        </button>
      </form>
      {balanceData && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 bg-gray-100 p-6 max-w-md  rounded-lg shadow"
        >
          {balanceData.message ? (
            <p className="text-red-400 font-bold ">{balanceData.message}</p>
          ) : (
            <>
              <p className="font-bold text-lg text-gray-700">
                Balance: {balanceData.balance} Birr
              </p>
              <p className="text-gray-700">Status: {balanceData.status}</p>
            </>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Balance;
