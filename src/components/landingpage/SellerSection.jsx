"use client";

import Image from "next/image";
import { Check } from "lucide-react";

const SellerSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-12 py-20 px-6 md:px-20 bg-white">
      {/* === Left: Image Section === */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        {/* === Main Image === */}
        <div className="relative rounded-[2rem] overflow-hidden isolate">
          <Image
            src="/seller.png" // <-- your image path
            alt="Seller dashboard"
            width={600}
            height={400}
            className="object-cover w-full h-full rounded-[2rem] transition-all duration-300"
            priority
          />

          {/* === Subtle Fade Around Edges (only edges, not entire image) === */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/60 pointer-events-none"></div>
        </div>

        {/* === Floating Card === */}
        <div className="absolute bottom-8 left-6 bg-white rounded-xl p-4 w-40 border border-gray-100 backdrop-blur-sm">
          <h4 className="text-gray-700 font-semibold text-sm mb-2">Your Claims</h4>
          <div className="flex justify-between items-center mb-1">
            <span className="text-gray-800 text-sm">$50</span>
            <span className="text-xs bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">
              Received
            </span>
          </div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-gray-800 text-sm">$100</span>
            <span className="text-xs bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">
              Received
            </span>
          </div>
          <div className="flex justify-between items-center opacity-40">
            <span className="text-gray-800 text-sm">$80</span>
            <span className="text-xs bg-gray-50 text-gray-500 px-2 py-0.5 rounded-full">
              Received
            </span>
          </div>
        </div>
      </div>

      {/* === Right: Text Section === */}
      <div className="w-full md:w-1/2">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">Seller</h2>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Flexible tools and easy-to-use features that help sellers manage their
          shops and rewards efficiently — built to match your business goals.
        </p>

        <div className="space-y-6">
          {[
            "Instant access to your seller dashboard through a simple, easy-to-use app",
            "Sell products to customers seamlessly through verified merchants",
            "Track your earnings and claims confidentially in just a few clicks",
            "Get payouts within a few days via secure bank transfer",
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="bg-teal-50 p-1.5 rounded-full">
                <Check className="text-teal-600 w-5 h-5" />
              </div>
              <p className="text-gray-700 text-base">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellerSection;
