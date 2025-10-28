import React from "react";

export default function Card({ type = "basic", title = "Card Title", description = "This is a sample description.", image }) {
  switch (type) {
    // ===== Basic Card =====
    case "basic":
      return (
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />}
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      );

    // ===== Gradient Card =====
    case "gradient":
      return (
        <div className="p-6 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
          {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />}
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-white/90">{description}</p>
        </div>
      );

    // ===== Slide Highlight Card =====
    case "slide":
      return (
        <div className="relative group p-6 bg-white w-72 rounded-2xl shadow-md overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1/4 bg-green-400 rounded-r-xl transition-all duration-500 group-hover:w-72"></div>
          <div className="relative z-10">
            {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />}
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      );

    // ===== Icon Animated Card =====
    case "icon":
      return (
        <div className="relative flex items-center gap-4 p-6 bg-blue-600 text-white rounded-xl overflow-hidden group transform transition-all duration-300 hover:scale-105">
          <div className="flex items-center justify-center p-4 bg-white rounded-full text-blue-600 group-hover:animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M1.941 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      );

    // ===== Hover-Bounce Image Card =====
    case "hover-bounce":
      return (
        <div className="p-6 bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-40 object-cover rounded-lg mb-4 transform transition-transform duration-500 group-hover:scale-105"
            />
          )}
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      );

    // ===== Uiverse.io Style Card =====
    case "uiverse":
      return (
        <div className="card relative overflow-hidden text-left rounded-lg max-w-[290px] shadow-lg bg-white">
          <button type="button" className="dismiss absolute right-2 top-2 flex items-center justify-center p-2 w-8 h-8 rounded-md border border-gray-300 text-black hover:bg-red-600 hover:border-red-600 hover:text-white transition-all">
            ×
          </button>
          <div className="header p-5 pt-6">
            <div className="image flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-green-100 animate-pulse mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-green-500">
                <path stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20 7L9 18L4 13" />
              </svg>
            </div>
            <div className="content text-center">
              <span className="title text-green-800 font-semibold text-base">{title}</span>
              <p className="message text-gray-600 text-sm mt-2">{description}</p>
            </div>
            <div className="actions mt-3 flex flex-col gap-2">
              <button className="history bg-green-600 text-white py-2 px-4 rounded-md w-full">History</button>
              <button className="track border border-gray-300 text-gray-800 py-2 px-4 rounded-md w-full bg-white">Track my package</button>
            </div>
          </div>
        </div>
      );

    // ===== Flip Card (Credit Card Style) =====
    case "flip":
      return (
        <div className="w-60 h-40 perspective-1000">
          <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
            {/* Front Side */}
            <div className="absolute w-full h-full rounded-lg bg-gray-900 text-white shadow-lg backface-hidden p-4 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <div className="chip w-10 h-8 bg-yellow-400 rounded-sm"></div>
                <span className="text-xs font-semibold tracking-widest">{title}</span>
              </div>

              <div className="flex flex-col justify-center items-start mt-2">
                <p className="text-sm font-mono tracking-widest mb-1">**** **** **** 1234</p>
                <div className="flex justify-between w-full">
                  <p className="text-xs font-bold">{description}</p>
                  <p className="text-xs font-bold">12/24</p>
                </div>
              </div>

              <div className="flex justify-end">
                <svg className="logo w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"></path>
                  <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"></path>
                  <path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"></path>
                </svg>
              </div>
            </div>

            {/* Back Side */}
            <div className="absolute w-full h-full rounded-lg bg-gray-900 text-white shadow-lg backface-hidden rotate-y-180 p-4 flex flex-col justify-start">
              {/* Magnetic strip */}
              <div className="w-full h-8 bg-black mt-2 mb-6 rounded-sm"></div>
              {/* Signature & CVV */}
              <div className="flex justify-between items-center">
                <div className="w-32 h-6 bg-white rounded-sm flex items-center justify-end px-2">
                  <p className="text-black text-xs font-bold">123</p>
                </div>
                <p className="text-xs font-semibold">CVV</p>
              </div>
              <p className="text-xs mt-4">For customer use only</p>
            </div>
          </div>
        </div>
      );

    // ===== Default Card =====
    default:
      return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      );
  }
}
