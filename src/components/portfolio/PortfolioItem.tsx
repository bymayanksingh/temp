import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface PortfolioItemProps {
  project: Project;
}

export function PortfolioItem({ project }: PortfolioItemProps) {
  return (
    <a
      href={`/project/${project.id}`}
      className="group block overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <ArrowUpRight className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="p-6">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {project.category}
        </span>
        <h3 className="mt-2 text-xl font-semibold group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400 line-clamp-2">
          {project.description}
        </p>
      </div>
    </a>
  );
}