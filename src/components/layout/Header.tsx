import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { NavLink } from './NavLink';
import { Button } from '../shared/Button';
import { Container } from '../shared/Container';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold tracking-tighter">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/work">Work</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Button
              variant="secondary"
              size="sm"
              icon={isDark ? Sun : Moon}
              onClick={toggleTheme}
              className="!p-2"
              aria-label="Toggle theme"
            />
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="secondary"
            size="sm"
            icon={isMenuOpen ? X : Menu}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden !p-2"
            aria-label="Toggle menu"
          />
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <NavLink to="/" mobile>Home</NavLink>
              <NavLink to="/work" mobile>Work</NavLink>
              <NavLink to="/about" mobile>About</NavLink>
              <NavLink to="/blog" mobile>Blog</NavLink>
              <NavLink to="/contact" mobile>Contact</NavLink>
              <Button
                variant="secondary"
                size="sm"
                icon={isDark ? Sun : Moon}
                onClick={toggleTheme}
                className="flex items-center justify-start px-4 py-2 w-full"
              >
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </Button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}