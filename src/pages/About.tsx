import React from 'react';
import { PageHeader } from '../components/shared/PageHeader';
import { Section } from '../components/shared/Section';
import { Container } from '../components/shared/Container';
import { TechStack } from '../components/home/TechStack';
import { GithubStats } from '../components/home/GithubStats';
import { motion } from 'framer-motion';
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
      <PageHeader
        title="About Me"
        description="I'm a passionate developer and designer with over 5 years of experience creating digital experiences that make a difference."
      />

      <Section>
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg dark:prose-invert mb-12 max-w-none"
          >
            <p>
              My journey in web development started with a curiosity about how things work on the internet. 
              That curiosity has evolved into a career focused on creating beautiful, functional, and user-centered digital experiences.
            </p>
            <p>
              I believe in the power of clean code, thoughtful design, and continuous learning. 
              Every project is an opportunity to push boundaries and create something meaningful.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              >
                <skill.icon className="w-8 h-8 mb-4 text-gradient" />
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Button to="/contact" icon={ArrowRight}>
              Get in Touch
            </Button>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <TechStack />
      </Section>

      <Section>
        <GithubStats />
      </Section>
    </>
  );
}