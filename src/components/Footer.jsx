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
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://github.com/kasiranaweera"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/kasi-ranaweera"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-accent/10 hover:bg-accent/20 text-accent transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </a>
              <Link
                href="/contact"
                className="p-3 rounded-full bg-secondary/10 hover:bg-secondary/20 text-secondary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
            <p className="text-muted-foreground text-sm">
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
