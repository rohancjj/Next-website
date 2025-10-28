import React from "react";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-white flex flex-col lg:flex-row items-center justify-between gap-12">
      
      {/* Left Section: Image with custom buttons overlay */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <div className="rounded-3xl overflow-hidden relative">
          <Image
            src="/howitwork.png"
            alt="How It Works"
            width={500}
            height={400}
            className="object-cover"
          />
          {/* Custom Buttons overlay */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-5 py-3 rounded-lg shadow-md transition-transform hover:scale-105">
              Discover
            </button>
            <button className="bg-gray-900 text-white font-semibold px-5 py-3 rounded-lg shadow-md transition-transform hover:scale-105">
              Get Our Smart Pay Guide
            </button>
          </div>
        </div>
      </div>

      {/* Right Section: Text and Cards */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Heading: Works Like / A Charm */}
        <h2 className="text-[3.5rem] lg:text-[4rem] font-['Poppins'] font-extrabold text-gray-900 leading-tight">
          <span className="block">Works Like</span>
          <span className="block text-pink-500">A Charm</span>
        </h2>

        {/* Paragraph split into 4 lines */}
        <p className="text-gray-700 text-lg leading-snug mt-2">
          <span className="block">Create customized benefits</span>
          <span className="block">and recognition programs</span>
          <span className="block">aligned with your budget</span>
          <span className="block">and tailored to unique employee needs.</span>
        </p>

        {/* Feature Cards */}
        <div className="flex flex-wrap gap-6 mt-6">
          <div className="bg-white p-5 rounded-xl flex flex-col items-center text-center w-40 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-pink-500 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="font-semibold text-gray-900">Custom Benefits</span>
          </div>

          <div className="bg-white p-5 rounded-xl flex flex-col items-center text-center w-40 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-pink-500 mb-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.285-3.955a1 1 0 00-.364-1.118L2.047 9.382c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.955z" />
            </svg>
            <span className="font-semibold text-gray-900">Employee Recognition</span>
          </div>

          <div className="bg-white p-5 rounded-xl flex flex-col items-center text-center w-40 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-pink-500 mb-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v4H2v-4zM7 8a1 1 0 011-1h2a1 1 0 011 1v7H7V8zM12 5a1 1 0 011-1h2a1 1 0 011 1v10h-4V5z" />
            </svg>
            <span className="font-semibold text-gray-900">Employee Insights</span>
          </div>
        </div>
      </div>
    </section>
  );
}
