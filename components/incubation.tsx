import React from "react";
import Image from "next/image";
const incubation = () => {
  return (
    <section
      id="incubation"
      className="bg-accent rounded-lg p-8 text-accent-foreground shadow-md mb-36 pt-36"
    >
      <div className="space-y-4 container mx-auto mb-36 text-center px-6 md:px-8 lg:px-28">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10">
          INCUBATION 
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl px-4 md:px-8 lg:px-16 text-justify">
          The Incubation wing of the Entrepreneurship Cell focuses on providing
          support and resources to students who are interested in starting their
          own ventures. It aims to help students turn their ideas into viable
          businesses.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-6 shadow-md text-black">
          <Image
            src="/profilesample.jpg"
            width="200"
            height="200"
            alt="Incubation Lead"
            className="rounded-full mx-auto"
            style={{ aspectRatio: "200/200", objectFit: "cover" }}
          />
          <div className="space-y-2 text-center">
            <h3 className="text-xl font-bold">Aditya Patel</h3>
            <p className="text-black">Incubation Lead</p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md text-black">
          <Image
            src="/profilesample.jpg"
            width="200"
            height="200"
            alt="Incubation Associate Lead"
            className="rounded-full mx-auto"
            style={{ aspectRatio: "200/200", objectFit: "cover" }}
          />
          <div className="space-y-2 text-center">
            <h3 className="text-xl font-bold">Neha Gupta</h3>
            <p className="text-black">Incubation Associate Lead</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold">Relevant Images</h3>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <Image
            src="/incubation1.jpg"
            width="400"
            height="300"
            alt="Incubation Image 1"
            className="rounded-lg object-cover"
            style={{ aspectRatio: "400/300", objectFit: "cover" }}
          />
          <Image
            src="/incubation2.jpg"
            width="400"
            height="300"
            alt="Incubation Image 2"
            className="rounded-lg object-cover"
            style={{ aspectRatio: "400/300", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default incubation;
