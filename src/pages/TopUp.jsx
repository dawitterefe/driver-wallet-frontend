import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const TopUp = () => {
  const [driverId, setDriverId] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTopUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/wallet/topup",
        {
          driver_id: parseInt(driverId),
          amount: parseFloat(amount),
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error occurred");
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
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Wallet Top Up</h2>
      <form
        onSubmit={handleTopUp}
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
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Amount (Birr)
          </label>
          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition-all duration-200"
          disabled={loading}
        >
          {loading ? "Processing..." : "Top Up"}
        </button>
      </form>
      {message && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-center font-bold text-green-600 max-w-md "
        >
          {message}
        </motion.p>
      )}
    </motion.div>
  );
};

export default TopUp;
