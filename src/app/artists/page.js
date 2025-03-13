'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaInstagram, FaFacebook, FaSoundcloud } from 'react-icons/fa';
import Head from 'next/head';

export default function Artists() {
  // State to manage the mobile menu and modal visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle menu for mobile responsiveness
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle modal visibility
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Head>

      {/* Hero Section with Background Image */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('IMG-20250224-WA0034(1).jpg')" }} // Change to actual image path
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Navigation */}
        <div className="absolute top-4 left-0 right-0 flex justify-between items-center sm:justify-center sm:space-x-8 text-lg font-bold uppercase px-6 py-4">
          {/* Logo with Home Link */}
          <div className="flex items-center space-x-4 absolute left-4">
            <Link href="/" className="hover:text-gray-300 transition">
              <img src="IMG-20250224-WA0034(1).jpg" alt="Logo" className="h-8" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex justify-center flex-grow space-x-8 text-lg font-medium">
            <Link href="/" className="hover:text-gray-300 transition">HOME</Link>
            <Link href="/daydance" className="hover:text-gray-300 transition">DAYDANCE</Link>
            <Link href="/artists" className="text-gray-500 cursor-default">ARTISTS</Link>
            <Link href="/crew" className="hover:text-gray-300 transition">CREW</Link>
            <Link href="/contact" className="hover:text-gray-300 transition">CONTACT</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-white"
            onClick={toggleMenu}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black text-white absolute left-0 right-0 top-16`}>
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" className="hover:text-gray-300 transition">HOME</Link>
            <Link href="/daydance" className="hover:text-gray-300 transition">DAYDANCE</Link>
            <Link href="/artists" className="text-gray-500 cursor-default">ARTISTS</Link>
            <Link href="/crew" className="hover:text-gray-300 transition">CREW</Link>
            <Link href="/contact" className="hover:text-gray-300 transition">CONTACT</Link>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 absolute right-4 sm:flex">
          <Link href="https://instagram.com" className="text-white hover:text-gray-300 transition">
            <FaInstagram size={20} />
          </Link>
          <Link href="https://facebook.com" className="text-white hover:text-gray-300 transition">
            <FaFacebook size={20} />
          </Link>
          <Link href="https://soundcloud.com" className="text-white hover:text-gray-300 transition">
            <FaSoundcloud size={20} />
          </Link>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:pt-90 text-center">
        <h2
          className="text-4xl sm:text-6xl font-bold text-white uppercase cursor-pointer hover:text-yellow-400 transition-all duration-300"
          onClick={openModal}
        >
          RESIDENT
        </h2>
        <h1
          className="text-5xl sm:text-7xl font-extrabold leading-tight text-white cursor-pointer hover:text-yellow-400 transition-all duration-300"
          onClick={openModal}
        >
          BOOKINGS
        </h1>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70">
          <div className="bg-white text-black p-8 rounded-lg">
            <h2 className="text-3xl mb-4">Thank you for your interest!</h2>
            <p>We will get back to you shortly. Stay tuned for more updates!</p>
            <button
              className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4 text-sm">
        <p>© MECAGOTHITS</p>
      </footer>
    </div>
  );
}
