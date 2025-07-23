'use client'
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Homecon from '@/components/Homecon';
import Footer from '@/components/Footer';

export default function BlogPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [postsPerView, setPostsPerView] = useState(3);
  const [containerWidth, setContainerWidth] = useState(0);
  const [postWidth, setPostWidth] = useState(0);
  const [isLastPostVisible, setIsLastPostVisible] = useState(false);
  const [isFirstPostVisible, setIsFirstPostVisible] = useState(true);

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Cryptocurrency Asset Recovery",
      excerpt: "Learn about the latest techniques and methodologies used in recovering lost or stolen cryptocurrency assets.",
      image: "/bd2.jpg",
      date: "March 15, 2024",
      category: "Cryptocurrency"
    },
    {
      id: 2,
      title: "The future of digital asset recovery",
      excerpt: "Discover how Open Source Intelligence is revolutionizing the way we conduct digital investigations.",
      image: "/bd2.jpg",
      date: "March 10, 2024",
      category: "Asset Recovery"
    },
    {
      id: 3,
      title: "Navigating cryptocurrency regulations",
      excerpt: "A detailed look at the process of asset recovery and the various strategies employed by experts.",
      image: "/bd2.jpg",
      date: "March 5, 2024",
      category: "Asset Recovery"
    },
    {
      id: 4,
      title: "Blockchain technology in financial services",
      excerpt: "Essential security measures that businesses should implement to protect their digital assets.",
      image: "/bd2.jpg",
      date: "February 28, 2024",
      category: "Cyber Security"
    },
    {
      id: 5,
      title: "Cryptocurrency protection Strategies",
      excerpt: "An in-depth exploration of blockchain forensics and its role in digital asset recovery.",
      image: "/bd2.jpg",
      date: "February 20, 2024",
      category: "Blockchain"
    },
   
  ];

  useEffect(() => {
    const updateDimensions = () => {
      if (scrollContainerRef.current) {
        const width = scrollContainerRef.current.offsetWidth;
        setContainerWidth(width);
        
        // Calculate posts per view based on container width
        if (width < 640) { // mobile
          setPostsPerView(1);
          setPostWidth(width - 32);
        } else if (width < 1024) { // tablet
          setPostsPerView(2);
          setPostWidth((width - 64) / 2);
        } else { // desktop
          setPostsPerView(3);
          setPostWidth((width - 96) / 3);
        }
      }
    };

    // Initial calculation
    updateDimensions();

    // Add resize listener
    window.addEventListener('resize', updateDimensions);

    // Cleanup
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const totalWidth = (postWidth + 32) * blogPosts.length;
      const maxScroll = totalWidth - containerWidth;
      const currentScroll = container.scrollLeft;
      
      // Consider the last post visible if we're within 10px of the end
      setIsLastPostVisible(Math.abs(currentScroll - maxScroll) < 10);
      // Consider the first post visible if we're within 10px of the start
      setIsFirstPostVisible(currentScroll < 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, [containerWidth, postWidth]);

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const totalWidth = (postWidth + 32) * blogPosts.length;
      const maxScroll = totalWidth - containerWidth;
      
      // If we're not at the end, scroll to the next section
      if (container.scrollLeft < maxScroll) {
        const nextScroll = Math.min(
          container.scrollLeft + (postWidth + 32) * postsPerView,
          maxScroll
        );
        
        container.scrollTo({
          left: nextScroll,
          behavior: 'smooth'
        });
      }
    }
  };

  const scrollToPrev = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const prevScroll = Math.max(
        container.scrollLeft - (postWidth + 32) * postsPerView,
        0
      );
      
      container.scrollTo({
        left: prevScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[100vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/sve5.svg"
            alt="Blog Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center justify-end">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-200">
              Insights, updates, and expert analysis on cryptocurrency, asset recovery, and digital investigations.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20 relative">
        {/* Navigation Arrows */}
        <button
          onClick={scrollToPrev}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full shadow-lg transition-all duration-300 
            ${isFirstPostVisible
              ? 'bg-gray-200 cursor-not-allowed opacity-50' 
              : 'bg-white hover:bg-blue-50 hover:scale-110 active:scale-95'
            }`}
          disabled={isFirstPostVisible}
          aria-label="Previous posts"
        >
          <svg 
            className={`w-8 h-8 transition-colors duration-300 ${
              isFirstPostVisible ? 'text-gray-400' : 'text-blue-600'
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
        </button>

        <button
          onClick={scrollToNext}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full shadow-lg transition-all duration-300 
            ${isLastPostVisible
              ? 'bg-gray-200 cursor-not-allowed opacity-50' 
              : 'bg-white hover:bg-blue-50 hover:scale-110 active:scale-95'
            }`}
          disabled={isLastPostVisible}
          aria-label="Next posts"
        >
          <svg 
            className={`w-8 h-8 transition-colors duration-300 ${
              isLastPostVisible ? 'text-gray-400' : 'text-blue-600'
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>

        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-hidden gap-8 pb-8 px-16 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {blogPosts.map((post) => (
            <Link 
              href={`/blog/${post.id}`} 
              key={post.id} 
              className="group flex-none w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] snap-center"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-blue-600">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600">
                    {post.excerpt}
                  </p>
                  <span className="text-sm text-gray-500 pt-4 block">{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Homecon />
      <Footer />
    </>
  );
}