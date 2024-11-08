import React from 'react';
import { Clock } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  image: string;
  readTime: string;
}

interface BlogPostProps {
  post: Post;
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="group">
      <a href={`/blog/${post.id}`} className="block">
        <div className="aspect-[16/9] mb-6 overflow-hidden rounded-xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.category}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>

        <h2 className="text-2xl font-bold mb-4 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
          {post.title}
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-3">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">{post.author.name}</span>
        </div>
      </a>
    </article>
  );
}