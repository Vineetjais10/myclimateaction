import React, { useEffect } from "react";
import Header from "@/components/Header";
import Timeline from "@/components/Timeline";
import ThemeCarousel from "@/components/ThemeCarousel";
import Guidelines from "@/components/Guidelines";
import Awards from "@/components/Awards";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import Sponsors from "../components/Sponsors";

const Index: React.FC = () => {
  // Add a preload effect for a smooth entrance
  useEffect(() => {
    document.body.classList.add("opacity-0");

    setTimeout(() => {
      document.body.classList.remove("opacity-0");
      document.body.classList.add(
        "transition-opacity",
        "duration-500",
        "opacity-100"
      );
    }, 200);

    // Create a fake loading delay for visual polish
    const fakeLoading = setTimeout(() => {
      const loader = document.getElementById("page-loader");
      if (loader) {
        loader.classList.add("opacity-0");
        setTimeout(() => {
          loader.style.display = "none";
        }, 500);
      }
    }, 800);

    return () => clearTimeout(fakeLoading);
  }, []);

  return (
    <>
      {/* Page loader */}
      <div
        id="page-loader"
        className="fixed inset-0 z-50 flex items-center justify-center bg-climate-dark transition-opacity duration-500"
      >
        <div className="w-16 h-16 border-4 border-white/30 border-t-climate-blue rounded-full animate-spin-slow"></div>
      </div>

      <div className="min-h-screen">
        <Header />
        <main>
          <ThemeCarousel />
          <Timeline />
          <Awards />
          <Guidelines />
          <Sponsors />
          <ContactInfo />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
