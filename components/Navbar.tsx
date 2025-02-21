"use client"; 

import { useState } from "react";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);  // Track Services dropdown hover state
  
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href ? "bg-purple-800 text-white" : "";
  };

  // Navigation Items
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services", dropdown: true },
    { label: "Reviews", href: "/reviews"},
    { label: "Blog", href: "/blog" },
    { label: "Quote", href: "/quote" },
    { label: "Contact", href: "/contact" },
  ];

  const handleServiceClick = () => {
    setIsServicesHovered(false);  
  };

  return (
    <nav className="fixed w-full z-50 border-b bg-purple-700  px-4 transition-all duration-300">
    <div>
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <Sparkles className="h-6 w-6 text-white" />
              <span className="text-xl font-bold text-white">CleanPro</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setIsServicesHovered(true)}  
                  onMouseLeave={() => setIsServicesHovered(false)}  
                >
                  <span className="text-white text-lg hover:bg-purple-800 rounded-full py-2 px-4  transition-colors flex items-center cursor-pointer">
                    <span>{item.label}</span>
                    <ChevronDown className="h-4 w-4" />
                  </span>
                  {isServicesHovered && (
                    <div className="absolute left-0  text-lg w-60 bg-purple-700  text-white rounded-lg shadow-lg">
                      <Link
                        href="/services/deep-cleaning"
                        className="block px-4 py-2 hover:bg-purple-800"
                        onClick={handleServiceClick}  // Close dropdown on click
                      >
                        Deep Cleaning
                      </Link>
                      <Link
                        href="/services/residential"
                        className="block px-4 py-2 hover:bg-purple-800"
                        onClick={handleServiceClick} 
                      >
                        Residential
                      </Link>
                      <Link
                        href="/services/deep-cleaning"
                        className="block px-4 py-2 hover:bg-purple-800"
                        onClick={handleServiceClick} 
                      >
                        Move-Out Cleaning
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-white text-lg hover:bg-purple-800 py-2 px-4 rounded-full transition-all duration-300 ${isActive(item.href)}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white text-lg"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-white text-lg hover:bg-purple-800 py-2 px-4 rounded transition-all duration-300 ${isActive(item.href)}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
