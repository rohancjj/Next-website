"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Check } from "lucide-react";

export default function Form({
  type = "login",
  title = "Sign In",
  buttonText = "Sign In",
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("monthly");
  const uploadRef = useRef(null);

  useEffect(() => {
    if (type === "upload" && window.HSFileUpload) {
      window.HSFileUpload.autoInit();

      const fileUpload = uploadRef.current;
      const destroyBtn = fileUpload.querySelector("#hs-destroy-file-upload");
      const reinitBtn = fileUpload.querySelector("#hs-auto-init-file-upload");

      destroyBtn.addEventListener("click", () => {
        const instance = window.HSFileUpload.getInstance(fileUpload, true);
        if (instance) instance.element.destroy();
        destroyBtn.disabled = true;
        reinitBtn.disabled = false;
      });

      reinitBtn.addEventListener("click", () => {
        window.HSFileUpload.autoInit();
        destroyBtn.disabled = false;
        reinitBtn.disabled = true;
      });
    }
  }, [type]);

  switch (type) {
    // ====== LOGIN FORM ======
    case "login":
      return (
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onSubmit={(e) => e.preventDefault()}
          className="relative flex flex-col gap-5 bg-gradient-to-br from-white/90 to-blue-50 backdrop-blur-lg p-8 w-[420px] rounded-3xl font-sans shadow-2xl border border-blue-100 hover:shadow-blue-200 transition-all duration-500"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center tracking-tight">
            {title}
          </h2>

          <div>
            <label className="text-gray-700 font-medium mb-1 block">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 rounded-2xl h-12 px-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium mb-1 block">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                className="w-full border border-gray-300 rounded-2xl h-12 px-4 pr-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
              <div
                className="absolute right-3 top-3.5 cursor-pointer text-gray-500 hover:text-blue-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>
          </div>

          <div className="flex justify-between text-sm text-gray-700">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-blue-600 w-4 h-4" />
              Remember me
            </label>
            <span className="text-blue-600 font-medium cursor-pointer hover:underline">
              Forgot password?
            </span>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            type="submit"
            className="mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-indigo-600 hover:to-blue-600 transition-all shadow-md hover:shadow-lg"
          >
            {buttonText}
          </motion.button>

          <p className="text-center text-sm text-gray-700 mt-2">
            Don’t have an account?{" "}
            <span className="text-blue-600 font-medium cursor-pointer hover:underline">
              Sign Up
            </span>
          </p>
        </motion.form>
      );

    // ====== PRO FORM ======
    case "pro":
      return (
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex flex-col gap-6 bg-gradient-to-br from-white/90 to-green-50 backdrop-blur-lg p-8 w-[420px] rounded-3xl font-sans shadow-2xl border border-green-100 hover:shadow-green-200 transition-all duration-500"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center tracking-tight">
            Go <span className="text-green-600">PRO</span> 🚀
          </h2>
          <p className="text-center text-gray-600 text-sm leading-relaxed">
            Grow your customer base faster with our premium marketing tools and automations.
          </p>
          <div className="flex justify-between items-center bg-gray-100 rounded-2xl p-1">
            {["monthly", "annual"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`w-1/2 py-2 font-semibold rounded-xl transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-green-500 text-white shadow"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-3 mt-2">
            <span className="font-semibold text-gray-800 text-sm">What’s included:</span>
            <ul className="flex flex-col gap-2">
              {[
                "Grow your customer base with social tools",
                "Automate emails to promote your products",
                "Analyze engagement & boost conversions",
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-600" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 text-center">
            <div className="text-4xl font-extrabold text-gray-900 relative inline-block">
              <sup className="text-sm align-top">$</sup>
              {activeTab === "monthly" ? "9" : "79"}
              <sub className="text-sm text-gray-500 ml-1">
                /{activeTab === "monthly" ? "mo" : "yr"}
              </sub>
            </div>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            type="button"
            className="mt-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-600 transition-all shadow-md hover:shadow-lg"
          >
            Upgrade to PRO
          </motion.button>
          <p className="text-center text-xs text-gray-500 mt-2">
            Cancel anytime. 30-day money-back guarantee.
          </p>
        </motion.form>
      );

    // ====== UPLOAD FORM ======
    case "upload":
      return (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex flex-col gap-4 p-6 bg-white rounded-3xl shadow-2xl border border-gray-200"
          ref={uploadRef}
        >
          <h2 className="text-2xl font-bold text-gray-900 text-center">{title}</h2>

          <div
            id="hs-file-upload-to-destroy"
            data-hs-file-upload='{
              "url": "/upload",
              "extensions": {
                "default": { "class": "shrink-0 size-5" },
                "xls": { "class": "shrink-0 size-5" },
                "zip": { "class": "shrink-0 size-5" },
                "csv": { "class": "shrink-0 size-5" }
              }
            }'
          >
            <div
              className="cursor-pointer p-12 flex justify-center bg-white border border-dashed border-gray-300 rounded-xl"
              data-hs-file-upload-trigger=""
            >
              <div className="text-center">
                <span className="inline-flex justify-center items-center size-16">
                  <svg className="shrink-0 w-16 h-auto" width="71" height="51" viewBox="0 0 71 51" fill="none">
                    <path d="M6.55 8.74L17.71 6.88V40.73L12.8 41.77C9.51 42.46 6.3 40.32 5.67 37.01L1.64 15.78C1.01 12.47 3.23 9.29 6.55 8.74Z" stroke="currentColor" strokeWidth="2"></path>
                    <path d="M64.45 8.74L53.29 6.88V40.73L58.19 41.77C61.48 42.46 64.7 40.32 65.33 37.01L69.36 15.78C69.98 12.47 67.77 9.29 64.45 8.74Z" stroke="currentColor" strokeWidth="2"></path>
                  </svg>
                </span>
                <div className="mt-4 flex flex-wrap justify-center text-sm text-gray-600">
                  <span className="pe-1 font-medium text-gray-800">Drop your file here or</span>
                  <span className="bg-white font-semibold text-blue-600 hover:text-blue-700 rounded-lg hover:underline">browse</span>
                </div>
                <p className="mt-1 text-xs text-gray-400">Pick a file up to 2MB.</p>
              </div>
            </div>

            <div className="mt-4 space-y-2" data-hs-file-upload-previews=""></div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <button
              type="button"
              id="hs-destroy-file-upload"
              className="py-1 px-2 inline-flex items-center gap-x-1 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50"
            >
              Destroy file upload
            </button>
            <button
              type="button"
              id="hs-auto-init-file-upload"
              className="py-1 px-2 inline-flex items-center gap-x-1 text-sm rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200"
              disabled
            >
              Reinitialize file upload
            </button>
          </div>
        </motion.div>
      );

    // ====== DEFAULT ======
    default:
      return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-sm text-center">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm mt-1">
            No form type selected. Use type="login", "pro", or "upload".
          </p>
        </div>
      );
  }
}
