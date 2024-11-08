import React, { useState } from 'react';
import { PortfolioItem } from './PortfolioItem';
import { Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Masonry from 'react-masonry-css';

const categories = ['All', 'Design', 'Development', 'Photography', 'Branding'];

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Web Application",
    category: "Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600",
    description: "A cutting-edge web application built with React and TypeScript",
    featured: true
  },
  {
    id: 2,
    title: "Brand Identity Design",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Complete brand identity design for a luxury fashion brand",
    featured: true
  },
  {
    id: 3,
    title: "Urban Photography",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1449024540548-94f5d5a59230?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Urban landscape photography series in New York City"
  },
  {
    id: 4,
    title: "UI/UX Design System",
    category: "Design",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Comprehensive design system for a SaaS platform",
    featured: true
  },
  // Add more projects here
];

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1
};

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Filter Section */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
            Featured Work
          </h2>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Filter className="w-5 h-5" />
            <span>Filter</span>
          </button>
        </div>
        
        {/* Desktop Categories */}
        <div className="hidden md:flex space-x-6">
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Mobile Categories */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div 
              className="md:hidden flex flex-wrap gap-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {categories.map(category => (
                <motion.button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setIsFilterOpen(false);
                  }}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Portfolio Grid */}
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex -ml-4 w-auto"
        columnClassName="pl-4 bg-clip-padding"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <PortfolioItem project={project} />
          </motion.div>
        ))}
      </Masonry>
    </div>
  );
}