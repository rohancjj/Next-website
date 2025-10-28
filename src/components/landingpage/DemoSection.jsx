"use client";

import React from "react";
import { Play, Video } from "lucide-react";

const DemoSection = () => {
  return (
    <section className="flex items-center justify-center py-32 bg-gray-950">
      {/* === Capsule Container === */}
      <div className="relative w-[90%] max-w-6xl mx-auto rounded-[3rem] bg-black/80 backdrop-blur-3xl border border-white/20 shadow-[0_0_80px_-10px_rgba(255,255,255,0.2)] overflow-hidden">
        
        {/* === Colorful Blurry Floating Shapes === */}
        <div className="absolute top-10 right-10 w-36 h-36 bg-yellow-400/70 rounded-full blur-3xl border border-white/20 opacity-80 animate-pulse mix-blend-screen"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-60 h-60 bg-purple-600/70 rounded-full blur-3xl border border-white/20 opacity-70 animate-pulse mix-blend-screen"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-pink-600/70 rounded-full blur-3xl border border-white/20 opacity-80 animate-pulse mix-blend-screen"></div>
        <div className="absolute bottom-16 right-16 w-56 h-56 bg-cyan-400/70 rounded-full blur-3xl border border-white/20 opacity-70 animate-pulse mix-blend-screen"></div>

        {/* === Glass Card Content === */}
        <div className="relative z-10 px-8 py-24 text-center w-[90%] max-w-4xl mx-auto transition-all duration-500 hover:bg-white/15 hover:shadow-[0_0_100px_-10px_rgba(255,255,255,0.3)]">
          
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl font-light mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">
            Schedule a demo
          </h1>

          {/* Description */}
          <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto">
            Discover how Tedy can boost your benefits and energize your corporate culture.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="flex items-center gap-2 bg-pink-600/80 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium shadow-lg shadow-pink-500/30 transition-all duration-300 backdrop-blur-sm">
              <Play size={18} fill="white" />
              Discover Tedy with an expert
            </button>

            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-medium border border-white/20 backdrop-blur-sm transition-all duration-300">
              <Video size={18} />
              Watch a Tedy demo
            </button>
          </div>

          {/* Footer */}
          <div className="mt-16 border-t border-white/10 pt-4 text-gray-400 text-sm flex flex-col sm:flex-row justify-between items-center gap-2">
            <span>©2025</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Contact</a>
            </div>
            <span className="text-gray-500">Site by JG</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DemoSection;
