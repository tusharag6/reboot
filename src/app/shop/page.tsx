import React from "react";
import SustainableProductCard from "../_components/product-card";

const ShopPage = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Explore Sustainable Products for a Greener Future
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
          Discover a curated selection of eco-friendly products that make a
          positive impact on the environment. Every purchase contributes to a
          greener and more sustainable future.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <SustainableProductCard />
          <SustainableProductCard />
          <SustainableProductCard />
          <SustainableProductCard />
          <SustainableProductCard />
          <SustainableProductCard />
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
