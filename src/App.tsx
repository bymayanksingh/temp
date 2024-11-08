import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { PortfolioGrid } from './components/portfolio/PortfolioGrid';
import { BlogGrid } from './components/blog/BlogGrid';
import { ContactForm } from './components/contact/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main>
        <Hero />
        <PortfolioGrid />
        <BlogGrid />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;