"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-500 text-white mt-12 h-[200px]">
      <section className="px-6 xs:px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 py-4 text-sm">
        <div className="sm:flex-row justify-between items-center gap-4 sm:gap-8 mt-[2rem]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4  border-red-500 mx-auto w-[400px] sm:gap-8 md:text-center lg:text-center xl:text-center sm:text-left">
            <p className="text-white text-[1.2rem] md-text-center  mx-auto">
              Developed with&nbsp;
              <span className="font-bold ">Next.js</span>
              &nbsp;and&nbsp;
              <span className="font-bold ">
                Tailwind CSS
              </span>
            </p>
           
          </div>
          <div className="text-center mt-[1rem]">
          <p className="text-xs text-white text-[1.2rem] text-center md:text-center lg:text-center xl:text-center sm:text-right">
            © 2024 <span className="font-bold text-blue-700 ">Tech</span>
            <span className="font-bold text-accentDarkPrimary ">BLOG</span> All rights reserved.
          </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
