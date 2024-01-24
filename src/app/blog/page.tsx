import React from "react";
import Article from "../_components/article";

const Blog = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
            Our Blog
          </h2>
          <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            Explore our blog to stay updated on e-waste management practices and
            industry insights.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </section>
  );
};

export default Blog;
