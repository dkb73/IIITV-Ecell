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
    <main className="relative bg-white flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10  bg-fixed bg-no-repeat bg-cover" style={{ backgroundImage: "url('/bgimg1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="max-w-7xl w-full bg-white-100 bg-opacity-100 rounded-lg">
        <FloatingNav navItems={navItems} />
        <Hero />
        <div className="shadow-lg rounded-xl bg-white bg-opacity-100 p-5 mb-28">
          <Aboutus />
          <Wings />
          <Initiatives />
        </div>
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </main>
  );
}