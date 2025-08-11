// src/components/StatusDashboard.jsx
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("https://missed-backend.vercel.app/"); // change to your backend URL when deployed

export default function StatusDashboard() {
  const [statusData, setStatusData] = useState({
    status: "--",
    version: "--",
    uptime: "--",
    serverTime: "--",
  });

  useEffect(() => {
    socket.on("statusUpdate", (data) => {
      setStatusData(data);
    });

    return () => {
      socket.off("statusUpdate");
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-900 text-white rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">🚀 API Live Status</h2>
      <span
        className={`px-4 py-1 rounded-full font-semibold ${
          statusData.status === "Online"
            ? "bg-green-500"
            : "bg-red-500"
        }`}
      >
        {statusData.status}
      </span>
      <p className="mt-4">Version: <strong>{statusData.version}</strong></p>
      <p>Uptime: <strong>{statusData.uptime}s</strong></p>
      <p>Server Time: <strong>{statusData.serverTime}</strong></p>
    </div>
  );
}
