"use client";
import React from "react";

function Dashboard() {
  const trades = [
    {
      platform: "Wagmi/Uniswap",
      pair: "WS/WETH",
      profit: "0.001 WS",
      timestamp: "2025-03-08 14:35:22",
    },
    {
      platform: "Wagmi/Uniswap",
      pair: "WS/WETH",
      profit: "0.002 WS",
      timestamp: "2025-03-07 09:15:47",
    },
    {
      platform: "Wagmi/Uniswap",
      pair: "WS/WETH",
      profit: "0.0015 WS",
      timestamp: "2025-03-06 18:22:10",
    },
  ];

  return (
    <div className="p-6 mt-10 bg-transparent text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Past Trades</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-800 rounded-lg">
          <thead>
            <tr className="bg-gray-800">
              <th className="px-4 py-2 text-left">Timestamp</th>
              <th className="px-4 py-2 text-left">Platform</th>
              <th className="px-4 py-2 text-left">Pair</th>
              <th className="px-4 py-2 text-left">Profit</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((trade, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{trade.timestamp}</td>
                <td className="px-4 py-2">{trade.platform}</td>
                <td className="px-4 py-2">{trade.pair}</td>
                <td className="px-4 py-2">{trade.profit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
