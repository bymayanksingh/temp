import React from 'react';
import { BlogPost } from './BlogPost';

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

const posts: Post[] = [
  {
    id: 1,
    title: "The Future of Web Design: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the future of web design, from AI-driven interfaces to immersive experiences.",
    date: "Mar 15, 2024",
    author: {
      name: "Alex Morgan",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=64&h=64"
    },
    category: "Design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2070",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Mastering Typography in UI Design",
    excerpt: "Learn how to effectively use typography to create beautiful and readable user interfaces.",
    date: "Mar 12, 2024",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=64&h=64"
    },
    category: "Typography",
    image: "https://images.unsplash.com/photo-1516131206008-dd041a9764fd?auto=format&fit=crop&q=80&w=2070",
    readTime: "4 min read"
  }
];

export function BlogGrid() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog & Insights</h1>
        <div className="grid gap-12">
          {posts.map(post => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}