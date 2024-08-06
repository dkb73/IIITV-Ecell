import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
// Assuming Button component is in the same directory


const header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 md:px-8 lg:px-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="#" className="text-xl font-bold" prefetch={false}>
            E-Cell IIIT Vadodara
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              About Us
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Wings
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Initiatives
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Testimonials
            </Link>
          </nav>
          <Button className="hidden md:inline-flex">
            Join Us
          </Button>
        </div>
      </header>
  )
}

export default header