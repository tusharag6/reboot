import React from "react";
import Image from "next/image";

const Introduction = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Redefining E-Waste Management
          </h2>
          <p className="mb-4">
            At Reboot, we believe in the power of sustainable technology and
            responsible e-waste disposal. We are more than just a platform; we
            are innovators and problem solvers dedicated to revolutionizing the
            way electronic waste is handled.
          </p>
          <p>
            We provide a seamless platform for responsible e-waste disposal,
            where every device has the potential for a second life. Our mission
            is to empower you to contribute to a cleaner planet by transforming
            electronic waste into environmental solutions—one device at a time.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <Image
            className="w-full rounded-lg"
            src="/dustbin.jpg"
            alt="dustbin image"
            width={500}
            height={500}
            placeholder="empty"
          />
          <Image
            className="mt-4 w-full rounded-lg lg:mt-10"
            src="/facility.jpg"
            alt="facility image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
