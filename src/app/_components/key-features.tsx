import React from "react";
import { Coins, GraduationCap, MapPin, Truck } from "lucide-react";

const KeyFeatures = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="max-w-screen mb-8 text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Empowering Sustainable E-Waste Disposal
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            At Reboot, we are dedicated to revolutionizing e-waste disposal with
            a focus on sustainability, innovation, and environmental impact. Our
            platform empowers users to contribute to a cleaner planet by
            seamlessly integrating technology and responsible practices.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-4">
          <div>
            <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center rounded-full lg:h-12 lg:w-12">
              <MapPin />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              E-Waste Facility Locator
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Locate nearby e-waste collection and recycling facilities with
              ease.
            </p>
          </div>
          <div>
            <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center rounded-full lg:h-12 lg:w-12">
              <Truck />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Home Pickup Scheduling
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Schedule convenient home pickups for your e-waste disposal needs.
            </p>
          </div>
          <div>
            <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center rounded-full lg:h-12 lg:w-12">
              <GraduationCap />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Educational Pop-ups
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Learn about the harmful components of e-waste through informative
              pop-ups.
            </p>
          </div>
          <div>
            <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center rounded-full lg:h-12 lg:w-12">
              <Coins />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Rewards System
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Earn rewards for responsible e-waste disposal practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
