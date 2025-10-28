import React from "react";

export default function Button({ type = "google", text = "Click Me" }) {
  switch (type) {
    // ===== Google-style Button =====
    case "google":
      return (
        <button className="relative flex items-center gap-3 px-6 py-2 text-sm font-bold text-gray-800 uppercase rounded-lg border border-black/25 bg-white transition-transform duration-500 hover:scale-105">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 256 262"
            className="h-6"
          >
            <path
              fill="#4285F4"
              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
            ></path>
            <path
              fill="#34A853"
              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
            ></path>
            <path
              fill="#FBBC05"
              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
            ></path>
            <path
              fill="#EB4335"
              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
            ></path>
          </svg>
          {text}
        </button>
      );

    // ===== Gradient Hover Button =====
    case "gradient":
      return (
        <button className="w-32 h-10 rounded-full bg-gradient-to-br from-pink-400 to-red-500 shadow-md text-white text-base font-bold transition-all duration-300 transform hover:scale-105 active:opacity-80">
          {text}
        </button>
      );

    // ===== Animated SVG Send Button =====
    case "send":
  return (
    <button className="relative flex items-center overflow-hidden bg-blue-600 text-white px-2 py-2 rounded-xl text-lg font-medium transition-transform duration-200 active:scale-95 group">
      {/* Arrow wrapper */}
      <div className="svg-wrapper-2 relative flex items-center justify-center transition-transform duration-200 group-hover:animate-bounce">
        <div className="svg-wrapper transition-transform duration-300 group-hover:translate-x-15 group-hover:rotate-45 group-hover:scale-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M1.941 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Text */}
      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-50">
        {text}
      </span>
    </button>
  );
  
  // ===== Sliding Highlight Button =====
case "slide":
  return (
    <button className="relative group bg-white w-40 h-14 rounded-2xl text-black text-xl font-semibold flex items-center overflow-hidden">
      {/* Sliding highlight + arrow */}
      <div className="absolute left-1 top-[4px] h-12 w-1/4 bg-green-400 rounded-xl flex items-center justify-center z-10 transition-all duration-500 group-hover:w-[152px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          className="w-6 h-6"
        >
          <path
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            fill="#000000"
          />
          <path
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            fill="#000000"
          />
        </svg>
      </div>

      {/* Text */}
      <p className="ml-[60px] transition-transform duration-300 group-hover:translate-x-4">
        {text}
      </p>
    </button>
  );


    // ===== Default Button =====
    default:
      return (
        <button className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600">
          {text}
        </button>
      );
  }
}
