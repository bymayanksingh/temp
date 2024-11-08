import React, { useState } from 'react';
import { BlogPost } from './BlogPost';
import { Container } from '../shared/Container';
import { Search, Filter } from 'lucide-react';
import { usePagination } from '../../hooks/usePagination';
import { motion, AnimatePresence } from 'framer-motion';

const POSTS_PER_PAGE = 10;

// Simulating a large dataset
const posts = Array.from({ length: 200000 }, (_, i) => ({
  id: i + 1,
  title: `How to Build Scalable Applications ${i + 1}`,
  excerpt: "Learn the best practices for building applications that can handle millions of users and process data efficiently...",
  date: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
  author: {
    name: "Alex Morgan",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=64&h=64"
  },
  category: ["Development", "Architecture", "Performance", "Security", "DevOps"][Math.floor(Math.random() * 5)],
  readTime: "5 min read",
  tags: ["React", "TypeScript", "Node.js", "AWS", "Docker"].slice(0, Math.floor(Math.random() * 4) + 1)
}));

export function BlogGrid() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = Array.from(new Set(posts.map(post => post.category)));
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));
  
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
                         post.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.every(tag => post.tags.includes(tag));
    
    return matchesSearch && matchesCategory && matchesTags;
  });

  const {
    currentPage,
    currentData,
    totalPages,
    nextPage,
    prevPage,
    goToPage
  } = usePagination(filteredPosts, POSTS_PER_PAGE);

  return (
    <Container size="lg">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <AnimatePresence>
          {(showFilters || window.innerWidth >= 768) && (
            <motion.aside 
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              className="md:w-64 space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div>
                <h3 className="font-semibold mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => {
                        setSelectedTags(prev => 
                          prev.includes(tag)
                            ? prev.filter(t => t !== tag)
                            : [...prev, tag]
                        );
                      }}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedTags.includes(tag)
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                          : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>

          {/* Results Summary */}
          <div className="mb-6 text-gray-600 dark:text-gray-400">
            Showing {filteredPosts.length} results
            {selectedCategory && ` in ${selectedCategory}`}
            {selectedTags.length > 0 && ` with tags: ${selectedTags.join(', ')}`}
          </div>

          {/* Blog Posts */}
          <div className="space-y-8">
            {currentData.map(post => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-2">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border dark:border-gray-700 disabled:opacity-50"
              >
                Previous
              </button>
              
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => goToPage(pageNum)}
                    className={`w-10 h-10 rounded-lg ${
                      currentPage === pageNum
                        ? 'bg-black text-white dark:bg-white dark:text-black'
                        : 'border dark:border-gray-700'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border dark:border-gray-700 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}