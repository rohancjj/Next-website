import React from "react";

export default function BuyersHero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text */}
        <div className="max-w-xl">
          <h1 className="text-5xl sm:text-6xl font-serif tracking-tight text-gray-900 mb-6">
            Buyers
          </h1>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Elevate your shopping experience with our SaaS marketplace —
            explore trusted sellers, manage budgets, and enjoy seamless,
            personalized buying with confidence.
          </p>

          <div className="space-y-8">
            <Feature text="Browse curated categories tailored to your interests" />
            <Feature text="Set budgets, frequency, and delivery preferences" />
            <Feature text="Save favorite sellers and follow their new listings" />
            <Feature text="One-click refunds, real-time order tracking & support" />
          </div>
        </div>

        {/* Right Column - Image + Overlay */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="w-full max-w-lg overflow-hidden rounded-[2rem]">
            <img
              src="/cutomers.png"
              alt="buyers"
              className="w-full h-[520px] object-cover rounded-[2rem] transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* Floating Categories Card */}
          <div className="absolute right-10 bottom-8 bg-white/90 rounded-2xl shadow-xl p-5 w-60 backdrop-blur-md border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-800 mb-3">
              Your Categories
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-md grid place-items-center bg-pink-50">
                  🛍️
                </span>
                <span>Fashion</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-md grid place-items-center bg-green-50">
                  📱
                </span>
                <span>Electronics</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-md grid place-items-center bg-purple-50">
                  🏠
                </span>
                <span>Home & Living</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <span className="w-8 h-8 rounded-md grid place-items-center bg-blue-50">
                  💄
                </span>
                <span>Beauty</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="flex-none w-10 h-10 rounded-lg bg-green-100 grid place-items-center group-hover:bg-green-200 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <p className="text-gray-800 text-base font-medium leading-relaxed">
        {text}
      </p>
    </div>
  );
}
