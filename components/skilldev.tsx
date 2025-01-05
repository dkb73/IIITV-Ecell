import React from "react";
import Image from "next/image";
import SkillBlock from "./SkillBlock";

const skilldev = () => {
  const skillBlocksData = [
    {
      imgSrc: "/eseminar.jpg",
      imgAlt: "Skill Development Image 1",
      title: "Entrepreneurship Seminar",
      description:
        "A seminar focused on the fundamentals of entrepreneurship, covering topics such as business planning, market analysis, and funding.",
    },
    {
      imgSrc: "/startuppitch.jpg",
      imgAlt: "Skill Development Image 2",
      title: "Startup Pitch Competition",
      description:
        "A competition where students pitch their startup ideas to a panel of industry experts and investors.",
    },
    {
      imgSrc: "/designworkshop.jpg",
      imgAlt: "Skill Development Image 3",
      title: "Design Thinking Workshop",
      description:
        "A hands-on workshop that teaches students the principles of design thinking and how to apply them to problem-solving.",
    },
    {
      imgSrc: "/workshop.jpg",
      imgAlt: "Skill Development Image 5",
      title: "Entrepreneurship Workshop",
      description:
        "A workshop that covers various aspects of entrepreneurship, such as business model development, marketing, and financial planning.",
    },
    {
      imgSrc: "/ideationsession.jpg",
      imgAlt: "Skill Development Image 6",
      title: "Ideation Session",
      description:
        "A session where students can brainstorm and develop their business ideas with the guidance of experienced mentors.",
    },
    {
      imgSrc: "/networking.jpg",
      imgAlt: "Skill Development Image 7",
      title: "Networking Event",
      description:
        "An event that connects students with industry professionals, investors, and successful entrepreneurs to build their network.",
    },
  ];

  return (
    <section
      id="skilldevelopment"
      className="bg-background rounded-lg p-8 text-foreground shadow-md mb-20 pt-36"
    >
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20">
          Skill Development
        </h1>
        <div className="flex justify-center mb-8">
          <Image
            src="/skilldevheader1.jpg"
            width={600}
            height={300}
            alt="SSIP Image"
            className="rounded-lg"
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="text-lg md:text-xl lg:text-2xl px-4 md:px-8 lg:px-16 text-justify">
          The Skill Development wing of the Entrepreneurship Cell focuses on
          providing students with the necessary skills and knowledge to succeed
          in the entrepreneurial ecosystem. It aims to organize workshops,
          seminars, and training programs to help students develop their
          entrepreneurial skills.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 ">
        <div className="bg-card rounded-lg p-4 shadow-md text-card-foreground">
          <Image
            src="/profilesample.jpg"
            width="150"
            height="150"
            alt="Skill Development Lead"
            className="rounded-full mx-auto"
            style={{ aspectRatio: "150/150", objectFit: "cover" }}
          />
          <div className="space-y-2 text-center">
            <h3 className="text-lg font-bold">John Doe</h3>
            <p className="text-card-foreground">Skill Development Lead</p>
          </div>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-md text-card-foreground">
          <Image
            src="/profilesample.jpg"
            width="150"
            height="150"
            alt="Skill Development Associate Lead"
            className="rounded-full mx-auto"
            style={{ aspectRatio: "150/150", objectFit: "cover" }}
          />
          <div className="space-y-2 text-center">
            <h3 className="text-lg font-bold">John Doe</h3>
            <p className="text-card-foreground">
              Skill Development Associate Lead
            </p>
          </div>
        </div>
      </div>
      
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-20 ">
          Our Initiatives
        </h1>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        {skillBlocksData.map((block, index) => (
          <SkillBlock
            key={index}
            imgSrc={block.imgSrc}
            imgAlt={block.imgAlt}
            title={block.title}
            description={block.description}
          />
        ))}
        <div className="col-span-1 md:col-span-3 flex flex-col items-center justify-center">
          <Image
            src="/bootcamp.jpg"
            width="800"
            height="400"
            alt="Skill Development Image 4"
            className="rounded-lg object-cover"
            style={{ aspectRatio: "800/400", objectFit: "cover" }}
          />
          <div className="mt-4 text-center">
            <h4 className="text-lg font-bold">Entrepreneurship Bootcamp</h4>
            <p className="text-muted-foreground">
              A multi-day intensive program that provides students with the
              knowledge and skills needed to launch their own startups.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default skilldev;
