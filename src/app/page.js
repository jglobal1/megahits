'use client';
import { useState, useEffect } from 'react';
import { FaInstagram, FaFacebook, FaSoundcloud } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  const [showSection, setShowSection] = useState(false);
  const [isDaydanceOpen, setIsDaydanceOpen] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    const section = document.querySelector('.scroll-section');
    if (window.scrollY > section.offsetTop - window.innerHeight) {
      setShowSection(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to Next Section
  const scrollToNext = () => {
    const nextSection = document.querySelector('.scroll-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Head>

      {/* Hero Section with Video Background */}
      <div className="relative w-full h-screen">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover sm:mt-0 mt-8">
          <source src="screenrecording_02-15-2025_23-18-40_1.mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          
          {/* Navigation */}
          <div className="absolute top-4 left-0 right-0 flex justify-between items-center sm:justify-center sm:space-x-8 text-lg font-bold uppercase px-6 py-4">
            
            {/* Logo */}
            <div className="flex items-center space-x-4 absolute left-1/2 transform -translate-x-1/2 sm:left-4 sm:transform-none">
              <img src="IMG-20250224-WA0034(1).jpg" alt="Logo" className="h-8" />
            </div>

            {/* Menu Items */}
            <div className="flex justify-center flex-grow space-x-8 text-lg font-medium hidden sm:flex">
              
              {/* DAYDANCE Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDaydanceOpen(!isDaydanceOpen)}
                  className="hover:text-gray-300 transition flex items-center"
                >
                  DAYDANCE {isDaydanceOpen ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
                </button>

                {isDaydanceOpen && (
                  <div className="absolute left-0 mt-2 w-40 text-white border border-gray-600 rounded-lg shadow-lg">
                    <Link href="/daydance/klewen" className="block px-4 py-2 hover:bg-gray-800">Klewen</Link>
                    <Link href="/daydance/rigi" className="block px-4 py-2 hover:bg-gray-800">Rigi</Link>
                    <Link href="/daydance/sachseln" className="block px-4 py-2 hover:bg-gray-800">Sachseln</Link>
                    <Link href="/daydance/pilatus" className="block px-4 py-2 hover:bg-gray-800">Pilatus</Link>
                  </div>
                )}
              </div>

              <Link href="/artists" className="hover:text-gray-300 transition">ARTISTS</Link>
              <Link href="/crew" className="hover:text-gray-300 transition">CREW</Link>
              <Link href="/contact" className="hover:text-gray-300 transition">CONTACT</Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 absolute right-4 sm:flex">
              <Link href="https://instagram.com" className="text-white">
                <FaInstagram />
              </Link>
              <Link href="https://facebook.com" className="text-white">
                <FaFacebook />
              </Link>
              <Link href="https://soundcloud.com" className="text-white">
                <FaSoundcloud />
              </Link>
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            MEGAHITS
          </h1>
          <p className="mt-2 text-sm sm:text-lg">
            Bringing the best beats to the world.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full justify-center">
            <Link href="/ticket" className="text-white px-5 py-2 border border-white rounded-full text-sm transform hover:bg-white hover:text-black transition">
              BUY TICKETS
            </Link>
            <Link className="text-white px-5 py-2 border border-white rounded-full text-sm transform hover:bg-white hover:text-black transition" href="/artists">
              LEARN MORE
            </Link>
            <Link href="/tracklist" className="text-white px-5 py-2 border border-white rounded-full text-sm transform hover:bg-white hover:text-black transition" href="/tracklist">
              VIEW TRACKLIST
            </Link>
          </div>

          {/* Down Arrow Button */}
          <button onClick={scrollToNext} className="absolute bottom-8 text-white animate-bounce">
            <FiChevronDown size={30} />
          </button>
        </div>
      </div>

      {/* MEGAHITS Scroll Section */}
      <div className="scroll-section flex flex-col items-center justify-center py-16">
        <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-center">
          MEGAHITS
        </h2>                  

        <p className="text-sm sm:text-xl text-center mt-2">
          MEGAHITS bezweckt die Förderung der Kultur, der Musik und dient als Freizeitbeschäftigung für Junge und Junggebliebene.
        </p>
        <Link href="/about" className="text-sm sm:text-lg mt-4 inline-block border border-white px-5 py-2 rounded-full text-white hover:bg-white hover:text-black transition">
          mehr über uns
        </Link>
      </div>

      {/* KONTAKT Section with Background Image */}
      <div className="relative bg-cover bg-center h-screen pt-20" style={{ backgroundImage: "url('65afadd13414fdde3ff7be26_how-to-become-a-dj-10-tips-for-independent-producers-header.jpeg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-white">
            KONTAKT
          </h2>
          <p className="text-sm sm:text-xl text-center mt-2 text-white">
            Hier erreichst du uns...
          </p>
          <Link href="/contact" className="mt-4 text-sm sm:text-lg inline-block border border-white px-5 py-2 rounded-full text-white hover:bg-white hover:text-black transition">
            weiter
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4 text-sm">
        <p>© 2025 MEGAGOTHITS. All rights reserved.</p>
      </footer>
    </div>
  );
}
