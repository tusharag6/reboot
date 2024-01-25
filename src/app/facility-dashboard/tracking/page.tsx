"use client";
import React, { useState } from "react";

interface Request {
  id: number;
  itemName: string;
  status: string;
}

const TrackingPage: React.FC = () => {
  // Sample request data
  const [requests, setRequests] = useState<Request[]>([
    { id: 1, itemName: "Laptop", status: "In Transit" },
    { id: 2, itemName: "Smartphone", status: "Recycling" },
    { id: 3, itemName: "Tablet", status: "Recycled" },
  ]);

  // Function to update request status
  const updateStatus = (id: number, newStatus: string) => {
    const updatedRequests = requests.map((req) =>
      req.id === id ? { ...req, status: newStatus } : req,
    );
    setRequests(updatedRequests);
  };

  return (
    <div className="container mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Tracking</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {requests.map((req) => (
          <div
            key={req.id}
            className="rounded border border-gray-300 p-4 shadow-md"
          >
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-lg font-semibold">{req.itemName}</h2>
              <span
                className={`rounded px-2 py-1 text-xs font-semibold ${
                  req.status === "In Transit"
                    ? "bg-yellow-200 text-yellow-800"
                    : req.status === "Recycling"
                      ? "bg-blue-200 text-blue-800"
                      : "bg-green-200 text-green-800"
                }`}
              >
                {req.status}
              </span>
            </div>
            <div className="mt-2">
              <select
                className="w-full rounded border border-gray-300 px-3 py-1"
                value={req.status}
                onChange={(e) => updateStatus(req.id, e.target.value)}
              >
                <option value="In Transit">In Transit</option>
                <option value="Recycling">Recycling</option>
                <option value="Recycled">Recycled</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackingPage;
