import { useInfiniteQuery } from '@tanstack/react-query';

const POSTS_PER_PAGE = 20;

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

async function fetchPosts({ pageParam = 1 }) {
  // In a real implementation, this would be an API call
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const start = (pageParam - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  
  // Generate mock data
  return Array.from({ length: POSTS_PER_PAGE }, (_, i) => ({
    id: start + i + 1,
    title: `Blog Post ${start + i + 1}`,
    excerpt: "Lorem ipsum dolor sit amet...",
    date: new Date().toISOString(),
    author: {
      name: "Author Name",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=64&h=64"
    },
    category: "Category",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2070",
    readTime: "5 min read"
  }));
}

export function useBlogPosts() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return nextPage;
    },
    initialPageParam: 1,
  });

  const posts = data?.pages.flat() ?? [];

  return {
    posts,
    isLoading,
    hasNextPage,
    fetchNextPage,
  };
}