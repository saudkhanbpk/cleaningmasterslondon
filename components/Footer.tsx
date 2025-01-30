import { Sparkles, Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/20 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">CleanPro</span>
            </div>
            <p className="text-muted-foreground">
              Professional cleaning services for homes and businesses. Quality service guaranteed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-foreground">Home</a></li>
              <li><a href="/reviews" className="text-muted-foreground hover:text-foreground">Reviews</a></li>
              <li><a href="/blog" className="text-muted-foreground hover:text-foreground">Blog</a></li>
              <li><a href="/#contact" className="text-muted-foreground hover:text-foreground">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/residential" className="text-muted-foreground hover:text-foreground">Residential Cleaning</a></li>
              <li><a href="/services/residential" className="text-muted-foreground hover:text-foreground">Regular Cleaning</a></li>
              <li><a href="/services/residential" className="text-muted-foreground hover:text-foreground">Move-In/Move-Out Cleaning</a></li>
              <li><a href="/services/deep-cleaning" className="text-muted-foreground hover:text-foreground">Deep Cleaning</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">contact@cleanpro.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">(555) 123-4567</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} CleanPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// import { Sparkles, Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-secondary/20 border-t">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-2">
//               <Sparkles className="h-6 w-6 text-primary" />
//               <span className="text-xl font-bold">CleanPro</span>
//             </div>
//             <p className="text-muted-foreground">
//               Professional cleaning services for homes and businesses. Quality service guaranteed.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-muted-foreground hover:text-foreground">Home</a></li>
//               <li><a href="#services" className="text-muted-foreground hover:text-foreground">Services</a></li>
//               <li><a href="#about" className="text-muted-foreground hover:text-foreground">About Us</a></li>
//               <li><a href="#contact" className="text-muted-foreground hover:text-foreground">Contact</a></li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="font-semibold mb-4">Our Services</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-muted-foreground hover:text-foreground">Residential Cleaning</a></li>
//               <li><a href="#" className="text-muted-foreground hover:text-foreground">Commercial Cleaning</a></li>
//               <li><a href="#" className="text-muted-foreground hover:text-foreground">Deep Cleaning</a></li>
//               <li><a href="#" className="text-muted-foreground hover:text-foreground">Specialized Services</a></li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="font-semibold mb-4">Contact Us</h3>
//             <div className="space-y-2">
//               <div className="flex items-center space-x-2">
//                 <Mail className="h-4 w-4 text-primary" />
//                 <span className="text-muted-foreground">contact@cleanpro.com</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Phone className="h-4 w-4 text-primary" />
//                 <span className="text-muted-foreground">(555) 123-4567</span>
//               </div>
//               <div className="flex space-x-4 mt-4">
//                 <a href="#" className="text-muted-foreground hover:text-foreground">
//                   <Facebook className="h-5 w-5" />
//                 </a>
//                 <a href="#" className="text-muted-foreground hover:text-foreground">
//                   <Twitter className="h-5 w-5" />
//                 </a>
//                 <a href="#" className="text-muted-foreground hover:text-foreground">
//                   <Instagram className="h-5 w-5" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
//           <p>&copy; {currentYear} CleanPro. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }