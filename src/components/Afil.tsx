import Image from 'next/image';

export default function Afil() {
  return (
    <div className="w-full bg-white relative h-[50vh] sm:mb-0 mb-32 xl:h-[100vh] flex items-center justify-center">
      <div className='flex flex-col items-center justify-center text-center'>
        <Image src={'/Hick.png'} alt='treqo' width={500} className='object-contain' height={500} />
        <div className="mt-4">
          <p className='text-3xl font-extrabold text-gray-700 text-nowrap'>HIC_TECH Solutions &copy;</p>
        </div>
      </div>
    </div>
  );
} 