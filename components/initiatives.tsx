"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

interface InitiativeCardProps {
  image: string;
  title: string;
  description: string;
}

const InitiativeCard: React.FC<InitiativeCardProps> = ({ image, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-muted rounded-lg shadow-md p-6 transition-all duration-300 ease-in-out ${
        isHovered ? 'scale-105' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    
      <Image
        src={image}
        width={400}
        height={225}
        alt={title}
        className="rounded-lg mb-4"
        style={{ aspectRatio: "400/225", objectFit: "cover" }}
      />
      <h3 className="text-2xl font-bold mb-2">{title}</h3>

      {/* This section expands naturally without affecting siblings */}
      <div className={`transition-all duration-300 ease-in-out ${isHovered ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Link href="#" className="text-primary hover:underline" prefetch={false}>
          Learn More
        </Link>
      </div>
    </div>
  );
};



const Initiatives = () => {
  const initiatives = [
    {
      image: "/startupshowcase.jpg",
      title: "Startup Showcase",
      description: "Our annual startup showcase event allows student entrepreneurs to pitch their ideas and connect with investors, mentors, and industry leaders."
    },
    {
      image: "/ebootcamp.jpg",
      title: "Entrepreneurship Bootcamp",
      description: "Our intensive entrepreneurship bootcamp provides students with hands-on training in business development, marketing, and fundraising."
    },
    {
      image: "/ideationworkshop.jpg",
      title: "Ideation Workshops",
      description: "Our regular ideation workshops help students develop their entrepreneurial mindset and generate innovative business ideas."
    },
    {
      image: "/startupshowcase.jpg",
      title: "Startup Showcase",
      description: "Our annual startup showcase event allows student entrepreneurs to pitch their ideas and connect with investors, mentors, and industry leaders."
    },
    {
      image: "/ebootcamp.jpg",
      title: "Entrepreneurship Bootcamp",
      description: "Our intensive entrepreneurship bootcamp provides students with hands-on training in business development, marketing, and fundraising."
    },
    {
      image: "/ideationworkshop.jpg",
      title: "Ideation Workshops",
      description: "Our regular ideation workshops help students develop their entrepreneurial mindset and generate innovative business ideas."
    }
  ];

  return (
    <section id="initiatives" className="bg-background py-10 md:py-16 lg:py-20 mb-14">
      <div className="container mx-auto px-6 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
          Our Initiatives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {initiatives.map((initiative, index) => (
            <InitiativeCard
              key={index}
              image={initiative.image}
              title={initiative.title}
              description={initiative.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;