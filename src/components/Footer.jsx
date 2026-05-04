'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import Image from 'next/image';

import Logo from "../../assets/logo.png"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-background border-t border-border/20 text-foreground py-16 transition-colors duration-300 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-20 w-40 h-40 bg-gradient-primary rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-secondary rounded-full opacity-5 blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="space-y-4 text-center md:text-left">
            <Link href="/" className="inline-flex items-center space-x-2 group">
              <div className="h-10 w-10 rounded bg-gradient-primary flex items-center justify-center font-bold text-xl transition-transform duration-300 group-hover:scale-110">
                <Image src={Logo} alt="logo" width={36} height={36} className='object-cover' />
              </div>
              <span className="font-bold text-lg gradient-text">KASI Ranaweera</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Building intelligent solutions through AI, machine learning, and full-stack development. Let's create something extraordinary together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                About Me
              </Link>
              <Link
                href="/projects"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Projects
              </Link>
              <Link
                href="/work"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Experience
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4 text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex justify-center md:justify-end gap-3 flex-wrap">
              <a
                href="https://github.com/kasiranaweera"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg group flex items-center justify-center"
                title="GitHub"
              >
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/kasi-ranaweera"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#0077b5]/10 hover:bg-[#0077b5]/20 text-[#0077b5] transition-all duration-300 hover:scale-110 hover:shadow-lg group flex items-center justify-center"
                title="LinkedIn"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </a>
              <Link
                href="/contact"
                className="p-3 rounded-full bg-secondary/10 hover:bg-secondary/20 text-secondary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg group flex items-center justify-center"
                title="Email"
              >
                <span className="sr-only">Email</span>
                <Mail className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Let's build something amazing
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="text-center md:text-left text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} | KASI Ranaweera | All rights reserved
            </p>
          </div>


        </div>
      </div>
    </footer>
  );
}
