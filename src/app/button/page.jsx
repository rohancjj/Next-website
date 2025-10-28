"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/landingpage/Navbar";
import HowItWorks from "@/components/landingpage/HowItWorks";
import BuyersHero from "@/components/landingpage/BuyersHero";
import SellerSection from "@/components/landingpage/SellerSection";
import MarketplaceFeatures from "@/components/landingpage/MarketplaceFeatures";
import { Play, Video } from "lucide-react";

// ✅ Client-only imports (prevent hydration mismatch)
const BenefitsSection = dynamic(
  () => import("@/components/landingpage/BenefitsSection"),
  { ssr: false }
);

const TestimonialCarousel = dynamic(
  () => import("@/components/landingpage/TestimonialCarousel"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Overview Section */}
      <section
        id="overview"
        className="h-screen flex items-center justify-center bg-gray-50"
      >
        <h1 className="text-4xl font-bold">Overview Section</h1>
      </section>

      {/* ✅ Replaced Features Section */}
      <section id="features" className="bg-white py-24">
        <MarketplaceFeatures />
      </section>

      {/* ✅ Buyers Section */}
      <section id="buyers" className="bg-white py-24">
        <BuyersHero />
      </section>

      {/* ✅ Seller Section */}
      <section id="sellers" className="bg-white py-24">
        <SellerSection />
      </section>

      {/* ✅ Client-only Animated Benefits Section */}
      <BenefitsSection />

      {/* How It Works Section */}
      <section id="howitworks" className="bg-gray-50 py-16 px-6">
        <HowItWorks />
      </section>

      {/* ✅ Client-only Testimonial Section */}
      <section id="testimonial" className="bg-white">
        <TestimonialCarousel />
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="h-screen flex items-center justify-center bg-gray-50"
      >
        <h1 className="text-4xl font-bold">Pricing Section</h1>
      </section>

      {/* Demo Section */}
      <section
        id="demo"
        className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden"
      >
        {/* === Colorful Blurry Background Shapes === */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-400 rounded-lg blur-3xl opacity-80 rotate-12 animate-pulse mix-blend-screen"></div>
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-600 rounded-xl blur-3xl opacity-70 animate-pulse mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-600 rounded-full blur-3xl opacity-80 animate-pulse mix-blend-screen"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-400 rounded-lg rotate-45 blur-3xl opacity-70 animate-pulse mix-blend-screen"></div>

        {/* === Glass Card === */}
        <div className="relative z-10 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl shadow-[0_0_80px_-10px_rgba(255,255,255,0.2)] px-8 py-20 text-center w-[90%] max-w-4xl transition-all duration-500 hover:bg-white/15 hover:shadow-[0_0_100px_-10px_rgba(255,255,255,0.3)]">
          <h1 className="text-5xl sm:text-6xl font-light mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">
            Schedule a demo
          </h1>

          <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto">
            Discover how our SaaS platform empowers buyers and sellers to connect
            seamlessly and grow together.
          </p>

          {/* === Buttons === */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="flex items-center gap-2 bg-pink-600/80 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium shadow-lg shadow-pink-500/30 transition-all duration-300 backdrop-blur-sm">
              <Play size={18} fill="white" />
              Discover the platform
            </button>

            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-medium border border-white/20 backdrop-blur-sm transition-all duration-300">
              <Video size={18} />
              Watch a demo
            </button>
          </div>

          {/* === Footer === */}
          <div className="mt-16 border-t border-white/10 pt-4 text-gray-400 text-sm flex flex-col sm:flex-row justify-between items-center gap-2">
            <span>©2025</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">
                Terms
              </a>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </div>
            <span className="text-gray-500">Built by JG</span>
          </div>
        </div>
      </section>
    </>
  );
}
