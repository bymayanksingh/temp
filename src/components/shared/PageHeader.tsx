import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto py-16 md:py-24"
      >
        <h1 className="text-gradient mb-6">{title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">{description}</p>
      </motion.div>
    </Container>
  );
}