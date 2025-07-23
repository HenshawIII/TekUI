import Image from 'next/image';
import Link from 'next/link'

export default function Homecon() {
  return (
    <div className="w-full relative min-h-[100vh] py-20 mt-60">
      {/* Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-contain bg-center bg-repeat"
        style={{
          backgroundImage: 'url("/bge1.svg")',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-[100%] mx-auto">
        <div className="md:absolute -top-40 inset-x-20 w-[85%] md:min-[850px]:h-[100vh] mx-auto bg-white rounded-[20px] shadow-2xl shadow-[#003169]/50">
          <div className="flex flex-col md:flex-row pl-8 pt-0 max-[450px]:p-8 md:pr-0 gap-8">
            {/* Contact Information */}
            <div className="flex-1 space-y-6 mt-4">
              <div>
                <h3 className="text-xl font-bold mb-3">Contact Us</h3>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    {/* Phone icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.3 1.2a2 2 0 01-.45 1.95l-.7.7a16.001 16.001 0 006.586 6.586l.7-.7a2 2 0 011.95-.45l1.2.3A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C7.163 23 1 16.837 1 9V8a2 2 0 012-2z" /></svg>
                    <span className="font-semibold">Phone:</span>
                    <a  href="tel:+3197005034449" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900 transition-colors">+234 915 229 0903</a>
                  </p>
                  <p className="flex items-center gap-2">
                    {/* WhatsApp icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black" viewBox="0 0 32 32" fill="currentColor"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.857 5.08 2.357 7.13L4 29l7.13-2.357A11.93 11.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.89-.58-5.52-1.67l-.39-.25-4.23 1.4 1.4-4.23-.25-.39A9.94 9.94 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.29-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 5.02 4.22.7.24 1.25.38 1.68.48.71.15 1.36.13 1.87.08.57-.06 1.75-.72 2-1.41.25-.69.25-1.28.18-1.41-.07-.13-.25-.2-.53-.34z"/></svg>
                    <span className="font-semibold">Phone:</span>
                    
                    <a href="https://wa.me/+2348169718088" className="text-blue-700 underline hover:text-blue-900 transition-colors">+234 816 971 8088</a>
                  </p>
                  <p className="flex items-center gap-2">
                    {/* Mail icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v4" /></svg>
                    <span className="font-semibold">Email:</span>
                    <a href="mailto:support@hictech.com" className="text-blue-700 underline hover:text-blue-900 transition-colors">support@hictech.com</a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Address</h3>
                <p className="text-gray-600">
                  23 Eko Road<br />
                  Lagos, Nigeria<br />
                  Nigeria
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Opening Hours</h3>
                <div className="space-y-1">
                  <p className="flex justify-start">
                    <span className="font-semibold pr-2">Monday - Friday - </span>
                    <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-start ">
                    <span className="font-semibold pr-2">Saturday - </span>
                    <span className="text-gray-600"> 10:00 AM - 4:00 PM</span>
                  </p>
                  <p className="flex justify-start">
                    <span className="font-semibold pr-2">Sunday - </span>
                    <span className="text-gray-600">Closed</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Image Background */}
            <div className='flex-1 h-[100vh] '>
              {/* Mobile Background */}
              <div 
                className="md:hidden flex items-start justify-center relative rounded-lg overflow-hidden h-full"
                style={{}}
              >
               <div className="flex flex-col items-center justify-center relative z-10 min-[1025px]:mt-64 text-center text-white px-8">
          <h2 className="text-4xl font-bold mb-2 text-black border-t-2 border-black pt-10">Get in touch</h2>
          <h3 className=" text-black mb-2">We look forward to hearing from you</h3>
          
          <Link href="/contact">  <button className="bg-[#003169] hover:scale-110 mt-10  text-white px-8 py-3 rounded-full hover:bg-blue-800 hover:text-white font-bold hover:bg-opacity-90 transition-all">
          BOOK APPOINTMENT
        </button></Link>
        </div>
              </div>

              {/* Desktop Background */}
              <div 
                className="hidden md:flex items-start justify-center relative rounded-lg overflow-hidden h-full"
                style={{
                  backgroundImage: 'url("/bge2.svg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'right',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className='absolute right-12 xl:-top-52 md:top-10 max-[1024px]:top-10'>
                <div className="flex flex-col items-center justify-center relative z-10 min-[1025px]:mt-64 text-left text-white px-8">
          <h2 className="text-4xl font-bold mb-6 text-black">Get in touch</h2>
          <h3 className=" text-black mb-8">We look forward to hearing from you</h3>
          
          <Link href={'/contact'}>  <button className="bg-[#003169] hover:scale-110 mt-10  text-white px-8 py-3 rounded-full hover:bg-blue-800 hover:text-white font-bold hover:bg-opacity-90 transition-all">
          BOOK APPOINTMENT
        </button></Link>
        </div>
                </div>
               
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 