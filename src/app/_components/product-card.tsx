import Image from "next/image";
import React from "react";

const SustainableProductCard = () => {
  return (
    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
      <div className="bg-blue-gray-500 shadow-blue-gray-500/40 relative mx-4 mt-4 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg">
        <Image
          src="/dustbin.jpg"
          alt="Sustainable Product"
          width={500}
          height={500}
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <h5 className="text-blue-gray-900 block font-sans text-xl font-medium leading-snug tracking-normal antialiased">
            Eco-Friendly Bamboo Toothbrush
          </h5>
          <p className="text-blue-gray-900 flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed antialiased">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              ></path>
            </svg>
            5.0
          </p>
        </div>
        <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
          Choose this eco-friendly bamboo toothbrush, crafted with sustainable
          materials, to make a positive impact on the environment.
        </p>
      </div>
      <div className="p-6 pt-3">
        <button
          className="block w-full select-none rounded-lg bg-gray-900 px-7 py-3.5 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SustainableProductCard;
