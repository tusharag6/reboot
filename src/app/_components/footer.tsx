import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse"
          >
            <Image
              src="/logo.png"
              className="h-8"
              width={50}
              height={500}
              alt="Logo"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              Reboot
            </span>
          </a>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                Rewards
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline md:me-6">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                Join as Facility
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Reboot™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
