"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import Image from "next/image";
import { Highlight } from "@/components/ui/hero-highlight";


const Hero: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      id="home"
      className="bg-white py-20 md:py-32 lg:py-40 mb-8 mt-14 rounded-lg shadow-lg"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-10 flex flex-col lg:flex-row items-center text-primary-foreground">
        <div className="lg:w-1/2 text-center lg:text-left" style={{ overflowWrap: 'break-word', lineHeight: '1.5' }}>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4">
            {/* Empowering Entrepreneurship at <br/>  */}
            Empowering <span className="bg-gradient-to-r from-purple-800 via-pink-500 to-red-500 bg-clip-text text-transparent italic">Entrepreneurship </span> at <br />
            IIIT Vadodara
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            The E-Cell is dedicated to fostering a vibrant entrepreneurial
            ecosystem on its campus.
          </p>
          {/* <a href="#contact">
            <Button text="Contact Us" />
          </a> */}
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
// "use client";

// import React, { useEffect, useState } from "react";
// import Button from "@/components/ui/button";
// import Image from "next/image";
// import { Highlight } from "@/components/ui/hero-highlight";
// import { motion } from "framer-motion";
// import { AuroraBackground } from "../components/ui/aurora-background";

// const Hero: React.FC = () => {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="bg-white py-20 md:py-32 lg:py-40 mb-8 mt-14 rounded-lg shadow-lg"
//     >
//       {/* <AuroraBackground> */}
//         <motion.div
//           initial={{ opacity: 0.0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: "easeInOut",
//           }}
//           className="container mx-auto px-6 md:px-8 lg:px-10 flex flex-col lg:flex-row items-center text-primary-foreground"
//         >
//           <div className="lg:w-1/2 text-center lg:text-left" style={{ overflowWrap: 'break-word', lineHeight: '1.5' }}>
//             <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4">
//               {/* Empowering Entrepreneurship at <br /> */}
//               Empowering <span className="bg-gradient-to-r from-purple-800 via-pink-500 to-red-500 bg-clip-text text-transparent italic">Entrepreneurship </span> at <br />
//               IIIT Vadodara
//             </h1>
//             <p className="text-lg md:text-xl lg:text-2xl mb-8">
//               The E-Cell is dedicated to fostering a vibrant entrepreneurial
//               ecosystem on its campus.
//             </p>
//             {/* <a href="#contact">
//               <Button text="Contact Us" />
//             </a> */}
//           </div>
//           <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
//             <Image
//               src="/herotest1.jpg"
//               alt="Entrepreneurship"
//               width={800}
//               height={600}
//               layout="responsive"
//               className="w-full h-auto"
//               style={{ objectFit: "contain", maxWidth: "100%" }}
//             />
//           </div>
//         </motion.div>
//       {/* </AuroraBackground> */}
//     </section>
//   );
// };

// export default Hero;