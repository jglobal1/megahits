'use client';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaSoundcloud } from 'react-icons/fa';
import Head from 'next/head';

export default function Crew() {
  return (
    <div className="relative w-full min-h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('IMG-20250304-WA0009.jpg')" }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      

    

      {/* Crew Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-6">
        <h1 className="text-5xl font-bold mb-6">Our Team is Coming Soon</h1>
        <p className="text-xl text-center mb-6 max-w-3xl">
          We are working hard to bring together an incredible crew to support the future of our brand. Stay tuned for more updates, and follow our progress.
        </p>
        <Link href="/contact" className="px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition">Join Us</Link>
      </div>

      {/* Social Media Links */}
      <div className="absolute bottom-0 left-0 right-0 text-center p-6 text-white">
        <div className="flex justify-center space-x-4 mt-3">
          <Link href="https://instagram.com" className="text-white text-xl"><FaInstagram /></Link>
          <Link href="https://facebook.com" className="text-white text-xl"><FaFacebook /></Link>
          <Link href="https://soundcloud.com" className="text-white text-xl"><FaSoundcloud /></Link>
        </div>
        <p className="mt-4 text-xs underline">Terms & Conditions</p>
      </div>
    </div>
  );
}
