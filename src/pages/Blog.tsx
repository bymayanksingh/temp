import React from 'react';
import { PageHeader } from '../components/shared/PageHeader';
import { Section } from '../components/shared/Section';
import { BlogGrid } from '../components/blog/BlogGrid';

export default function Blog() {
  return (
    <>
      <PageHeader
        title="Blog & Insights"
        description="Thoughts, insights, and technical articles about web development, design, and the digital world."
      />
      <Section>
        <BlogGrid />
      </Section>
    </>
  );
}