import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 mb-40 ">
      <div className="container mx-auto px-6 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input id="name" type="text" placeholder="Enter your name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input id="email" type="email" placeholder="Enter your email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" placeholder="Enter your message" rows={5} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="text-muted-foreground text-lg mb-4">
              Have a question or want to connect? We would love to hear from you!
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MailIcon className="h-6 w-6 text-primary" />
                <a href="mailto:ecell@iiitv.ac.in" className="text-muted-foreground hover:underline">
                  ecell@iiitv.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default ContactUs;