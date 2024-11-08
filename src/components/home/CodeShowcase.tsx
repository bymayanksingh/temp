import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../shared/Container';

const codeSnippets = [
  {
    title: "React Custom Hook",
    language: "typescript",
    code: `import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Get stored value
  const stored = localStorage.getItem(key);
  const initial = stored ? JSON.parse(stored) : initialValue;

  // State to store value
  const [value, setValue] = useState<T>(initial);

  // Update stored value when state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}`
  },
  {
    title: "API Route Handler",
    language: "typescript",
    code: `import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { title, content } = req.body;
    const post = await prisma.post.create({
      data: { title, content }
    });
    
    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating post' });
  }
}`
  }
];

export function CodeShowcase() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Code Samples</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Clean, maintainable, and well-documented code examples from real projects
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {codeSnippets.map((snippet, index) => (
          <motion.div
            key={snippet.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
              <h3 className="text-white font-medium">{snippet.title}</h3>
              <span className="text-sm text-gray-400">{snippet.language}</span>
            </div>
            <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
              <code>{snippet.code}</code>
            </pre>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}