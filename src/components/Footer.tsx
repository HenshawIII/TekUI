import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">HIC_TECH</h3>
            <p className="text-gray-400">
              Leading the way in business automation, website development, and AI integration services worldwide.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Image src="/twitter.png" alt="Twitter" width={24} height={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/complaint" className="text-gray-400 hover:text-white transition-colors">Lodge a complaint</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Business Automation</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Website Development</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">AI Integration</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Tech Consulting</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">23 Eko Road, Lagos, Nigeria</li>
              {/* <li className="text-gray-400">1727 S Indiana, Nairobi, Kenya</li> */}
              <li className="text-gray-400">Phone: +234 816 971 8088</li>
              <li className="text-gray-400">Email: support@hictech.com</li>
            </ul>
          </div>
        </div>

        {/* Affiliate Images */}
        <div className="border-t border-gray-800 pt-8">
          <div className="w-full relative h-[10vh] sm:mb-0 mb-32 md:h-[20vh] flex xl:items-end xl:justify-start items-start justify-center">
            <div className='flex flex-col xl:flex-row items-center justify-center gap-4'>
              <Image src={'/hicwhi.png'} alt='treqo' width={100} className='object-contain' height={100} />
              <p className='text-3xl font-extrabold text-gray-400 text-nowrap'>HIC_TECH Solutions &copy;</p>
              <p className='text-gray-400'>{new Date().getFullYear()}, All rights reserved.</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        
      </div>
    </footer>
  );
} 