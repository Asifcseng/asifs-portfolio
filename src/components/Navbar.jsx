import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-current  shadow-md fixed top-0 left-0 right-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-white">Asif Shaikh</div>

        {/* Desktop */}
        <div className=" hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-primary transition font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            size="icon"
          >
            {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-white border-t border-gray-200 px-4 pb-4"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-2 text-gray-700 hover:text-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
