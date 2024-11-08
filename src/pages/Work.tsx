import React from 'react';
import { PageHeader } from '../components/shared/PageHeader';
import { PortfolioGrid } from '../components/portfolio/PortfolioGrid';
import { Section } from '../components/shared/Section';

export default function Work() {
  return (
    <>
      <PageHeader
        title="Featured Projects"
        description="Explore my latest work and technical projects. Each project represents a unique challenge and innovative solution."
      />
      <Section>
        <PortfolioGrid />
      </Section>
    </>
  );
}