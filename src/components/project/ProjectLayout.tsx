import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, User, Tag } from 'lucide-react';

interface ProjectDetails {
  title: string;
  client: string;
  date: string;
  category: string;
  description: string;
  images: string[];
  challenge: string;
  solution: string;
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
  link?: string;
}

interface ProjectLayoutProps {
  project: ProjectDetails;
}

export function ProjectLayout({ project }: ProjectLayoutProps) {
  return (
    <article className="pt-24 pb-16">
      {/* Project Header */}
      <div className="container mx-auto px-4">
        <a 
          href="/work" 
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </a>

        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-8 mb-12">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-gray-400" />
              <span>{project.client}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-400" />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-5 h-5 text-gray-400" />
              <span>{project.category}</span>
            </div>
            {project.link && (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Project
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Images */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.title} - Image ${index + 1}`}
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Project Content */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-gray-600 dark:text-gray-400">{project.challenge}</p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">The Solution</h2>
            <p className="text-gray-600 dark:text-gray-400">{project.solution}</p>
          </section>

          {project.testimonial && (
            <section className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 mb-16">
              <blockquote className="text-xl italic mb-4">
                "{project.testimonial.text}"
              </blockquote>
              <cite className="block not-italic">
                <strong>{project.testimonial.author}</strong>
                <span className="block text-gray-600 dark:text-gray-400">
                  {project.testimonial.position}
                </span>
              </cite>
            </section>
          )}
        </div>
      </div>
    </article>
  );
}