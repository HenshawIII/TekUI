import React from 'react'
import Image from 'next/image';
import Homecon from '@/components/Homecon';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Business Automation",
      description: "Streamline your operations with intelligent automation solutions that reduce manual tasks and increase efficiency.",
      icon: "/Japan.png"
    },
    {
      title: "Website Development",
      description: "Create stunning, responsive websites that convert visitors into customers with modern technologies and SEO best practices.",
      icon: "/london.png"
    },
    {
      title: "AI Integration",
      description: "Harness the power of artificial intelligence to enhance your business processes and improve decision-making.",
      icon: "/Sudan.png"
    },
    {
      title: "Tech Consulting",
      description: "Strategic technology consulting to help your business leverage the latest innovations and digital transformation.",
      icon: "/Mexico.png"
    },
    {
      title: "Digital Transformation",
      description: "Comprehensive digital transformation strategies to modernize your business operations and technology stack.",
      icon: "/Turkey.png"
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions designed specifically for your business needs and requirements.",
      icon: "/dubai.png"
    }
  ];

  return (
    <>
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative w-full h-[150vh] md:h-[120vh] lg:h-[100vh] xl:h-[200vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/sve5.svg"
            alt="Services Background"
            fill
            className="object-cover "
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col items-start pt-52">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                Comprehensive technology solutions tailored to transform your business operations and drive growth.
              </p>
              <div className="text-left mt-12">
               <Link href='/contact'><button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                          Speak to an expert
                </button></Link> 
          </div> 
            </div>
            <div className="relative h-[400px] w-full">
              <Image
                src="/mvee.png"
                alt="Services Illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>

            <div className='lg:mt-24 mt-0 hidden md:block'>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 items-center justify-between gap-8">
          {/* Step 1 */}
          <div className="w-full md:w-[200px] bg-gradient-to-r from-blue-500 to-[#003169] rounded-full p-2 text-center text-white transform hover:scale-105 transition-all duration-300">
            <div className="text-2xl font-bold mb-2">1</div>
            <h3 className="font-semibold">Initial Consultation</h3>
          </div>

          {/* Step 2 */}
          <div className="w-full md:w-[200px] bg-gradient-to-r from-blue-500 to-[#003169] rounded-full p-2 text-center text-white transform hover:scale-105 transition-all duration-300">
            <div className="text-2xl font-bold mb-2">2</div>
            <h3 className="font-semibold">Data Collection</h3>
          </div>

          {/* Step 3 */}
          <div className="w-full md:w-[200px] bg-gradient-to-r from-blue-500 to-[#003169] rounded-full p-2 text-center text-white transform hover:scale-105 transition-all duration-300">
            <div className="text-2xl font-bold mb-2">3</div>
            <h3 className="font-semibold">Analysis</h3>
          </div>

          {/* Step 4 */}
          <div className="w-full md:w-[200px] bg-gradient-to-r from-blue-500 to-[#003169] rounded-full p-2 text-center text-white transform hover:scale-105 transition-all duration-300">
            <div className="text-2xl font-bold mb-2">4</div>
            <h3 className="font-semibold">Report Generation</h3>
          </div>

          {/* Step 5 */}
          <div className="w-full md:w-[200px] bg-gradient-to-r from-blue-500 to-[#003169] rounded-full p-2 text-center text-white transform hover:scale-105 transition-all duration-300">
            <div className="text-2xl font-bold mb-2">5</div>
            <h3 className="font-semibold">Review</h3>
          </div>
        </div>
            </div>
          
        </div>
      </div>


      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white  p-8 transition-shadow duration-300">
              <div className="relative h-16 w-16 mb-6 text-center flex justify-center">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

        
      {/* Clients Section */}
      <div className="relative w-full py-20 ">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 xl:h-[150vh] md:h-[100vh]">
          <Image
            src="/sve7.svg"
            alt="Clients Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 ">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Clients</h2>
            <h3 className="text-2xl text-gray-200 mb-6">We Serve a Variety of Businesses & Industries</h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We provide technology solutions for businesses of all sizes across various industries.
            </p>
          </div>

          {/* Client Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Startups */}
            <div className="bg-white rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300 lg:mt-36">
              <div className="relative h-20 w-20 mx-auto mb-6">
                <Image
                  src="/Mexico.png"
                  alt="Startups"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Startups</h3>
            </div>

            {/* SMEs */}
            <div className="bg-white rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300 lg:mt-24">
              <div className="relative h-20 w-20 mx-auto mb-16">
                <Image
                  src="/Turkey.png"
                  alt="SMEs"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">SMEs</h3>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300 lg:mt-12">
              <div className="relative h-20 w-20 mx-auto mb-24">
                <Image
                  src="/london.png"
                  alt="Enterprise"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Enterprise</h3>
            </div>

            {/* E-commerce */}
            <div className="bg-white shadow-lg backdrop-blur-sm rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300 lg:mt-0">
              <div className="relative h-20 w-20 mx-auto mb-32">
                <Image
                  src="/Japan.png"
                  alt="E-commerce"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">E-commerce</h3>
            </div>
          </div>
        </div>
       
      </div>

    </div>
    <Homecon/>
    <Footer/>
    </>
  );
}