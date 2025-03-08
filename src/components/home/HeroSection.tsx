"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TransparentButton from "./TransparentButton";
import LeftArrow from "@/icons/LeftArrow";
import RightArrow from "@/icons/RightArrow";

const images = ["/images/city-skyline.png", "/images/heroImg2.png"];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 1 ? 0 : 1));
  };

  return (
    <div className="relative w-full h-[105vh] overflow-hidden">
      <div
        className="absolute inset-0 z-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <Image src={src} alt="Hero background" fill style={{ objectFit: "cover" }} priority />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-blue-900/50 pointer-events-none"></div>

      <nav className="relative z-20 flex items-center justify-between bg-transparent px-6 md:px-8 py-6">
        <h1 className="md:text-4xl text-xl font-bold">
          <span className="text-white">Turkish</span>
          <span className="text-red-500"> Week</span>
        </h1>

        <div className="hidden md:flex items-center space-x-8 text-lg">
          <NavLink href="/">About</NavLink>
          <NavLink href="/">Shows</NavLink>
          <NavLink href="/">Sponsor</NavLink>
          <NavLink href="/">Exhibit</NavLink>
          <NavLink href="/">Speakers</NavLink>
          <NavLink href="/">Agenda</NavLink>
          <NavLink href="/">Contact</NavLink>
        </div>

        <div className="md:flex hidden md:flex-row items-center space-x-4 md:text-lg">
          <Link href="/login" className="text-white hover:text-gray-400 transition">
            Login
          </Link>
          <TransparentButton href="/" text="Register" />
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white text-2xl">
          ☰
        </button>
      </nav>

      <div
        className={`absolute top-0 right-0 w-full h-screen bg-black/98 text-white flex flex-col items-center justify-center space-y-6 z-30 transition-transform duration-500 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-3xl text-red-500"
        >
          ✕
        </button>
        <NavLink href="/">About</NavLink>
        <NavLink href="/">Shows</NavLink>
        <NavLink href="/">Sponsor</NavLink>
        <NavLink href="/">Exhibit</NavLink>
        <NavLink href="/">Speakers</NavLink>
        <NavLink href="/">Agenda</NavLink>
        <NavLink href="/">Contact</NavLink>
        <Link href="/login" className="text-white hover:text-gray-400 transition text-lg">
          Login
        </Link>
        <TransparentButton href="/" text="Register" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 -mt-16">
        <p className="md:text-xl mb-2">Celebrating The 75 Years Anniversary Between</p>
        <h2 className="text-2xl md:text-7xl font-bold mb-2 tracking-wide">ANNIVERSARY BETWEEN</h2>
        <h2 className="text-2xl md:text-7xl font-bold mb-2 tracking-wide">TURKEY & LATIN WORLD</h2>
        <h2 className="text-2xl md:text-7xl font-bold text-transparent" style={{ WebkitTextStroke: "2px #FFFFFF" }}>
          DIPLOMATIC RELATIONSHIP.
        </h2>
        <div className="mt-8">
          <TransparentButton href="/" text="Register" />
        </div>
      </div>

      <div className="absolute  left-0 bottom-[40%] md:bottom-[50%] right-0 z-10 flex justify-between md:px-8 px-2">
        <button
          onClick={handlePrev}
          className="group bg-white h-11 w-11 hover:bg-red-700 text-red-500 hover:text-white rounded-full transition flex items-center justify-center"
        >
          <LeftArrow />
        </button>
        <button
          onClick={handleNext}
          className="group bg-white h-11 w-11 hover:bg-red-700 text-red-500 hover:text-white rounded-full transition flex items-center justify-center"
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

const NavLink = ({ href, children }: { href: string; children: string | React.ReactNode }) => {
  return (
    <Link href={href} className="text-white hover:text-gray-400 transition block text-xl">
      {children}
    </Link>
  );
};

export default HeroSection;