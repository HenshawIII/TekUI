import Image from 'next/image';

export default function Process() {
  return (
    <div className="w-full bg-white py-10 md:py-2  mb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-left mb-16">
          <h2 className="text-4xl tracking-wide font-extrabold mb-6">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl ">
            We follow a streamlined approach to deliver comprehensive business automation and tech solutions that meet your specific needs.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 items-center justify-between gap-8">
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
  );
} 