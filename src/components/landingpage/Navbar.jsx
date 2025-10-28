import Button from "../ui/Button";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Overview", "Features", "How It Works", "Pricing", "Testimonial", "Demo"];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-pink-500 rounded-full animate-pulse"></div>
          <div className="w-7 h-7 bg-teal-400 rounded-full animate-pulse"></div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-900">MySaaS</span>
            <span className="text-sm text-gray-500">Next-gen SaaS Solutions</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
              className="text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button type="gradient" text="Request a Demo" />
          <Button type="black" text="Sign In" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 text-2xl focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
              className="text-gray-700 hover:text-gray-900 font-medium transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <Button type="gradient" text="Request a Demo" />
          <Button type="black" text="Sign In" />
        </div>
      </div>
    </nav>
  );
}
