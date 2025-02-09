// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-muted py-6 bg-black w-full absolute bottom-0 left-0 right-0">
//       <div className="w-full text-center">
//         <p className="text-sm md:text-base lg:text-lg text-white">
//           &copy; {new Date().getFullYear()} IIIT VADODARA. All rights reserved.
//         </p>
//         <div className="mt-4">
//           <a href="/privacy-policy" className="text-white hover:text-primary mx-2">Privacy Policy</a>
//           <a href="/terms-of-service" className="text-white hover:text-primary mx-2">Terms of Service</a>
//           <a href="/contact" className="text-white hover:text-primary mx-2">Contact Us</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Instagram, Linkedin, Twitter, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2d4073] text-white pt-8 absolute w-full bottom-0 left-0 right-0">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Subscribe */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Subscribe to Our Blogs</h2>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-amber-600 rounded-l px-4 py-2 w-full focus:outline-none"
              />
              <button className="bg-amber-600 px-4 py-2 rounded-r hover:bg-amber-700">
                →
              </button>
            </div>
            <div>
              <p className="mb-4">Get connected with us on social networks:</p>
              <div className="flex space-x-4">
                <Linkedin className="w-6 h-6 text-amber-600 hover:text-amber-500 cursor-pointer" />
                <Instagram className="w-6 h-6 text-amber-600 hover:text-amber-500 cursor-pointer" />
                <Twitter className="w-6 h-6 text-amber-600 hover:text-amber-500 cursor-pointer" />
                <Youtube className="w-6 h-6 text-amber-600 hover:text-amber-500 cursor-pointer" />
                <Facebook className="w-6 h-6 text-amber-600 hover:text-amber-500 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Column 2 - Our Initiatives */}
          <div>
            <h3 className="text-amber-600 font-semibold mb-4">OUR INITIATIVES</h3>
            <ul className="space-y-2">
              {['E-Summit', 'Eureka!', 'Eureka! Junior', 'Illuminate', 'NEC'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-amber-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Useful Links */}
          <div>
            <h3 className="text-amber-600 font-semibold mb-4">USEFUL LINKS</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Gallery', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-amber-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-amber-600 font-semibold mb-4">CONTACT</h3>
            <p className="mb-4">
              Students Activity Center, IIIT Area, IIIT Vadodara, Gujarat 390017
            </p>
            <p>
              <a href="mailto:support@iiitv.ac.in" className="hover:text-amber-600">
                support@iiitv.ac.in
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 pt-3 pb-2 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} IIIT VADODARA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;