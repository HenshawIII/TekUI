import Image from 'next/image';
import Link from 'next/link';

export default function AboutTracing() {
  return (
    <div className="relative w-[100vw] h-[150vh]  overflow-hidden">
      {/* Background */}
      <div 
        className="flex flex-col-reverse md:flex-row items-start md:items-center justify-center w-full h-full absolute top-0 inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/bgee.svg")',
        }}
      >

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-8 mt-20 md:mt-0 ">
        <h2 className="text-4xl font-bold mb-6">About</h2>
        <h3 className="text-3xl text-blue-400 font-semibold mb-8">Custom Tech Solutions</h3>
        <p className="text-lg max-w-3xl mx-auto text-left mb-12">
          We provide our clients with tailor-made technology solutions that match their budget and take into account the individual aspects of their business, providing our clients with the best value for their investment.
        </p>
        <Link href="/contact"><button className="bg-transparent hover:scale-110  border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-full hover:bg-blue-800 hover:text-white font-bold hover:bg-opacity-90 transition-all">
          Get Custom Tech Solution
        </button></Link>
      </div>
        <div className="sm:relative absolute top-0 mb-2 md:mt-0">
        <Image src="/phn.png" alt="Blob" width={500} height={500} className="" />
      </div>
      </div>
    </div>
  );
} 