import Link from "next/link";
import React from "react";

const Wings = () => {
  return (
    <section
      id="wings"
      className="bg-background py-10 md:py-16 mb-7 lg:py-20 border-b border-gray-200"
    >
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-16 text-center relative">
        <span className="relative">
          Our Wings
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>
        </span>
      </h2>
      <div className="px-4 md:px-8 lg:px-16"> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link href="/wings-details/#irp" className="group bg-background rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <div>
              <div className="text-center">
                <h3 className="text-2xl font-bold relative inline-block">
                  <span className="bg-gradient-to-r from-primary to-primary bg-[length:0px_2px] group-hover:bg-[length:100%_2px] bg-left-bottom bg-no-repeat transition-all duration-500">
                    IRP
                  </span>
                </h3>
                <div className="w-full h-px bg-gray-200 my-4"></div>
              </div>
              <p className="text-muted-foreground mb-4 text-center">
                Industrial Resource Planning (IRP) wing of the Entrepreneurship Cell focuses on bridging the gap between academia and industry.
              </p>
              <div className="text-center">
                <span className="text-primary hover:underline inline-block relative">
                  Learn More
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
              </div>
            </div>
          </Link>

          <Link href="/wings-details/#ssip" className="group bg-background rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <div>
              <div className="text-center">
                <h3 className="text-2xl font-bold relative inline-block">
                  <span className="bg-gradient-to-r from-primary to-primary bg-[length:0px_2px] group-hover:bg-[length:100%_2px] bg-left-bottom bg-no-repeat transition-all duration-500">
                    SSIP
                  </span>
                </h3>
                <div className="w-full h-px bg-gray-200 my-4"></div>
              </div>
              <p className="text-muted-foreground mb-4 text-center">
                The Student Startup and Innovation Policy (SSIP) is our initiative to support student entrepreneurs. We offer funding, mentorship, and networking opportunities.
              </p>
              <div className="text-center">
                <span className="text-primary hover:underline inline-block relative">
                  Learn More
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
              </div>
            </div>
          </Link>

          <Link href="/wings-details/#incubation" className="group bg-background rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <div>
              <div className="text-center">
                <h3 className="text-2xl font-bold relative inline-block">
                  <span className="bg-gradient-to-r from-primary to-primary bg-[length:0px_2px] group-hover:bg-[length:100%_2px] bg-left-bottom bg-no-repeat transition-all duration-500">
                    Incubation
                  </span>
                </h3>
                <div className="w-full h-px bg-gray-200 my-4"></div>
              </div>
              <p className="text-muted-foreground mb-4 text-center">
                Our incubation program provides a nurturing environment for student startups. We offer workspace, funding, and access to industry experts.
              </p>
              <div className="text-center">
                <span className="text-primary hover:underline inline-block relative">
                  Learn More
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
              </div>
            </div>
          </Link>

          <Link href="/wings-details/#skilldevelopment" className="group bg-background rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <div>
              <div className="text-center">
                <h3 className="text-2xl font-bold relative inline-block">
                  <span className="bg-gradient-to-r from-primary to-primary bg-[length:0px_2px] group-hover:bg-[length:100%_2px] bg-left-bottom bg-no-repeat transition-all duration-500">
                    Skill Development
                  </span>
                </h3>
                <div className="w-full h-px bg-gray-200 my-4"></div>
              </div>
              <p className="text-muted-foreground mb-4 text-center">
                We organize workshops, training sessions, and resources to help students develop the skills needed to become successful entrepreneurs.
              </p>
              <div className="text-center">
                <span className="text-primary hover:underline inline-block relative">
                  Learn More
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Wings;