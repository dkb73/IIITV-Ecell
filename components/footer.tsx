import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-muted py-6 bg-black w-full absolute bottom-0 left-0 right-0">
      <div className="w-full text-center">
        <p className="text-sm md:text-base lg:text-lg text-white">
          &copy; {new Date().getFullYear()} IIIT VADODARA. All rights reserved.
        </p>
        <div className="mt-4">
          <a href="/privacy-policy" className="text-white hover:text-primary mx-2">Privacy Policy</a>
          <a href="/terms-of-service" className="text-white hover:text-primary mx-2">Terms of Service</a>
          <a href="/contact" className="text-white hover:text-primary mx-2">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;