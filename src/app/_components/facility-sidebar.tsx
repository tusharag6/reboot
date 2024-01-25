import {
  ArrowBigUpDash,
  DoorOpen,
  LayoutDashboard,
  Medal,
  ShoppingBag,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const FacilityDashboardSidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="h-screen w-64 -translate-x-full border-r border-gray-200 bg-white pt-20 transition-transform dark:border-gray-700 dark:bg-gray-800 sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto bg-white px-3 pb-4 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              href="/facility-dashboard"
              className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <LayoutDashboard className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/facility-dashboard/requests"
              className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <UserCheck className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              <span className="ms-3 flex-1 whitespace-nowrap">
                User Requests
              </span>
              <span className="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                5
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/facility-dashboard/pickup"
              className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <DoorOpen className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              <span className="ms-3 flex-1 whitespace-nowrap">
                Pickup Schedulling
              </span>
              <span className="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                3
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/facility-dashboard/tracking"
              className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <ArrowBigUpDash className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              <span className="ms-3 flex-1 whitespace-nowrap">Tracking</span>
            </Link>
          </li>
          <li>
            <Link
              href="/facility-dashboard/reward"
              className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <Medal className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              <span className="ms-3 flex-1 whitespace-nowrap">
                Reward Management
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/facility-dashboard/shop"
              className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <ShoppingBag className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              <span className="ms-3 flex-1 whitespace-nowrap">Shop</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default FacilityDashboardSidebar;
