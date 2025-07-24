import Image from 'next/image';
import Link from 'next/link';

export default function Blob() {
  return (
    <div className="relative w-[100vw] md:min-[1025px]:h-[150vh] h-[100vh] max-[380px]:h-[150vh] overflow-hidden">
      {/* Mobile */}
      <div 
        className="w-[100%] flex flex-col items-center justify-start h-full absolute top-0 inset-0 z-0 bg-cover md:hidden bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/sve1.svg")',
          width: '100%',
          height: '100%',
        }}
      >
        <div className="relative z-10 min-[1025px]:mt-64 text-left text-white px-8 mt-10">
          <h2 className="text-4xl font-bold mb-6">Software</h2>
          <h3 className="text-3xl text-blue-400 font-semibold mb-8">Automate, Develop, and Integrate</h3>
          <p className="text-lg max-w-2xl mx-auto">
          HIC TECH uses cutting-edge development tools and automation software designed by experienced tech professionals, tailor-made for modern businesses, ensuring the most effective digital transformation.
          </p>
         <Link href={'/contact'}> <button className="bg-transparent hover:scale-110 mt-10  border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-full hover:bg-blue-800 hover:text-white font-bold hover:bg-opacity-90 transition-all">
          Speak to an expert
        </button></Link>
        </div>
        <Image src="/mvee.png" alt="Blob" width={400} height={400} className="lg:mt-40" />
      </div>

      {/* Desktop */}
      <div 
        className="hidden md:flex max-[1025px]:items-center items-start justify-start w-[100%] h-full absolute top-0 inset-0 z-0 bg-cover lg:bg-contain bg-left bg-no-repeat"
        style={{
          backgroundImage: 'url("/sve3.svg")',
          width: '100%',
          height: '100%',   
        }}
      >
        <div className="relative z-10 min-[1025px]:mt-64 text-left text-white px-8">
          <h2 className="text-4xl font-bold mb-6">Software</h2>
          <h3 className="text-3xl text-blue-400 font-semibold mb-8">Automate, Develop, and Integrate</h3>
          <p className="text-lg max-w-2xl mx-auto">
          HIC TECH uses cutting-edge development tools and automation software designed by experienced tech professionals, tailor-made for modern businesses, ensuring the most effective digital transformation.
          </p>
          <Link href="/contact"><button className="bg-transparent hover:scale-110 mt-10  border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-full hover:bg-blue-800 hover:text-white font-bold hover:bg-opacity-90 transition-all">
          Speak to an expert
        </button></Link>
        </div>
        <Image src="/mvee.png" alt="Blob" width={700} height={700} className="mt-10" />
      </div>
    </div>
  );
} 