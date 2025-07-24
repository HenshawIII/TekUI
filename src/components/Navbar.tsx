'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSidebarOpen]);

  return (
    <>
      <nav className={`fixed w-full py-2 z-50 transition-all duration-300 font-['Helvetica'] ${
        isScrolled 
          ? 'bg-[#003169] shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <Link href={'/'}><div className="flex-shrink-0 flex items-center">
                {/* <i className={`fas fa-shield-alt text-3xl mr-2 ${
                  isScrolled ? 'text-blue-600' : 'text-white'
                }`}></i> */}
                <Image src={isScrolled ? "/Hick.png" : "/hicwhi.png"} alt="HIC_TECH" width={100} height={28} />
                <div className={`flex flex-col ${
                  isScrolled ? 'text-gray-500' : 'text-white'
                }`}>
                  {/* <span className="text-xl md:text-3xl font-bold leading-none md:tracking-widest">HIC_TECH</span>
                  <span className="leading-none text-left  tracking-widest">SOLUTIONS</span> */}
                </div>
              </div>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/services" className={`${
                  isScrolled ? 'text-gray-500 hover:text-blue-800' : 'text-white hover:text-gray-400'
                } px-3 py-2 font-medium`}>Services</Link>
                <Link href="/about" className={`${
                  isScrolled ? 'text-gray-500 hover:text-blue-600' : 'text-white hover:text-gray-400'
                } px-3 py-2 font-medium`}>About</Link>
                
                <Link href="/blog" className={`${
                  isScrolled ? 'text-gray-500 hover:text-blue-600' : 'text-white hover:text-gray-400'
                } px-3 py-2 font-medium`}>Blog</Link>

            <div className="hidden md:block">
              <Link href="/complaint" className={`ml-8 inline-flex w-fit text-center items-center justify-center px-4 py-2 border ${
                isScrolled 
                  ? 'border-transparent text-white bg-blue-600 hover:bg-blue-500' 
                  : 'border-white text-white hover:bg-white hover:text-blue-600'
              } text-sm font-medium rounded-md transition-colors duration-300`}>
                Get Started
              </Link>
            </div>
              </div>

              
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className={`${
                  isScrolled ? 'text-gray-500 hover:text-blue-600' : 'text-white hover:text-blue-200'
                } focus:outline-none relative w-8 h-8`}
              >
                <div className={`absolute inset-0 flex flex-col justify-center items-center transition-all duration-300 ${
                  isSidebarOpen ? 'rotate-45' : ''
                }`}>
                  <span className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isSidebarOpen ? 'rotate-90 translate-y-0' : '-translate-y-1'
                  }`}></span>
                  <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                    isSidebarOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                  <span className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isSidebarOpen ? '-rotate-90 translate-y-0' : 'translate-y-1'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
        isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`} onClick={() => setIsSidebarOpen(false)}></div>

      <div className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden font-['Helvetica'] ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <div className="flex items-center">
              <Image src="/treqo2.png" alt="HIC_TECH" width={100} height={32} />
              <div className="flex flex-col text-gray-700">
                <span className="text-xl font-bold leading-none">HIC TECH</span>
                <span className="text-xl pl-1 font-bold leading-none">Solutions</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto py-4">
            <div className="px-4 space-y-4">
              <Link 
                href="/services" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsSidebarOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsSidebarOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsSidebarOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsSidebarOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="p-4 border-t">
            <Link 
              href="/complaint" 
              className="block w-full text-center px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              onClick={() => setIsSidebarOpen(false)}
            >
              Get Help Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 