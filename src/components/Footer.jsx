// import { Github, Linkedin, Mail } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white py-12 transition-colors duration-300">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 px-4">
          
//           {/* Contact Info */}
//           <div className="space-y-4 md:pr-48">
//             <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
//             <div className="flex items-center space-x-3">
//               <h4 className="text-lg font-normal text-foreground">KASI Ranaweera</h4>
//             </div>
//             <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
//               Let's collaborate on your next project. I'm always excited to work
//               on innovative solutions.
//             </p>
//           </div>

//           {/* Social Links */}
//           <div className="space-y-4 border-l border-gray-300 dark:border-gray-600 md:pl-48">
//             <h3 className="text-xl font-semibold mb-4">Connect</h3>
//             <div className="fade-in-delayed flex space-x-6 my-4 pt-4">
//               <a
//                 href="https://github.com/kasiranaweera"
//                 className="p-3 rounded-full bg-gray-200 dark:bg-secondary/50 hover:bg-gray-300 dark:hover:bg-secondary transition-all duration-300 hover:scale-110"
//                 aria-label="GitHub"
//               >
//                 <Github className="w-6 h-6" />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/kasi-ranaweera"
//                 className="p-3 rounded-full bg-gray-200 dark:bg-secondary/50 hover:bg-gray-300 dark:hover:bg-secondary transition-all duration-300 hover:scale-110"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin className="w-6 h-6" />
//               </a>
//               <a
//                 href="/contact"
//                 className="p-3 rounded-full bg-gray-200 dark:bg-secondary/50 hover:bg-gray-300 dark:hover:bg-secondary transition-all duration-300 hover:scale-110"
//                 aria-label="Email"
//               >
//                 <Mail className="w-6 h-6" />
//               </a>
//             </div>
//             <p className="text-gray-600 dark:text-gray-300 text-sm">
//               Follow me for updates on latest projects and tech insights.
//             </p>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 text-center">
//           <p className="text-gray-600 dark:text-gray-400">
//             © {new Date().getFullYear()} | KASI Ranaweera
//             <br />All rights reserved
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-6 sm:px-8">
        {/* Grid layout adjusts for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-4 md:pr-24 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-3">
              <h4 className="text-lg font-normal text-foreground">KASI Ranaweera</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0">
              Let's collaborate on your next project. I'm always excited to work
              on innovative solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-4 md:border-l border-gray-300 dark:border-gray-600 md:pl-24 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="fade-in-delayed flex justify-center md:justify-start space-x-6 my-4 pt-2">
              <a
                href="https://github.com/kasiranaweera"
                className="p-3 rounded-full bg-gray-200 dark:bg-secondary/50 hover:bg-gray-300 dark:hover:bg-secondary transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/kasi-ranaweera"
                className="p-3 rounded-full bg-gray-200 dark:bg-secondary/50 hover:bg-gray-300 dark:hover:bg-secondary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="/contact"
                className="p-3 rounded-full bg-gray-200 dark:bg-secondary/50 hover:bg-gray-300 dark:hover:bg-secondary transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm max-w-md mx-auto md:mx-0">
              Follow me for updates on latest projects and tech insights.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            © {new Date().getFullYear()} | KASI Ranaweera
            <br />All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

