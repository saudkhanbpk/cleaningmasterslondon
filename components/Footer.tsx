"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";


export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-purple-700 text-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-white" />
              <span className="text-xl font-bold">CleaningMastersLondon</span>
            </div>
            <p className="text-white">
              Professional cleaning services for homes and businesses. Quality service guaranteed.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-white">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Reviews", path: "/reviews" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className={pathname === link.path ? "text-gray-100 underline font-bold" : ""}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-white">
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                { name: "Domestic Cleaning", path: "/services/domestic-cleaning" },
                { name: "End of Tenancy", path: "/services/end-of-tenancy" },
                { name: "Carpet Cleaning", path: "/services/carpet-cleaning" },
                { name: "Office Cleaning", path: "/services/office-cleaning" },
                { name: "Window Cleaning", path: "/services/window-cleaning" },
                { name: "Gardening Cleaning", path: "/services/gardening" }
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.path}
                    className={pathname === service.path ? "text-gray-100 font-bold underline" : ""}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="text-white">
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              {/* Email */}
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-orange-500" /> 
                <span>contact@cleaningmasterslondon.com</span>
              </div>
              {/* Phone */}
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-green-500" /> 
                <span>+44 7701 325857</span>
              </div>

              {/* Social Media Icons - One Row */}
              <div className="flex items-center space-x-4 mt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-all"
                >
                  <FaFacebookF className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full shadow-md hover:opacity-80 transition-all"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-sky-500 text-white rounded-full shadow-md hover:bg-sky-600 transition-all"
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-800 text-white rounded-full shadow-md hover:bg-blue-900 transition-all"
                >
                  <FaLinkedinIn className="h-5 w-5" />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 transition-all"
                >
                  <FaPinterestP className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 mx-8"></div>
        <div className="py-6 text-gray-100 md:px-40 px-4 text-center">
            <div className="mt-2 text-sm text-gray-100">
              &copy; {new Date().getFullYear()} CleaningMastersLondon &nbsp; • &nbsp;
              <a href="#" className="text-white hover:underline">Terms and Conditions</a> &nbsp; • &nbsp;
              <a href="#" className="text-white hover:underline">Privacy Policy</a> &nbsp; • &nbsp;
              <a href="#" className="text-white hover:underline">Cookies Policy</a>
            </div>
        </div>
           
          
    </footer>
  );
}
