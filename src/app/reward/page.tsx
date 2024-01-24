import { Coins, Medal, Store } from "lucide-react";
import React from "react";

const RewardPage = () => {
  return (
    <section className="body-font overflow-hidden bg-white text-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 pt-8 text-center lg:px-12 lg:pt-16">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Exclusive Rewards for Our Valued Customers
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
          Thank you for being a loyal customer! We appreciate your support and
          are excited to offer you exclusive rewards as a token of our
          gratitude.
        </p>
        <div className="flex flex-row items-center justify-center gap-8">
          <div className="rounded-lg border p-4 px-8">
            <Coins className="h-12 w-12 text-gray-500 dark:text-gray-400" />
            <p className="mt-4 text-xl font-normal text-gray-500 dark:text-gray-400">
              300
            </p>
            <span className="font-light text-gray-500">Silver Coin</span>
          </div>
          <div className="rounded-lg border p-4 px-8">
            <Coins className="h-12 w-12 text-orange-500 dark:text-gray-400" />
            <p className="mt-4 text-xl font-normal text-gray-500 dark:text-gray-400">
              200
            </p>
            <span className="font-light text-gray-500">Gold Coin</span>
          </div>
        </div>
      </div>

      <div className="mx-20 mt-14 border-t pt-8">
        <h1 className="mb-8 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Redeem Your Rewards
        </h1>
        <div className="mx-auto flex justify-center gap-4">
          <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
            <Store className="mb-3 h-7 w-7 text-gray-500 dark:text-gray-400" />
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Explore Our Sustainable Shop
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Discover eco-friendly products in our online shop and redeem your
              coins for sustainable purchases.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              See Our Products
              <svg
                className="ms-2.5 h-3 w-3 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>
          <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
            <Medal className="mb-3 h-7 w-7 text-gray-500 dark:text-gray-400" />
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Join Our Contests and Win
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Participate in exciting contests using your earned coins for a
              chance to win valuable prizes and exclusive discounts.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              Explore Contests
              <svg
                className="ms-2.5 h-3 w-3 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardPage;
