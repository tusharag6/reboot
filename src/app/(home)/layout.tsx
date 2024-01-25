import React from "react";
import Footer from "../_components/footer";
import Navbar from "../_components/navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default HomeLayout;
