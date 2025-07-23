import Image from 'next/image';

export default function Location() {
  return (
    <div className="w-full bg-white py-10 md:py-2 mb-16 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-left mb-16">
          <h2 className="text-4xl tracking-wide font-extrabold mb-6">Our Locations</h2>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* London Office */}
          <div className="w-[80vw] mx-auto sm:w-[40vw]  lg:w-[26vw] bg-white rounded-[20px] flex flex-col items-center justify-center shadow-2xl shadow-[#003169]/50 transition-all duration-300 hover:scale-105">
            <div className="relative h-[200px] w-full flex items-center justify-center">
              <Image
                src="/london.png"
                alt="London Office"
                className="object-contain self-center justify-self-center rounded-t-lg"
                width={200}
                height={200}
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-extrabold mb-2">Lagos</h3>
              <h4 className="text-lg font-bold text-gray-700 mb-3">Global Investigations Office</h4>
              <p className="font-light text-gray-60 w-full">
                23 Eko Road,
                Lagos, Nigeria
              </p>
            </div>
          </div>

          {/* Dubai Office */}
          <div className="w-[80vw] mx-auto sm:w-[40vw] lg:w-[26vw] bg-white rounded-[20px] md:h-[450px] flex flex-col items-center justify-center shadow-2xl shadow-[#003169]/50 transition-all duration-300 hover:scale-105">
            <div className="relative h-[200px] w-full flex items-center justify-center">
              <Image
                src="/dubai.png"
                alt="Dubai Office"
                width={200}
                height={200}
                className="object-contain self-center justify-self-center rounded-t-lg"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-extrabold mb-2">Kenya</h3>
              <h4 className="text-lg font-bold text-gray-700 mb-3">International Headquarters</h4>
              <p className="font-light text-gray-60 w-full">
                1727 S Indiana,
                Nairobi, Kenya
              </p>
            </div>
          </div>

          {/* Singapore Office */}
          {/* <div className="w-[80vw] mx-auto sm:w-[40vw] lg:w-[26vw] bg-white rounded-[20px] flex flex-col items-center justify-center shadow-2xl shadow-[#003169]/50 transition-all duration-300 hover:scale-105">
            <div className="relative h-[200px] w-full">
              <Image
                src="/singapore.png"
                alt="Singapore Office"
                width={200}
                height={200}
                className="object-contain self-center justify-self-center rounded-t-lg"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-extrabold mb-2">Singapore</h3>
              <h4 className="text-lg font-bold text-gray-700 mb-3">Asia Pacific Headquarters</h4>
              <p className="font-light text-gray-60 w-full">
                456 Marina Bay
                Singapore, 018956
                Singapore
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
} 