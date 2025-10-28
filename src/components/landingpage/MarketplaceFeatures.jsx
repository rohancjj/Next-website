"use client";

import React from "react";
import { ShoppingCart, Store, BarChart3, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Seamless Store Setup",
    description:
      "Launch your store in minutes — upload products, set prices, and start selling instantly.",
    icon: <Store className="w-10 h-10 text-green-700" />,
    color: "bg-green-50",
  },
  {
    title: "Smart Sales Analytics",
    description:
      "Track your sales, revenue, and customer insights with AI-powered dashboards that help you grow faster.",
    icon: <BarChart3 className="w-10 h-10 text-yellow-700" />,
    color: "bg-yellow-50",
  },
  {
    title: "Instant Checkout & Secure Payments",
    description:
      "Delight your buyers with a smooth checkout experience and trusted, instant payment processing.",
    icon: <ShoppingCart className="w-10 h-10 text-blue-700" />,
    color: "bg-blue-50",
  },
];

const MarketplaceFeatures = () => {
  return (
    <section className="py-24 bg-[#fafaf9] text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* === Header === */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-5xl font-extrabold leading-tight mb-4">
              From Idea to Online Store — <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Build Your Marketplace with Ease
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Empower creators, sellers, and buyers to connect in one unified platform.
              Create, sell, and grow your brand — all in one place.
            </p>
          </div>
        </div>

        {/* === Feature Cards === */}
        <div className="grid gap-0 md:grid-cols-3 justify-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative flex flex-col justify-between p-10 h-[460px] w-[360px] mx-auto rounded-[1.8rem] shadow-[0_6px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.12)] transition-all duration-500 ${feature.color}`}
            >
              {/* === Floating Arrow Icon === */}
              <motion.div
                whileHover={{
                  rotate: 45,
                  scale: 1.15,
                  x: 5,
                  y: -5,
                  backgroundColor: "rgba(255,255,255,0.9)",
                }}
                transition={{ type: "spring", stiffness: 220, damping: 14 }}
                className="absolute top-5 right-5 bg-white/70 p-3 rounded-full backdrop-blur-md border border-gray-200 shadow-md cursor-pointer"
              >
                <ArrowUpRight className="w-5 h-5 text-gray-800" />
              </motion.div>

              {/* === Icon === */}
              <div className="mb-6">{feature.icon}</div>

              {/* === Title === */}
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>

              
              <p className="text-gray-700 text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketplaceFeatures;
