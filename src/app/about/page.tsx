import React from 'react'
import Image from 'next/image';
import Homecon from '@/components/Homecon';
import Footer from '@/components/Footer';
import Link from 'next/link'

export default function AboutPage() {
  const services = [
    {
      title: "Expert Business Automation Services",
      description: "Our team of certified automation specialists utilizes cutting-edge technology and methodologies to streamline business processes and increase efficiency.",
      icon: "/serv2.png"
    },
    {
      title: "Custom Website Development",
      description: "Specialized in creating responsive, modern websites that drive conversions and enhance user experience across all platforms.",
      icon: "/serv3.png"
    },
    {
      title: "Advanced AI Integration Services",
      description: "Comprehensive AI capabilities to integrate intelligent solutions that improve decision-making and customer experiences.",
      icon: "/serv4.png"
    },
    {
      title: "Strategic Digital Transformation",
      description: "Data-driven approach to modernize business operations through strategic technology implementation and digital transformation.",
      icon: "/serv5.png"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[150vh] md:h-[100vh] xl:h-[150vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/sve5.svg"
            alt="About Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-start justify-end">
          <div className="max-w-3xl mt-44 text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-200">
              We are a team of dedicated professionals specializing in business automation, website development, and AI integration. Our mission is to help businesses transform their operations through advanced technology solutions and strategic digital transformation.
            </p>
            <p className='text-xl text-gray-200 mt-2'>
            HIC TECH was founded by Technology Experts, Software Developers, AI Specialists and Digital Transformation Consultants. With over 4 years of experience in these fields individually they came together to form a boutique Technology Solutions Group focused on delivering results.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-20 w-20 mb-6">
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

      {/* Approach Section */}
      <div className="relative w-full py-20 xl:h-[150vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-center">
          <Image
            src="/sve8.svg"
            alt="Approach Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:mt-2 mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-white mb-4">Our Approach</h2>
              <h3 className="text-2xl font-bold text-blue-500 mb-6">How We Deliver Technology Solutions</h3>
              <p className="text-lg text-gray-300 mb-8">
                Our systematic approach combines advanced technology with proven development methodologies to ensure successful digital transformation. We begin with comprehensive analysis, followed by strategic planning and execution, maintaining strict quality standards throughout the process.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-200">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Initial Assessment and Strategy Development
                </li>
                <li className="flex items-center text-gray-200">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Technology Stack Analysis
                </li>
                <li className="flex items-center text-gray-200">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Solution Development and Implementation
                </li>
                <li className="flex items-center text-gray-200">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Testing, Deployment and Support
                </li>
              </ul>
              <div className="text-left mt-12">
           <Link href='/contact'> <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Speak to an expert
            </button></Link>
          </div> 
            </div>
            {/* <div className="relative h-[500px] w-full">
              <Image
                src="/cebg1.png"
                alt="Our Approach"
                fill
                className="object-contain"
              />
            </div> */}
          </div>
        </div>
      </div>

      <Homecon />
      <Footer />
    </>
  );
}