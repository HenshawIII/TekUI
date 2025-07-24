import Image from "next/image";
import CountUp from "./CountUp";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
        
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl md:text-4xl  text-[#003169] mb-6">About <span className="text-3xl md:text-4xl font-bold text-[#003169]">HIC TECH</span></h2>
            <div className="w-20 h-1 bg-[#003169] mb-6"></div>
            <p className="text-gray-600 mb-6 text-lg">
              Founded in 2020, HIC TECH has emerged as a leading technology solutions provider specializing in business automation, website development, and AI integration. Our team combines expertise in modern web technologies, artificial intelligence, and business process optimization.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              We've successfully transformed hundreds of businesses worldwide, helping them automate processes, build stunning websites, and integrate AI solutions that drive growth and efficiency.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#003169] mb-2">4+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#003169] mb-2"><CountUp
  from={0}
  to={50}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="hidden lg:block relative">
              <div className="w-full h-96 bg-blue-600 rounded-lg overflow-hidden">
                <Image
                  src="/offy.png"
                  alt="HIC TECH Team"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#003d23]">100%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
              <div className="absolute top-2 right-10 w-48 h-48 bg-transparent rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className=" text-gray-400">HICTECH.com &copy; </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 