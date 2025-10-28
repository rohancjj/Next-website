"use client";

import React from "react";
import { ShoppingCart, ShieldCheck, Star } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section className="bg-purple-100 py-24 px-6 text-center">
      {/* === Heading === */}
      <h2 className="text-4xl font-bold mb-4 text-gray-900">
        Empower Your Online Store
      </h2>
      <p className="max-w-2xl mx-auto text-gray-700 mb-16">
        Our platform allows anyone to open their own online shop with ease.
        Sellers can manage products, inventory, and orders, while buyers enjoy
        a seamless shopping experience—all in one integrated SaaS solution.
      </p>

      {/* === Benefit Cards === */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* === Card 1 === */}
        <div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-lg transition">
          <ShoppingCart className="mx-auto mb-6 text-purple-600 w-12 h-12" />
          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            Easy Store Setup
          </h3>
          <p className="text-gray-600">
            Launch your online shop in minutes with our intuitive setup
            process, customizable templates, and powerful store management
            tools.
          </p>
        </div>

        {/* === Card 2 === */}
        <div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-lg transition">
          <ShieldCheck className="mx-auto mb-6 text-purple-600 w-12 h-12" />
          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            Secure & Reliable
          </h3>
          <p className="text-gray-600">
            All transactions are encrypted, and we protect your store and
            customer data with enterprise-grade security standards.
          </p>
        </div>

        {/* === Card 3 === */}
        <div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-lg transition">
          <Star className="mx-auto mb-6 text-purple-601 w-12 h-12" />
          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            24/7 Support
          </h3>
          <p className="text-gray-600">
            Our expert support team is available around the clock to help you
            configure your store, handle orders, and grow your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
