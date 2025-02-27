"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);  // New state to manage Services visibility on mobile

  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/services")) {
      setActiveService(pathname);
    }
  }, [pathname]);

  // Check if current page is inside Services
  const isServicesPage = pathname.startsWith("/services");

  const handleServiceClick = (href: string) => {
    setActiveService(href);
    setIsServicesHovered(false);
    setIsMenuOpen(false);
    setIsServicesExpanded(false);  // Collapse services when a service is clicked
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", dropdown: true }, 
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Book Now", href: "/booknow" },
  ];

  const services = [
    { label: "Domestic Cleaning", href: "/services/domestic-cleaning" },
    { label: "End of Tenancy", href: "/services/end-of-tenancy" },
    { label: "Carpet Cleaning", href: "/services/carpet-cleaning" },
    { label: "Office Cleaning", href: "/services/office-cleaning" },
    { label: "Window Cleaning", href: "/services/window-cleaning" },
    { label: "Gardening", href: "/services/gardening" },
  ];

  return (
    <nav className="fixed w-full z-50  bg-gray-800 px-2 lg:px-4  transition-all duration-300">
      <div className="flex items-center justify-between py-1 lg:py-2">
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Sparkles className="h-6 w-6 text-purple-700" />
            <span className="lg:text-xl text-lg font-bold text-white">CleaningMastersLondon</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setIsServicesHovered(true)}
                onMouseLeave={() => setIsServicesHovered(false)}
              >
                <button
                  className={`text-white text-lg rounded-full py-2 px-4 flex items-center cursor-default ${
                    isServicesPage ? "bg-purple-800 text-white" : "hover:bg-purple-800"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>

                {isServicesHovered && (
                  <div className="absolute left-0 text-lg w-60 bg-gray-800 text-white rounded-lg shadow-lg">
                    {services.map((service) => (
                      <Link
                        key={service.label}
                        href={service.href}
                        className={`block px-4 py-2 hover:bg-purple-800 transition-all ${
                          pathname === service.href ? "bg-purple-800 text-white" : ""
                        }`}
                        onClick={() => handleServiceClick(service.href)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href ?? "#"}
                className={`text-white text-lg hover:bg-purple-800 py-1 lg:py-2 px-2 lg:px-4 rounded-full transition-all duration-300 ${
                  pathname === item.href ? "bg-purple-800 text-white" : ""
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-lg">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-6 max-h-screen overflow-y-auto">
          <div className="flex flex-col space-y-4 flex-grow">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <>
                    <button
                      className={`text-white text-lg font-semibold flex px-2 rounded-full ${
                        isServicesPage ? "bg-purple-800 text-white" : "hover:bg-purple-800"
                      }`}
                      onClick={() => setIsServicesExpanded(!isServicesExpanded)} // Toggle services visibility on click
                    >
                      Services
                      <ChevronDown className={`h-4 w-4 ml-2 ${isServicesExpanded ? "transform rotate-180" : ""}`} />
                    </button>

                    {/* Services List in Mobile */}
                    {isServicesExpanded && (
                      <div className="flex flex-col space-y-2 pl-4 h-auto overflow-y-auto mb-4">
                        {services.map((service) => (
                          <Link
                            key={service.label}
                            href={service.href}
                            className={`block text-white px-2 py-2 rounded-full hover:bg-purple-800 transition-all ${
                              pathname === service.href ? "bg-purple-800 text-white" : ""
                            }`}
                            onClick={() => handleServiceClick(service.href)}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href ?? "#"}
                    className={`text-white text-lg hover:bg-purple-800 py-2 px-2 rounded-full transition-all duration-300 ${
                      pathname === item.href ? "bg-purple-800 text-white" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Add margin at the bottom after the menu */}
          <div className="mb-4"></div>
        </div>
      )}
    </nav>
  );
}
