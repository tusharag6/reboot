import BlogCard from "./_components/blog-card";
import Hero from "./_components/hero";
import Introduction from "./_components/introduction";
import KeyFeatures from "./_components/key-features";

export default async function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <KeyFeatures />
      <BlogCard />
    </>
  );
}
