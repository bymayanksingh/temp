import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectLayout } from '../components/project/ProjectLayout';

const project = {
  title: "Modern Web Application",
  client: "TechCorp Inc.",
  date: "March 2024",
  category: "Development",
  description: "A cutting-edge web application built with React and TypeScript, focusing on performance and user experience.",
  images: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2070",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070",
  ],
  challenge: "The client needed a modern web application that could handle complex data visualization while maintaining excellent performance across all devices.",
  solution: "We implemented a modular architecture using React and TypeScript, with a focus on code splitting and lazy loading to ensure optimal performance. The UI was designed to be responsive and intuitive.",
  testimonial: {
    text: "The team delivered an exceptional product that exceeded our expectations. The attention to detail and focus on user experience has helped us achieve our business goals.",
    author: "John Smith",
    position: "CTO, TechCorp Inc."
  },
  link: "https://example.com"
};

export default function Project() {
  const { id } = useParams();

  return <ProjectLayout project={project} />;
}