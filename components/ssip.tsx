import { Button } from '@mui/material';
import React from 'react';
import Image from 'next/image';

const ssip = () => {
  return (
    <section id="ssip" className="bg-background rounded-lg p-8 shadow-md mb-36">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">SSIP (Student Startup and Innovation Policy)</h2>
        <p>
          The SSIP (Student Startup and Innovation Policy) wing of the Entrepreneurship Cell focuses on fostering
          a culture of innovation and entrepreneurship among the students. It aims to provide support and
          resources to students who are interested in starting their own ventures.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-8">
        <div className="bg-muted rounded-lg p-6">
          <Image
            src="/profilesample.jpg"
            width={200}
            height={200}
            alt="SSIP Lead"
            className="rounded-full mx-auto"
            style={{ aspectRatio: "200/200", objectFit: "cover" }}
          />
          <div className="space-y-2 text-center">
            <h3 className="text-xl font-bold">Rohan Patel</h3>
            <p className="text-muted-foreground">SSIP Lead</p>
            
          </div>
        </div>
        <div className="bg-muted rounded-lg p-6">
          <Image
            src="/profilesample.jpg"
            width={200}
            height={200}
            alt="SSIP Associate Lead"
            className="rounded-full mx-auto"
            style={{ aspectRatio: "200/200", objectFit: "cover" }}
          />
          <div className="space-y-2 text-center">
            <h3 className="text-xl font-bold">Priya Sharma</h3>
            <p className="text-muted-foreground">SSIP Associate Lead</p>
            
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8">
        <div className="bg-background rounded-lg p-6 shadow-md flex flex-col md:flex-row items-start gap-4">
          <Image
            src="/startup1.jpg"
            width={600}
            height={400}
            alt="Startup 1"
            className="rounded-lg object-cover flex-1"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="space-y-2 flex-1">
            <h4 className="text-lg font-bold">Startup 1</h4>
            <p className="text-muted-foreground">A startup that addresses a specific industry need.</p>
            <div className="flex items-center gap-2">
              <Image
                src="/profilesample.jpg"
                width={50}
                height={50}
                alt="Student 1"
                className="rounded-full"
                style={{ aspectRatio: "50/50", objectFit: "cover" }}
              />
              <div>
                <p className="font-medium">Isha Patel</p>
                <p className="text-muted-foreground text-sm">IRP Lead</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/profilesample.jpg"
                width={50}
                height={50}
                alt="Student 2"
                className="rounded-full"
                style={{ aspectRatio: "50/50", objectFit: "cover" }}
              />
              <div>
                <p className="font-medium">Arjun Sharma</p>
                <p className="text-muted-foreground text-sm">IRP Associate Lead</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg p-6 shadow-md flex flex-col md:flex-row items-start gap-4">
          <Image
            src="/startup2.jpg"
            width={600}
            height={400}
            alt="Startup 2"
            className="rounded-lg object-cover flex-1"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="space-y-2 flex-1">
            <h4 className="text-lg font-bold">Startup 2</h4>
            <p className="text-muted-foreground">
              Another startup that showcases the capabilities of the SSIP wing.
            </p>
            <div className="flex items-center gap-2">
              <Image
                src="/profilesample.jpg"
                width={50}
                height={50}
                alt="Student 1"
                className="rounded-full"
                style={{ aspectRatio: "50/50", objectFit: "cover" }}
              />
              <div>
                <p className="font-medium">Rohan Patel</p>
                <p className="text-muted-foreground text-sm">SSIP Lead</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/profilesample.jpg"
                width={50}
                height={50}
                alt="Student 2"
                className="rounded-full"
                style={{ aspectRatio: "50/50", objectFit: "cover" }}
              />
              <div>
                <p className="font-medium">Priya Sharma</p>
                <p className="text-muted-foreground text-sm">SSIP Associate Lead</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg p-6 shadow-md flex flex-col md:flex-row items-start gap-4">
          <Image
            src="/startup1.jpg"
            width={600}
            height={400}
            alt="Startup 3"
            className="rounded-lg object-cover flex-1"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="space-y-2 flex-1">
            <h4 className="text-lg font-bold">Startup 3</h4>
            <p className="text-muted-foreground">
              A third startup that demonstrates the impact of the SSIP wing.
            </p>
            <div className="flex items-center gap-2">
              <Image
                src="/profilesample.jpg"
                width={50}
                height={50}
                alt="Student 1"
                className="rounded-full"
                style={{ aspectRatio: "50/50", objectFit: "cover" }}
              />
              <div>
                <p className="font-medium">Rohan Patel</p>
                <p className="text-muted-foreground text-sm">SSIP Lead</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/profilesample.jpg"
                width={50}
                height={50}
                alt="Student 2"
                className="rounded-full"
                style={{ aspectRatio: "50/50", objectFit: "cover" }}
              />
              <div>
                <p className="font-medium">Priya Sharma</p>
                <p className="text-muted-foreground text-sm">SSIP Associate Lead</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Button className="w-full">View More Startups</Button>
        </div>
      </div>
    </section>
  );
};

export default ssip;