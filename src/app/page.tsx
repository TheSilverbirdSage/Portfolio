"use client"

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <div className="site-tech-backdrop" aria-hidden="true">
        <img
          src="/tech-silhouette.svg"
          alt=""
          className="site-tech-backdrop__top"
        />
        <img
          src="/tech-silhouette.svg"
          alt=""
          className="site-tech-backdrop__bottom"
        />
      </div>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
