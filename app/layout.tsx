import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CleanPro - Professional Cleaning Services',
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
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        
        {/* Toast Container for notifications */}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

        {/* WhatsApp Button (fixed on the left) */}
        <a 
          href="https://wa.me/+447701325857"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed left-8 bottom-8 p-3 animate-bounce hover:animate-none bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all"
        >
          <FaWhatsapp size={30} />
        </a>
      </body>
    </html>
  );
}
