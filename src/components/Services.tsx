import Image from 'next/image';

export default function Services() {
  return (
    <section id="services" className="pt-32 bg-white px-10 md:px-20">
      <div className="container mx-auto px-6">
        {/* <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Crypto Intelligence Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to protect, track, and recover your digital assets with unparalleled expertise.
          </p>
        </div> */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Service 1 */}
          <div className="p-8 flex flex-col items-center text-center">
            <div className=" flex items-center justify-center mb-6">
             <Image src="/serv1.png" alt="Business Automation" width={150} height={64} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Business Automation</h3>
            <p className="text-gray-600 text-sm tracking-wide">
            Streamline your operations with intelligent automation solutions. We design and implement custom workflows that reduce manual tasks and increase efficiency.
            </p>
          </div>
          
          {/* Service 2 */}
          <div className="p-8 flex flex-col items-center text-center">
            <div className=" flex items-center justify-center mb-6">
             <Image src="/serv5.png" alt="Website Development" width={150} height={64} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Website Development</h3>
            <p className="text-gray-600 text-sm tracking-wide">
            Create stunning, responsive websites that convert visitors into customers. Our custom development solutions are built with modern technologies and SEO best practices.
            </p>
          </div>
          
          {/* Service 3 */}
          <div className="p-8 flex flex-col items-center text-center">
            <div className=" flex items-center justify-center mb-6">
             <Image src="/serv2.png" alt="AI Integration" width={150} height={64} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI Integration</h3>
            <p className="text-gray-600 text-sm tracking-wide">
            Harness the power of artificial intelligence to enhance your business processes. We integrate AI solutions that improve decision-making and customer experiences.
            </p>
          </div>

          {/* Service 4 - Tech Consulting */}
          <div className="p-8 flex flex-col items-center text-center">
            <div className=" flex items-center justify-center mb-6">
             <Image src="/serv4.png" alt="Tech Consulting" width={150} height={64} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Tech Consulting</h3>
            <p className="text-gray-600 text-sm tracking-wide">
            Strategic technology consulting to help your business leverage the latest innovations. We provide roadmap planning, technology audits, and digital transformation guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 