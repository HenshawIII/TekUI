'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import BlurText from './BlurText';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      // Handle video loading
      const handleLoadedData = () => {
        console.log('Video loaded successfully');
        setIsVideoLoaded(true);
      };

      // Handle video errors
      const handleError = (e: Event) => {
        console.error('Error loading video:', e);
      };

      // Add event listeners
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);

      // Try to play the video
      const playVideo = async () => {
        try {
          // Set video properties that help with autoplay
          video.muted = true;
          video.playsInline = true;
          video.autoplay = true;
          
          // Try to play
          const playPromise = video.play();
          
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                console.log('Video started playing');
              })
              .catch(error => {
                console.error('Error playing video:', error);
                // If autoplay fails, try to play on user interaction
                document.addEventListener('click', () => {
                  video.play().catch(console.error);
                }, { once: true });
              });
          }
        } catch (error) {
          console.error('Error in playVideo:', error);
        }
      };

      playVideo();

      // Cleanup
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  
 

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
      <video width="640" height="360" autoPlay loop muted preload="auto" playsInline className="video-background">
    <source src="/videos/robocop.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
      </div>
      
      <div className="hero-overlay absolute inset-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="w-full flex justify-center items-center">
        <BlurText
    text="HIC TECH"
    delay={150}
    animateBy="letters"
    direction="top"
    onAnimationComplete={handleAnimationComplete}
    className="text-4xl md:text-8xl font-bold text-white text-center leading-tight mb-8"
  />
        </div>
        <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
          Transforming businesses with cutting-edge automation, AI integration, and custom software development.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* <Link href="#contact" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition duration-300 text-lg">
            Recover Your Funds
          </Link> */}
          <Link href="/contact" className="px-8 py-2 border-2 hover:scale-110 border-yellow-500 text-white font-bold rounded-[50px] hover:bg-blue-700 hover:border-blue-700 bg-yellow-400 transition duration-300 text-lg">
            SPEAK TO OUR TEAM
          </Link>
        </div>
{/*         
        <div className="mt-16 flex justify-center">
          <div className="flex items-center space-x-8">
            <div className="text-white text-center">
              <div className="text-3xl font-bold">$250M+</div>
              <div className="text-blue-200">Recovered</div>
            </div>
            <div className="h-12 w-px bg-blue-300"></div>
            <div className="text-white text-center">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
            <div className="h-12 w-px bg-blue-300"></div>
            <div className="text-white text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-blue-200">Support</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
} 