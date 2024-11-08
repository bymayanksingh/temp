import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../shared/Container';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Work', href: '/work' },
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    social: [
      { name: 'GitHub', icon: Github, href: 'https://github.com' },
      { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
      { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
      { name: 'Email', icon: Mail, href: 'mailto:hello@example.com' },
    ],
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <Link to="/" className="text-2xl font-bold tracking-tighter text-gradient">
                Portfolio
              </Link>
              <p className="text-gray-600 dark:text-gray-400">
                Creating digital experiences with purpose and precision.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <address className="not-italic text-gray-600 dark:text-gray-400 space-y-2">
                <p>123 Design Street</p>
                <p>San Francisco, CA 94107</p>
                <p>United States</p>
                <p>
                  <a href="tel:+1234567890" className="hover:text-black dark:hover:text-white">
                    +1 (234) 567-890
                  </a>
                </p>
              </address>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t dark:border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 dark:text-gray-400">
                © {currentYear} Portfolio Theme. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}