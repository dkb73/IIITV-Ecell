const aboutus = () => {
  return (
    // bg-background py-20 md:py-32 mb-14 lg:py-40 border-b border-gray-200 
    <section id="about" className="bg-background py-10 md:py-16 mb-7 lg:py-20 border-8 rounded-lg border-gray-300 ">
        <div className="container mx-auto px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">About the E-Cell</h2>
              <p className="text-muted-foreground mb-8 ">
                The Entrepreneurship Cell (E-Cell) at IIIT Vadodara is a student-run organization dedicated to fostering
                a vibrant entrepreneurial ecosystem on campus. We aim to inspire, educate, and empower students to turn
                their ideas into successful startups.
              </p>
              <p className="text-muted-foreground mb-8">
                Our mission is to provide resources, mentorship, and opportunities for students to explore their
                entrepreneurial passions and gain practical experience in building and launching their own ventures.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/ecelllogo.jpg"
                width={450}
                height={450}
                alt="E-Cell IIIT Vadodara"
                className="rounded-lg"
                style={{ aspectRatio: "450/450", objectFit: "contain", maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
    </section>
  );
};

export default aboutus;