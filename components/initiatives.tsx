import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const initiatives = () => {
  return (
    <section id="initiatives" className="bg-background py-20 md:py-32 lg:py-40 mb-28" >
        <div className="container mx-auto px-6 md:px-8 lg:px-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">Our Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-muted rounded-lg shadow-md p-6">
              <Image
                src="/startupshowcase.jpg"
                width={400}
                height={225}
                alt="Startup Showcase"
                className="rounded-lg mb-4"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <h3 className="text-2xl font-bold mb-2">Startup Showcase</h3>
              <p className="text-muted-foreground mb-4">
                Our annual startup showcase event allows student entrepreneurs to pitch their ideas and connect with
                investors, mentors, and industry leaders.
              </p>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                Learn More
              </Link>
            </div>
            <div className="bg-muted rounded-lg shadow-md p-6">
              <Image
                src="/ebootcamp.jpg"
                width={400}
                height={225}
                alt="Entrepreneurship Bootcamp"
                className="rounded-lg mb-4"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <h3 className="text-2xl font-bold mb-2">Entrepreneurship Bootcamp</h3>
              <p className="text-muted-foreground mb-4">
                Our intensive entrepreneurship bootcamp provides students with hands-on training in business
                development, marketing, and fundraising.
              </p>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                Learn More
              </Link>
            </div>
            <div className="bg-muted rounded-lg shadow-md p-6">
              <Image
                src="/ideationworkshop.jpg"
                width={400}
                height={225}
                alt="Ideation Workshops"
                className="rounded-lg mb-4"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <h3 className="text-2xl font-bold mb-2">Ideation Workshops</h3>
              <p className="text-muted-foreground mb-4">
                Our regular ideation workshops help students develop their entrepreneurial mindset and generate
                innovative business ideas.
              </p>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
}

export default initiatives