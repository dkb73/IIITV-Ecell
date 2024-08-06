"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
    subItems?: { name: string; link: string }[];
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  return (
    <>
      {/* Mobile Menu Button Row */}
      <div className="fixed top-0 left-0 right-0 z-1000 flex justify-end items-center bg-white bg-opacity-90 p-4 md:hidden">
        <IconButton onClick={toggleMenu}>
          <MenuIcon />
        </IconButton>
      </div>

      {/* Mobile Sliding Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={cn("fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50", className)}
          >
            <div className="p-4 flex justify-between items-center">
              <Link href="/#home">
                <Image
                  src="/ecelllogo.jpg" // Replace with the actual path to your logo
                  alt="E-cell Logo"
                  width={40} // Adjust the width as needed
                  height={40} // Adjust the height as needed
                  className="mb-4" // Optional: Add margin to the bottom for spacing
                />
              </Link>
              <IconButton onClick={toggleMenu}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className="p-4">
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center">
                    <Link href={item.link} className="block py-2 px-4 text-lg hover:bg-gray-200">
                      {item.icon && <span className="mr-2">{item.icon}</span>}
                      {item.name}
                    </Link>
                    {item.subItems && (
                      <IconButton onClick={toggleMobileDropdown}>
                        <ArrowDropDownIcon />
                      </IconButton>
                    )}
                  </div>
                  {item.subItems && mobileDropdownOpen && (
                    <div className="mt-2 w-full bg-white shadow-lg rounded-md z-50">
                      {item.subItems.map((subItem, subIdx) => (
                        <Link
                          key={`subLink=${subIdx}`}
                          href={subItem.link}
                          className="block px-4 py-2 text-black hover:bg-gray-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navbar */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: 0,
          }}
          animate={{
            y: 0,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "hidden md:flex w-full fixed top-0 inset-x-0 mx-auto border-b border-gray-100 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 py-5 items-center justify-between",
            className
          )}
        >
          <Link href="/#home">
            <Image
              src="/ecelllogo.jpg" // Replace with the actual path to your logo
              alt="E-cell Logo"
              width={50} // Adjust the width as needed
              height={50} // Adjust the height as needed
              className="mr-4" // Optional: Add margin to the right for spacing
            />
          </Link>
          <div className="flex space-x-4 ml-auto">
            {navItems.map((navItem: any, idx: number) => (
              <div key={`link=${idx}`} className="relative flex items-center">
                <Link
                  href={navItem.link}
                  className={cn(
                    "relative text-black dark:text-neutral-50 items-center flex space-x-1 hover:text-blue-500 dark:hover:text-neutral-300"
                  )}
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="hidden sm:block">{navItem.name}</span>
                </Link>
                {navItem.subItems && (
                  <>
                    <IconButton onClick={toggleDropdown}>
                      <ArrowDropDownIcon />
                    </IconButton>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                        {navItem.subItems.map((subItem: { name: string; link: string }, subIdx: number) => (
                          <Link
                            key={`subLink=${subIdx}`}
                            href={subItem.link}
                            className="block px-4 py-2 text-black hover:bg-gray-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default FloatingNav;