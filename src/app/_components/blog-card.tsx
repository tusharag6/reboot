import React from "react";
import Image from "next/image";

const BlogCard = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="max-w-screen mb-8 text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Explore Our E-Waste Insights
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Stay informed with our latest articles and tutorials on responsible
            e-waste disposal and environmental impact.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-5 flex items-center justify-between text-gray-500">
              <span className="bg-primary-100 text-primary-800 dark:bg-primary-200 dark:text-primary-800 inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium">
                <svg
                  className="mr-1 h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Insights
              </span>
              <span className="text-sm">14 days ago</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">The Environmental Impact of E-Waste Recycling</a>
            </h2>
            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
              Discover how e-waste recycling plays a crucial role in minimizing
              environmental impact and promoting sustainability.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image
                  className="h-7 w-7 rounded-full"
                  src="/user.jpg"
                  width={50}
                  height={50}
                  alt="author avatar"
                />
                <span className="font-medium dark:text-white">
                  EcoExpert123
                </span>
              </div>
              <a
                href="#"
                className="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium hover:underline"
              >
                Read more
                <svg
                  className="ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </article>
          <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-5 flex items-center justify-between text-gray-500">
              <span className="bg-primary-100 text-primary-800 dark:bg-primary-200 dark:text-primary-800 inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium">
                <svg
                  className="mr-1 h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clipRule="evenodd"
                  ></path>
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                </svg>
                Tutorial
              </span>
              <span className="text-sm">14 days ago</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Tips for Responsible E-Waste Disposal at Home</a>
            </h2>
            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
              Learn practical tips to ensure responsible e-waste disposal
              practices within the comfort of your home.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image
                  className="h-7 w-7 rounded-full"
                  src="/user.jpg"
                  width={50}
                  height={50}
                  alt="author avatar"
                />
                <span className="font-medium dark:text-white">
                  GreenLiving2024
                </span>
              </div>
              <a
                href="#"
                className="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium hover:underline"
              >
                Read more
                <svg
                  className="ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
