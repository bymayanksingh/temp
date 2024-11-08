import React from 'react';
import { Hero } from '../components/home/Hero';
import { PortfolioGrid } from '../components/portfolio/PortfolioGrid';
import { BlogGrid } from '../components/blog/BlogGrid';
import { ContactForm } from '../components/contact/ContactForm';
import { Section } from '../components/shared/Section';

export default function Home() {
  return (
    <>
      <Hero />
      <Section id="work">
        <PortfolioGrid />
      </Section>
      <Section id="blog">
        <BlogGrid />
      </Section>
      <Section id="contact">
        <ContactForm />
      </Section>
    </>
  );
}