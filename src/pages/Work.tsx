import React from 'react';
import { PortfolioGrid } from '../components/portfolio/PortfolioGrid';
import { Section } from '../components/shared/Section';
import { Container } from '../components/shared/Container';

export default function Work() {
  return (
    <Section className="pt-24">
      <Container>
        <h1 className="text-4xl font-bold mb-8">My Work</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
          Explore my latest projects and creative endeavors. Each project represents a unique challenge and solution.
        </p>
        <PortfolioGrid />
      </Container>
    </Section>
  );
}