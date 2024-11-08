import React from 'react';
import { Section } from '../components/shared/Section';
import { Container } from '../components/shared/Container';
import { BlogGrid } from '../components/blog/BlogGrid';

export default function Blog() {
  return (
    <Section className="pt-24">
      <Container>
        <h1 className="text-4xl font-bold mb-8">Blog & Insights</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
          Thoughts, insights, and perspectives on design, development, and the digital world.
        </p>
        <BlogGrid />
      </Container>
    </Section>
  );
}