import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-20 md:py-32 lg:py-40 rounded-xl mb-28 shadow-lg">
      <div className="container mx-auto px-6 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-background rounded-lg shadow-md p-6">
            <blockquote className="text-lg font-medium mb-4">
              &quot;The E-Cell at IIIT Vadodara has been instrumental in shaping my entrepreneurial journey. The mentorship, resources, and network they provide are invaluable.&quot;
            </blockquote>
            <div className="flex items-center">
              <Image src="/testprofile.jpg" alt="Testimonial Author" className="mr-4 rounded-full" width={48} height={48} />
              <div>
                <div className="font-medium">John Doe</div>
                <div className="text-muted-foreground">Founder, Acme Inc.</div>
              </div>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-md p-6">
            <blockquote className="text-lg font-medium mb-4">
              &quot;The E-Cell has created an incredible ecosystem for student entrepreneurs. The support and opportunities they provide are truly transformative.&quot;
            </blockquote>
            <div className="flex items-center">
              <Image src="/testprofile.jpg" alt="Testimonial Author" className="mr-4 rounded-full" width={48} height={48} />
              <div>
                <div className="font-medium">Jane Smith</div>
                <div className="text-muted-foreground">Co-founder, Startup X</div>
              </div>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-md p-6">
            <blockquote className="text-lg font-medium mb-4">
              &quot;The E-Cell has been a game-changer for me. The workshops, mentorship, and networking opportunities have helped me develop the skills and confidence to launch my own startup.&quot;
            </blockquote>
            <div className="flex items-center">
              <Image src="/testprofile.jpg" alt="Testimonial Author" className="mr-4 rounded-full" width={48} height={48} />
              <div>
                <div className="font-medium">Michael Johnson</div>
                <div className="text-muted-foreground">Founder, Startup Z</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;