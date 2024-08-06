import Image from "next/image";
import Link from "next/link";
import React from "react";

const Wings = () => {
  return (
    <section
      id="wings"
      className="bg-background py-20 md:py-32 mb-14 lg:py-40 border-b border-gray-200"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center">Our Wings</h2>
      <div className="px-4 md:px-8 lg:px-16"> {/* Added padding to the parent container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link href="/wings-details/#irp" className="bg-background rounded-lg shadow-md p-6">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-24 h-24 relative mr-4">
                  <Image
                    src="/irplogo.png" // Replace with the actual path to your IRP logo
                    alt="IRP Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-2xl font-bold">IRP</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                The Innovation and Research Park (IRP) is our hub for cutting-edge research and development. We provide
                state-of-the-art facilities and resources to support student-led R&D projects.
              </p>
              <span className="text-primary hover:underline">Learn More</span>
            </div>
          </Link>
          <Link href="/wings-details/#ssip" className="bg-background rounded-lg shadow-md p-6">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-24 h-24 relative mr-4">
                  <Image
                    src="/ssiplogo.png" // Replace with the actual path to your SSIP logo
                    alt="SSIP Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-2xl font-bold">SSIP</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                The Student Startup and Innovation Policy (SSIP) is our initiative to support student entrepreneurs. We
                offer funding, mentorship, and networking opportunities to help students transform their ideas into
                viable startups.
              </p>
              <span className="text-primary hover:underline">Learn More</span>
            </div>
          </Link>
          <Link href="/wings-details/#incubation" className="bg-background rounded-lg shadow-md p-6">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-24 h-24 relative mr-4">
                  <Image
                    src="/incubationlogo.png" // Replace with the actual path to your logo
                    alt="Another Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-2xl font-bold">Incubation</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Our incubation program provides a nurturing environment for student startups. We offer workspace,
                funding, and access to industry experts to help startups grow and succeed.
              </p>
              <span className="text-primary hover:underline">Learn More</span>
            </div>
          </Link>
          <Link href="/wings-details/#skilldevelopment" className="bg-background rounded-lg shadow-md p-6">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-24 h-24 relative mr-4">
                  <Image
                    src="/skilldevelopmentlogo.png" // Replace with the actual path to your logo
                    alt="Skill Development Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-2xl font-bold">Skill Development</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                We organize workshops, training sessions, and resources to help students develop the skills needed to
                become successful entrepreneurs, such as ideation, business planning, and marketing.
              </p>
              <span className="text-primary hover:underline">Learn More</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Wings;
