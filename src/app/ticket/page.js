'use client';
import { FaInstagram, FaFacebook, FaSoundcloud } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Ticket() {
  const [showModal, setShowModal] = useState(false);

  // Handle modal close
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('IMG-20250304-WA0009.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Tickets Available Soon</h1>
          <p className="text-xl mb-6 max-w-3xl">
            Tickets for the event will be available soon. In the meantime, you can still request tickets manually by sending us a message via WhatsApp.
          </p>

          <a
            href="https://wa.me/1234567890?text=Hi!%20I'm%20interested%20in%20buying%20tickets%20for%20your%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="text-white px-6 py-3 bg-green-500 rounded-full hover:bg-green-600 transition mb-4"
          >
            Send Message on WhatsApp
          </a>

          <button
            onClick={closeModal}
            className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
           <Link href="/">
              Home
            </Link>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4 text-sm">
        <p>© 2025 MEGAGOTHITS. All rights reserved.</p>
      </footer>

      {/* Social Media Icons */}
      <div className="absolute bottom-0 left-0 right-0 text-center p-6 text-white">
        <div className="flex justify-center space-x-4 mt-3">
          <Link href="https://instagram.com" className="text-white text-xl">
            <FaInstagram />
          </Link>
          <Link href="https://facebook.com" className="text-white text-xl">
            <FaFacebook />
          </Link>
          <Link href="https://soundcloud.com" className="text-white text-xl">
            <FaSoundcloud />
          </Link>
        </div>
      </div>
    </div>
  );
}
