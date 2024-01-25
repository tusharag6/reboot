"use client";

import React, { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  silverCoins: number;
  goldCoins: number;
  selected: boolean;
}

const RewardManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      silverCoins: 100,
      goldCoins: 50,
      selected: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      silverCoins: 50,
      goldCoins: 25,
      selected: false,
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      silverCoins: 200,
      goldCoins: 100,
      selected: false,
    },
  ]);

  const [metalExtraction, setMetalExtraction] = useState<number>(0);

  const handleMetalExtraction = (amount: number) => {
    setMetalExtraction(amount);
  };

  const handleUserSelect = (id: number) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, selected: !user.selected } : user,
    );
    setUsers(updatedUsers);
  };

  const distributeRewards = () => {
    const selectedUsers = users.filter((user) => user.selected);

    const silverCoinsEarned = Math.floor(metalExtraction / 10); // 10 units of metal = 1 silver coin
    const goldCoinsEarned = Math.floor(metalExtraction / 100); // 100 units of metal = 1 gold coin

    const updatedUsers = users.map((user) => {
      if (selectedUsers.some((selectedUser) => selectedUser.id === user.id)) {
        return {
          ...user,
          silverCoins: user.silverCoins + silverCoinsEarned,
          goldCoins: user.goldCoins + goldCoinsEarned,
          selected: false, // Reset selected state after rewarding
        };
      }
      return user;
    });

    setUsers(updatedUsers);
  };

  return (
    <div className="container mx-auto">
      <h1 className="mb-8 text-3xl font-bold">Reward Management</h1>
      <div className="mb-4">
        <label className="mb-2 block text-lg font-semibold">
          Metal Extracted (in units):
        </label>
        <input
          type="number"
          className="rounded border border-gray-300 px-4 py-2"
          value={metalExtraction}
          onChange={(e) => handleMetalExtraction(parseInt(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {users.map((user) => (
          <div key={user.id} className="rounded border p-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={user.selected}
                onChange={() => handleUserSelect(user.id)}
                className="mr-2"
              />
              <div>
                <h2 className="mb-2 text-lg font-semibold">{user.name}</h2>
                <p className="mb-2 text-gray-600">{user.email}</p>
                <p className="mb-2 text-gray-600">
                  Silver Coins: {user.silverCoins}
                </p>
                <p className="mb-2 text-gray-600">
                  Gold Coins: {user.goldCoins}
                </p>
              </div>
            </label>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button
          className="mr-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none"
          onClick={distributeRewards}
        >
          Distribute Rewards
        </button>
      </div>
    </div>
  );
};

export default RewardManagement;
