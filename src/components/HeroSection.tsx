
import Image from 'next/image';
import Link from 'next/link';
import TransparentButton from './TransparentButton';
import LeftArrow from '../icons/LeftArrow';
import RightArrow from '../icons/RightArrow';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[105vh] ">
  
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/city-skyline.png"
          alt="City skyline"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-blue-900/50 pointer-events-none"></div>
      </div>

      <nav className="relative z-20 flex items-center justify-evenly bg-transparent px-8 py-6">
        <div className="flex items-center">
          <h1 className="text-4xl font-bold">
            <span className="text-white">Turkish</span>
            <span className="text-red-500"> Week</span>
          </h1>
        </div>
        
        <div className="hidden text-lg md:flex items-center space-x-8">
          <NavLink href="/">About</NavLink>
          <NavLink href="/">Shows</NavLink>
          <NavLink href="/">Sponsor</NavLink>
          <NavLink href="/">Exhibit</NavLink>
          <NavLink href="/">Speakers</NavLink>
          <NavLink href="/">Agenda</NavLink>
          <NavLink href="/">Contact</NavLink>
        </div>
        
        <div className="flex items-center space-x-4 text-lg">
          <Link href="/login" className="text-white hover:text-gray-400 transition">
            Login
          </Link>
          <TransparentButton href='/' text="Register"/>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 -mt-16">
        <p className="text-xl mb-2">Celebrating The 75 Years Anniversary Between</p>
        <h2 className="text-5xl md:text-7xl font-bold mb-2 tracking-wide">
          ANNIVERSARY BETWEEN
        </h2>
        <h2 className="text-5xl md:text-7xl font-bold mb-2 tracking-wide">
          TURKEY & LATIN WORLD
        </h2>
        <h2 className="text-5xl md:text-7xl font-bold text-transparent" style={{ WebkitTextStroke: '2px #FFFFFF' }}>
          DIPLOMATIC RELATIONSHIP.
        </h2>
        
        <div className="mt-8 ">
          <TransparentButton href='/' text="Register"/>
        </div>
      </div>

      {/* Slider Navigation */}
      <div className="absolute bottom-12 left-0 md:bottom-[50%] right-0 z-10 flex justify-between px-8">
        <button className="group bg-white h-11 w-11 hover:bg-red-700 text-red-500 hover:text-white rounded-full transition flex items-center justify-center">
          <LeftArrow />
        </button>
        <button className="group bg-white h-11 w-11 hover:bg-red-700 text-red-500 hover:text-white rounded-full transition flex items-center justify-center">
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

const NavLink = ({ href, children }: { href: string; children: string | React.ReactNode }) => {
  return (
    <Link href={href} className="text-white hover:text-gray-400 transition block">
      {children}
    </Link>
  );
};

export default HeroSection;