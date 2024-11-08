import React from 'react';
import { Section } from '../components/shared/Section';
import { Container } from '../components/shared/Container';
import { ArrowRight, Code, Palette, Users } from 'lucide-react';
import { Button } from '../components/shared/Button';

export default function About() {
  const skills = [
    { name: 'Development', icon: Code, description: 'Expertise in modern web technologies and frameworks' },
    { name: 'Design', icon: Palette, description: 'Creating beautiful and functional user interfaces' },
    { name: 'Collaboration', icon: Users, description: 'Working closely with clients to achieve their goals' },
  ];

  return (
    <>
      <Section className="pt-24">
        <Container size="md">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            I'm a passionate developer and designer with over 5 years of experience creating digital experiences that make a difference.
          </p>

          <div className="prose prose-lg dark:prose-invert mb-12">
            <p>
              My journey in web development started with a curiosity about how things work on the internet. 
              That curiosity has evolved into a career focused on creating beautiful, functional, and user-centered digital experiences.
            </p>
            <p>
              I believe in the power of clean code, thoughtful design, and continuous learning. 
              Every project is an opportunity to push boundaries and create something meaningful.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skills.map((skill) => (
              <div key={skill.name} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
                <skill.icon className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
              </div>
            ))}
          </div>

          <Button to="/contact" icon={ArrowRight}>
            Get in Touch
          </Button>
        </Container>
      </Section>
    </>
  );
}