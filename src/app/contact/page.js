'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaSoundcloud } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [showModal, setShowModal] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center text-white"
         style={{ backgroundImage: "url('aal.jpg')" }}>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Navigation */}
      <div className="absolute top-4 left-4">
        <img src="/logo.png" alt="Logo" className="h-12" />
      </div>

      <nav className="absolute top-4 left-0 right-0 flex justify-center space-x-6 text-lg uppercase">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/daydance" className="hover:text-gray-300">Daydance</Link>
        <Link href="/artists" className="hover:text-gray-300">Artists</Link>
        <Link href="/crew" className="hover:text-gray-300">Crew</Link>
        <Link href="/contact" className="text-gray-500 cursor-default">Contact</Link>
      </nav>

      {/* Contact Form Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-6">
        <h1 className="text-5xl font-bold mb-6">KONTAKT</h1>

        <form className="w-full max-w-lg">
          <input
            type="text"
            name="firstName"
            placeholder="Vorname"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full bg-white text-black rounded-full px-6 py-3 mb-4"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Nachname"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full bg-white text-black rounded-full px-6 py-3 mb-4"
          />
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white text-black rounded-full px-6 py-3 mb-4"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Telefon"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-white text-black rounded-full px-6 py-3 mb-4"
          />
          <textarea
            name="message"
            placeholder="Gib hier deine Nachricht ein"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-white text-black rounded-lg px-6 py-3 mb-4 h-32"
          />
          <button type="submit"
            className="w-full bg-transparent border border-white text-white rounded-full px-6 py-3 hover:bg-white hover:text-black transition">
            Senden
          </button>
        </form>
      </div>

      {/* Thank You Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h2 className="text-2xl font-bold">Vielen Dank!</h2>
            <p className="mt-2 text-gray-700">
              Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns bald bei Ihnen melden!
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
              Schließen
            </button>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <div className="absolute bottom-0 left-0 right-0 text-center p-6 md:p-[-1600px] text-white">
       
        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-3">
          <Link href="https://instagram.com" className="text-white text-xl"><FaInstagram /></Link>
          <Link href="https://facebook.com" className="text-white text-xl"><FaFacebook /></Link>
          <Link href="https://soundcloud.com" className="text-white text-xl"><FaSoundcloud /></Link>
        </div>

        {/* Terms & Conditions */}
        <p className="mt-4 text-xs underline">Terms & Conditions</p>
      </div>
    </div>
  );
}
