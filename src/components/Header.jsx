'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about' },
    { name: 'Experiences', href: '/work' },
    { name: 'Projects', href: '/projects' },
    // { name: "Resume", href: "/cv" },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => pathname === href;

  // Toggle between light and dark themes
  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  if (!mounted) return null;

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? "border-b border-border/20 bg-background/98 backdrop-blur-xl supports-[backdrop-filter]:bg-background/95 shadow-xl" 
        : "border-b border-border/10 bg-background/90 backdrop-blur-lg"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="h-9 w-9 rounded-lg bg-gradient-primary flex items-center justify-center font-bold text-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/50">
              S
            </div>
            <span className="font-bold text-lg gradient-text hover:opacity-80 transition-opacity">
              KASI Ranaweera
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium px-3 py-2 rounded-lg transition-all duration-300 relative group',
                  isActive(item.href) 
                    ? 'text-primary bg-primary/10' 
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                )}
              >
                {item.name}
                {/* Animated underline on hover */}
                <span className={cn(
                  'absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-primary rounded-full transition-all duration-300',
                  isActive(item.href) 
                    ? 'opacity-100 scale-x-100' 
                    : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                )} />
              </Link>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="sm"
              className="w-9 px-0 relative rounded-lg hover:bg-primary/10 transition-colors"
              onClick={toggleTheme}
            >
              <Sun
                className={cn(
                  'h-[1.2rem] w-[1.2rem] transition-all',
                  theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
                )}
              />
              <Moon
                className={cn(
                  'absolute h-[1.2rem] w-[1.2rem] transition-all',
                  theme === 'light' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
                )}
              />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden w-9 px-0 rounded-lg hover:bg-primary/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-fade-in border-t border-border/10">
            <nav className="flex flex-col space-y-1 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium px-3 py-2 rounded-lg transition-all duration-300 relative group',
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                  {/* Animated underline on hover for mobile */}
                  <span className={cn(
                    'absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-primary rounded-full transition-all duration-300',
                    isActive(item.href) 
                      ? 'opacity-100 scale-x-100' 
                      : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  )} />
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
