"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Patel",
    title: "Clothing Store Owner",
    image: "/seller1.jpg",
    background:
      "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
    quote:
      "Selling became effortless! The platform made my business digital in no time. Tracking orders and earnings is just so smooth.",
    badge: "Top Seller",
  },
  {
    name: "Aisha Khan",
    title: "Handmade Crafts",
    image: "/seller2.jpg",
    background:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
    quote:
      "Managing my shop and inventory has never been easier — everything is automated and my customers love the seamless checkout.",
    badge: "Verified Seller",
  },
  {
    name: "Rahul Mehta",
    title: "Electronics Retailer",
    image: "/seller3.jpg",
    background:
      "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg",
    quote:
      "Payments arrive in days, not weeks. The analytics really helped me grow my sales by understanding what my customers love.",
    badge: "5★ Rated",
  },
  {
    name: "Neha Verma",
    title: "Jewelry Designer",
    image: "/seller4.jpg",
    background:
      "https://images.pexels.com/photos/3184288/pexels-photo-3184288.jpeg",
    quote:
      "Love how easy it is to customize my store. I can launch new collections in minutes with beautiful layouts.",
    badge: "Featured Seller",
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const timeoutRef = useRef(null);

  // Auto-slide logic
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 6000); // every 6 seconds
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  const handleNext = () => {
    setDirection("right");
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative py-28 overflow-hidden bg-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          What Our Sellers Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Real stories from entrepreneurs growing their business with us.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative flex justify-center items-center">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute left-8 top-1/2 -translate-y-1/2 backdrop-blur-md bg-white/60 hover:bg-white/80 border border-gray-200 p-4 rounded-full shadow-lg transition transform hover:scale-110"
        >
          <ChevronLeft className="text-gray-800 w-6 h-6" />
        </button>

        {/* Animated Card Wrapper */}
        <div className="overflow-hidden w-[95%] sm:w-[800px] h-[480px] relative rounded-[2.5rem]">
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
              direction === "right"
                ? "translate-x-0 animate-slide-in-right"
                : "translate-x-0 animate-slide-in-left"
            }`}
          >
            <Card testimonial={testimonials[index]} />
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-8 top-1/2 -translate-y-1/2 backdrop-blur-md bg-white/60 hover:bg-white/80 border border-gray-200 p-4 rounded-full shadow-lg transition transform hover:scale-110"
        >
          <ChevronRight className="text-gray-800 w-6 h-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="relative flex justify-center gap-3 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-blue-600 w-6" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0%);
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0%);
            opacity: 1;
          }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease forwards;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
};

/* === Card Component === */
const Card = ({ testimonial }) => {
  const t = testimonial;
  const fallbackImage = "/default-user.png"; // Add a local dummy image in /public

  return (
    <div className="relative w-full h-full bg-white overflow-hidden rounded-[2.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.12)] border border-gray-100">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${t.background})`,
          filter: "brightness(0.5)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-10 text-white">
        <div className="flex items-center gap-5 mb-6 justify-center">
          <Image
            src={t.image || fallbackImage}
            alt={t.name}
            width={90}
            height={90}
            className="rounded-full object-cover border-4 border-white shadow-xl"
          />
          <div className="text-left">
            <h3 className="text-2xl font-semibold">{t.name}</h3>
            <p className="text-gray-200 text-sm">{t.title}</p>
          </div>
        </div>

        {t.badge && (
          <span className="inline-block mb-5 px-4 py-1 text-sm font-semibold rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-sm">
            {t.badge}
          </span>
        )}

        <p className="max-w-xl italic text-lg leading-relaxed opacity-90">
          “{t.quote}”
        </p>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
