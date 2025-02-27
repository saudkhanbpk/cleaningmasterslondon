"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-gray-800 text-white border-t">
      <div className="mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:ml-20">
          {/* Brand */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center">
              <Sparkles className="h-6 w-6 text-purple-700 mr-2" />
              <span className="text-xl text-purple-700 font-bold">CleaningMastersLondon</span>
            </div>
            <p className="text-white text-center md:text-left">
              Professional cleaning services for homes and businesses. Quality service guaranteed.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-white flex flex-col items-center md:items-start">
            <h3 className="font-bold mb-4 text-xl text-purple-700">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                // { name: "Reviews", path: "/reviews" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
                { name: "Book Now", path: "/booknow" }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className={pathname === link.path ? "text-purple-700 underline" : ""}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-white flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-4 text-xl text-purple-700">Our Services</h3>
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
                    className={pathname === service.path ? "text-purple-700 underline" : ""}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="text-white flex flex-col items-center md:items-start">
            <h3 className="font-bold text-xl mb-4 text-purple-700">Contact Us</h3>
            <div className="space-y-2">
              {/* Email */}
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-orange-500" /> 
                <span>info@cleaninglondon.com</span>
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
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 mx-8"></div>
      <div className="py-6 text-gray-100 md:px-40 px-4 text-center">
        <div className="mt-2 text-sm text-gray-100">
          <p className="text-purple-700 text-bold md:text-xl text-lg">&copy; {new Date().getFullYear()} CleaningMastersLondon</p>
           &nbsp; • &nbsp;
          <a href="#" className="text-white hover:underline hover:text-purple-700">Terms and Conditions</a> &nbsp; • &nbsp;
          <a href="#" className="text-white hover:underline  hover:text-purple-700">Privacy Policy</a> &nbsp; • &nbsp;
          <a href="#" className="text-white hover:underline  hover:text-purple-700">Cookies Policy</a>
        </div>
      </div>
    </footer>
  );
}
