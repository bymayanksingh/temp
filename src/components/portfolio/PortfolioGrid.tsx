import React, { useState } from 'react';
import { PortfolioItem } from './PortfolioItem';
import { Filter } from 'lucide-react';

const categories = ['All', 'Design', 'Development', 'Photography', 'Branding'];

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Web Application",
    category: "Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600",
    description: "A cutting-edge web application built with React and TypeScript"
  },
  {
    id: 2,
    title: "Brand Identity Design",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Complete brand identity design for a luxury fashion brand"
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
    description: "Comprehensive design system for a SaaS platform"
  },
];

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Filter Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Featured Work</h2>
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
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mobile Categories */}
        {isFilterOpen && (
          <div className="md:hidden flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setIsFilterOpen(false);
                }}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <PortfolioItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}