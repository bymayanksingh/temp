import React from 'react';
import { useParams } from 'react-router-dom';
import { Section } from '../components/shared/Section';
import { Container } from '../components/shared/Container';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';

const post = {
  title: "The Future of Web Design: Trends to Watch in 2024",
  content: `
    The landscape of web design is constantly evolving, driven by technological advancements and changing user expectations. 
    In this article, we'll explore the key trends that are shaping the future of web design in 2024 and beyond.
    
    As we move forward, we're seeing a greater emphasis on personalized experiences, accessibility, and performance. 
    Designers and developers are finding innovative ways to create websites that not only look beautiful but also 
    provide meaningful interactions for users.
  `,
  date: "Mar 15, 2024",
  author: {
    name: "Alex Morgan",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=64&h=64"
  },
  readTime: "5 min read",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2070"
};

export default function BlogPost() {
  const { id } = useParams();

  return (
    <Section className="pt-24">
      <Container size="md">
        <a 
          href="/blog" 
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </a>

        <article>
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full"
              />
              <span className="font-medium">{post.author.name}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>

          <img
            src={post.image}
            alt={post.title}
            className="w-full aspect-video object-cover rounded-xl mb-8"
          />

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </Container>
    </Section>
  );
}