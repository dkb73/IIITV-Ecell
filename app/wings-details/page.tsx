import React from 'react';
import Irp from '@/components/irp';
import Ssip from '@/components/ssip';
import Incubation from '@/components/incubation';
import Skilldev from '@/components/skilldev';
import FloatingNav from '@/components/ui/FloatingNax';
import { navItems } from "@/data";

const WingsDetails = () => {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-white">
      <main className="flex-1 py-12 px-6">
          <div className="container mx-auto grid grid-cols-1 gap-12">
            <FloatingNav navItems={navItems}/>
            <Irp/>
            <Ssip/>
            <Incubation/>
            <Skilldev/>
          </div>
      </main>
    </div>
  );
};

export default WingsDetails;