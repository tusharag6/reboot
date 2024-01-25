import BlogCard from "./_components/blog-card";
import Footer from "./_components/footer";
import Hero from "./_components/hero";
import Introduction from "./_components/introduction";
import KeyFeatures from "./_components/key-features";
import Navbar from "./_components/navbar";

export default async function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <KeyFeatures />
      <BlogCard />
      <Footer />
    </>
  );
}
