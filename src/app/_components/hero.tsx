import React from "react";
import SearchInput from "./ui/search-input";
const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 pt-8 text-center lg:px-12 lg:pt-16">
        {/* Announcement Badge */}
        {/* <a
        href="#"
        className="mb-7 inline-flex items-center justify-between rounded-full bg-gray-100 px-1 py-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
        role="alert"
      >
        <span className="bg-primary-600 mr-3 rounded-full px-4 py-1.5 text-xs text-white">
          New
        </span>{" "}
        <span className="text-sm font-medium">
          Reboot is out! See whats new
        </span>
        <svg
          className="ml-2 h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipule="evenodd"
          ></path>
        </svg>
      </a> */}
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Reboot Today, Sustain Tomorrow
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
          Transforming Electronic Waste into Environmental Solutions, One Device
          at a Time.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          {/* TODO : Search input and button for facility search */}
          <SearchInput />
        </div>
      </div>
    </section>
  );
};

export default Hero;
