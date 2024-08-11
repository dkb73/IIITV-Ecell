"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import Image from "next/image";

const Hero: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      id="home"
      className="bg-white py-20 md:py-32 lg:py-40 mb-28 mt-28 rounded-lg shadow-lg"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-10 flex flex-col lg:flex-row items-center text-primary-foreground">
        <div className="lg:w-1/2 text-center lg:text-left" style={{ overflowWrap: 'break-word', lineHeight: '1.5' }}>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4">
            Empowering Entrepreneurship at IIIT Vadodara
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            The E-Cell is dedicated to fostering a vibrant entrepreneurial
            ecosystem on campus.
          </p>
          <a href="#contact">
            <Button text="Contact Us" />
          </a>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <Image
            src="/herotest1.jpg"
            alt="Entrepreneurship"
            width={800}
            height={600}
            layout="responsive"
            className="w-full h-auto"
            style={{ objectFit: "contain", maxWidth: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
