import React from 'react'
import Image from 'next/image'
const skilldev = () => {
  return (
    <section id="skilldevelopment" className="bg-background rounded-lg p-8 text-foreground shadow-md mb-20">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Skill Development</h2>
              <p>
                The Skill Development wing of the Entrepreneurship Cell focuses on providing students with the necessary
                skills and knowledge to succeed in the entrepreneurial ecosystem. It aims to organize workshops,
                seminars, and training programs to help students develop their entrepreneurial skills.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-8">
              <div className="bg-card rounded-lg p-6 shadow-md text-card-foreground">
                <Image
                  src="/profilesample.jpg"
                  width="200"
                  height="200"
                  alt="Skill Development Lead"
                  className="rounded-full mx-auto"
                  style={{ aspectRatio: "200/200", objectFit: "cover" }}
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Riya Mehta</h3>
                  <p className="text-card-foreground">Skill Development Lead</p>
                  
                </div>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-md text-card-foreground">
                <Image
                  src="/profilesample.jpg"
                  width="200"
                  height="200"
                  alt="Skill Development Associate Lead"
                  className="rounded-full mx-auto"
                  style={{ aspectRatio: "200/200", objectFit: "cover" }}
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Harsh Patel</h3>
                  <p className="text-card-foreground">Skill Development Associate Lead</p>
                  
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/eseminar.jpg"
                  width="400"
                  height="300"
                  alt="Skill Development Image 1"
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="mt-4 text-center">
                  <h4 className="text-lg font-bold">Entrepreneurship Seminar</h4>
                  <p className="text-muted-foreground">
                    A seminar focused on the fundamentals of entrepreneurship, covering topics such as business
                    planning, market analysis, and funding.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/startuppitch.jpg"
                  width="400"
                  height="300"
                  alt="Skill Development Image 2"
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="mt-4 text-center">
                  <h4 className="text-lg font-bold">Startup Pitch Competition</h4>
                  <p className="text-muted-foreground">
                    A competition where students pitch their startup ideas to a panel of industry experts and investors.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/designworkshop.jpg"
                  width="400"
                  height="300"
                  alt="Skill Development Image 3"
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="mt-4 text-center">
                  <h4 className="text-lg font-bold">Design Thinking Workshop</h4>
                  <p className="text-muted-foreground">
                    A hands-on workshop that teaches students the principles of design thinking and how to apply them to
                    problem-solving.
                  </p>
                </div>
              </div>
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
                    A multi-day intensive program that provides students with the knowledge and skills needed to launch
                    their own startups.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/workshop.jpg"
                  width="400"
                  height="300"
                  alt="Skill Development Image 5"
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="mt-4 text-center">
                  <h4 className="text-lg font-bold">Entrepreneurship Workshop</h4>
                  <p className="text-muted-foreground">
                    A workshop that covers various aspects of entrepreneurship, such as business model development,
                    marketing, and financial planning.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/ideationsession.jpg"
                  width="400"
                  height="300"
                  alt="Skill Development Image 6"
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="mt-4 text-center">
                  <h4 className="text-lg font-bold">Ideation Session</h4>
                  <p className="text-muted-foreground">
                    A session where students can brainstorm and develop their business ideas with the guidance of
                    experienced mentors.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/networking.jpg"
                  width="400"
                  height="300"
                  alt="Skill Development Image 7"
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="mt-4 text-center">
                  <h4 className="text-lg font-bold">Networking Event</h4>
                  <p className="text-muted-foreground">
                    An event that connects students with industry professionals, investors, and successful entrepreneurs
                    to build their network.
                  </p>
                </div>
              </div>
            </div>
          </section>
  )
}

export default skilldev