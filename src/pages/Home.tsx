import React from 'react';
import { Hero } from '../components/home/Hero';
import { TechStack } from '../components/home/TechStack';
import { GithubStats } from '../components/home/GithubStats';
import { CodeShowcase } from '../components/home/CodeShowcase';
import { Testimonials } from '../components/home/Testimonials';
import { Section } from '../components/shared/Section';

export default function Home() {
  return (
    <>
      <Hero />
      <Section id="tech-stack">
        <TechStack />
      </Section>
      <Section id="github">
        <GithubStats />
      </Section>
      <Section id="code">
        <CodeShowcase />
      </Section>
      <Section id="testimonials">
        <Testimonials />
      </Section>
    </>
  );
}