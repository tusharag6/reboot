"use client";

import React, { useState } from "react";

interface TimeSlot {
  id: number;
  time: string;
  available: boolean;
}

interface UserRequest {
  id: number;
  userName: string;
  requestDetails: string;
  selected: boolean;
}

const PickupScheduling: React.FC = () => {
  const timeSlots: TimeSlot[] = [
    { id: 1, time: "09:00 AM - 10:00 AM", available: true },
    { id: 2, time: "10:00 AM - 11:00 AM", available: true },
    { id: 3, time: "11:00 AM - 12:00 PM", available: false },
    { id: 4, time: "01:00 PM - 02:00 PM", available: true },
    { id: 5, time: "02:00 PM - 03:00 PM", available: true },
  ];

  const userRequests: UserRequest[] = [
    {
      id: 1,
      userName: "John Doe",
      requestDetails: "Request Details 1",
      selected: false,
    },
    {
      id: 2,
      userName: "Jane Smith",
      requestDetails: "Request Details 2",
      selected: false,
    },
    {
      id: 3,
      userName: "Alice Johnson",
      requestDetails: "Request Details 3",
      selected: false,
    },
  ];

  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const [selectedRequests, setSelectedRequests] = useState<UserRequest[]>([]);

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  const handleTimeSlotSelect = (slot: TimeSlot) => {
    if (slot.available) {
      setSelectedTimeSlot(slot.time);
    } else {
      console.log("This time slot is not available.");
    }
  };

  const handleUserRequestSelect = (request: UserRequest) => {
    const updatedRequests = selectedRequests.includes(request)
      ? selectedRequests.filter(
          (selectedRequest) => selectedRequest !== request,
        )
      : [...selectedRequests, request];
    setSelectedRequests(updatedRequests);
  };

  return (
    <div className="container mx-auto">
      <h1 className="mb-8 text-3xl font-bold">Pickup Scheduling</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-lg font-semibold">
            Select Date:
          </label>
          <input
            type="date"
            className="w-full rounded border border-gray-300 px-4 py-2"
            onChange={(e) => handleDateSelect(e.target.value)}
          />
        </div>
        <div>
          <label className="mb-2 block text-lg font-semibold">
            Available Time Slots:
          </label>
          <div className="grid grid-cols-2 gap-4">
            {timeSlots.map((slot) => (
              <button
                key={slot.id}
                className={`rounded border px-4 py-2 ${
                  slot.available
                    ? "border-gray-300 hover:border-gray-500"
                    : "cursor-not-allowed border-red-500"
                } focus:border-primary-500 focus:outline-none ${
                  slot.available ? "hover:bg-gray-100" : ""
                }`}
                onClick={() => handleTimeSlotSelect(slot)}
                disabled={!slot.available}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="mb-4 text-lg font-semibold">Select User Requests:</h2>
        <div className="grid grid-cols-1 gap-4">
          {userRequests.map((request) => (
            <div
              key={request.id}
              className={`cursor-pointer rounded border p-4 ${
                request.selected
                  ? "border-primary-500"
                  : "border-gray-300 hover:border-gray-500"
              }`}
              onClick={() => handleUserRequestSelect(request)}
            >
              <p className="font-semibold">{request.userName}</p>
              <p className="text-gray-600">{request.requestDetails}</p>
            </div>
          ))}
        </div>
      </div>
      {selectedDate && selectedTimeSlot && selectedRequests.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-4 text-lg font-semibold">
            Selected Pickup Details:
          </h2>
          <p className="text-gray-600">Date: {selectedDate}</p>
          <p className="text-gray-600">Time Slot: {selectedTimeSlot}</p>
          <p className="text-gray-600">Selected User Requests:</p>
          <ul>
            {selectedRequests.map((request) => (
              <li key={request.id}>{request.userName}</li>
            ))}
          </ul>
          <button className="mt-4 rounded bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600 focus:outline-none">
            Schedule Pickup
          </button>
        </div>
      )}
    </div>
  );
};

export default PickupScheduling;
