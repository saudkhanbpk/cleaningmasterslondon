import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPinterest } from 'react-icons/fa'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CleaningMastersLondon - Professional Cleaning Services',
  description: 'Professional cleaning services for homes and businesses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
             
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

        {/* WhatsApp Floating Button */}
        <a 
          href="https://wa.me/+447701325857"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed left-8 bottom-8 p-3 animate-bounce hover:animate-none bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all"
        >
          <FaWhatsapp size={30} />
        </a>

        {/* Social Media Icons Floating on Right Side Middle */}
        <div className="fixed right-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-all"
          >
            <FaFacebook size={24} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full shadow-md hover:opacity-80 transition-all"
          >
            <FaInstagram size={24} />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 bg-sky-500 text-white rounded-full shadow-md hover:bg-sky-600 transition-all"
          >
            <FaTwitter size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 bg-blue-800 text-white rounded-full shadow-md hover:bg-blue-900 transition-all"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://pinterest.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 transition-all"
          >
            <FaPinterest size={24} />
          </a>
        </div>
      </body>
    </html>
  );
}
