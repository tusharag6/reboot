"use client";

import React, { useState } from "react";

const UserRequests = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      user: "John Doe",
      email: "john@example.com",
      pickupDate: "2024-02-10",
      status: "Pending",
    },
    {
      id: 2,
      user: "Jane Smith",
      email: "jane@example.com",
      pickupDate: "2024-02-15",
      status: "Approved",
    },
    {
      id: 3,
      user: "Alice Johnson",
      email: "alice@example.com",
      pickupDate: "2024-02-20",
      status: "Rejected",
    },
  ]);

  const approveRequest = (id: number) => {
    const updatedRequests = requests.map((request) =>
      request.id === id ? { ...request, status: "Approved" } : request,
    );
    setRequests(updatedRequests);
  };

  const rejectRequest = (id: number) => {
    const updatedRequests = requests.map((request) =>
      request.id === id ? { ...request, status: "Rejected" } : request,
    );
    setRequests(updatedRequests);
  };

  return (
    <div className="container mx-auto">
      <h1 className="mb-6 text-2xl font-bold">User Requests</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {requests.map((request) => (
          <div key={request.id} className="rounded-lg border p-4">
            <h2 className="mb-2 text-lg font-semibold">{request.user}</h2>
            <p className="mb-2 text-gray-600">{request.email}</p>
            <p className="mb-2 text-gray-600">
              Pickup Date: {request.pickupDate}
            </p>
            <p className="text-sm font-semibold text-gray-800">
              Status:{" "}
              <span
                className={`${
                  request.status === "Pending"
                    ? "text-yellow-600"
                    : request.status === "Approved"
                      ? "text-green-600"
                      : "text-red-600"
                }`}
              >
                {request.status}
              </span>
            </p>
            {request.status === "Pending" && (
              <div className="mt-4">
                <button
                  onClick={() => approveRequest(request.id)}
                  className="mr-2 rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-white hover:bg-green-600 focus:bg-green-600 focus:outline-none"
                >
                  Approve
                </button>
                <button
                  onClick={() => rejectRequest(request.id)}
                  className="rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 focus:bg-red-600 focus:outline-none"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserRequests;
