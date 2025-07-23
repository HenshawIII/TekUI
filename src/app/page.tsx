'use client';

import { useEffect } from 'react';
import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Services from '@/components/Services';
import About from '@/components/About';
import Video from '@/components/Video';
import Blob from '@/components/Blob';
import AboutTracing from '@/components/AboutTracing';
import Afil from '@/components/Afil';
import Process from '@/components/Process';
import Location from '@/components/Location';
import Homecon from '@/components/Homecon';
import Footer from '@/components/Footer';
export default function Home() {
  useEffect(() => {
    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  }, []);

  return (
    <main className="font-sans bg-white text-gray-800">
      <Navbar />
      <Hero />
      <About/>
      <Services />
      <Afil/>
      <AboutTracing/>
      <Process/>
      <Blob />
       <Location/> 
       <Homecon/>  
      <Footer/>
    </main>
  );
}
