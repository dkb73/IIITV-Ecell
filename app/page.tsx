import React from "react";
import Aboutus from "../components/aboutus";
import Hero from "../components/hero";
import { FloatingNav } from "@/components/ui/FloatingNax";
import { navItems } from "@/data";
import Wings from "../components/wings";
import Initiatives from "../components/initiatives";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import ContactUs from "@/components/contactUs";

export default function Home() {
  return (
    <main className = "relative  bg-white flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className = "max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero/>
        <div className="border-2 border-gray-100 shadow-lg rounded-xl">
          <Aboutus />
          <Wings />
          <Initiatives />
        </div>
        <Testimonials/>
        <ContactUs/>
        <Footer/>
      </div>
    </main>
  );
}