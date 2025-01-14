"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between  xs:flex-row py-4 px-6 border-b-2 border-accentDarkSecondary sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
      <div className=''>
      <Link href="/" className="text-3xl font-bold">
        <span className="text-dark dark:text-light text-blue-700">Tech</span>
        <span className=" ml-1">BLOG</span>
      </Link>
      </div>
      <nav className="hidden md:flex items-center gap-x-8 font-bold uppercase ">
        <Link href="/" className="text-dark dark:text-light hover:text-accentDarkPrimary hover:text-red-500">Home</Link>
      </nav>
   
      <button onClick={toggleDropdown} className="md:hidden text-dark dark:text-light ">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-16 right-6 w-48 bg-white dark:bg-black border border-accentDarkSecondary rounded-lg shadow-lg md:hidden">
          <Link href="/" className="block px-4 py-2 text-black dark:text-light hover:bg-accentDarkPrimary hover:text-white">Home</Link>
          <Link href="/about" className="block px-4 py-2 text-black dark:text-light hover:bg-accentDarkPrimary hover:text-white">About</Link>
          <Link href="/blog" className="block px-4 py-2 text-black dark:text-light hover:bg-accentDarkPrimary hover:text-white">Blog</Link>
        </div>
      )}
    </header>
  );
}
