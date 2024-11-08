import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../shared/Container';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "An exceptional developer who consistently delivers clean, efficient code. Their technical expertise and problem-solving skills are outstanding.",
    author: "Sarah Chen",
    position: "Tech Lead at TechCorp",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=64&h=64"
  },
  {
    text: "Working with them was a game-changer for our project. Their deep understanding of modern web technologies and best practices elevated our entire codebase.",
    author: "James Wilson",
    position: "CTO at StartupX",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=64&h=64"
  }
];

export function Testimonials() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          What technical leaders say about working with me
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg relative"
          >
            <Quote className="w-10 h-10 text-blue-600/20 absolute top-6 right-6" />
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {testimonial.text}
            </p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold">{testimonial.author}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.position}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}