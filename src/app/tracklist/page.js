'use client';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaSoundcloud } from 'react-icons/fa';

export default function TracklistPage() {
  const tracks = [
    "Vacant - Vesper", "Magisterium - Broken Radio", "Shft.rar - Maldicho",
    "Premiere: Footclan - Like a Boss", "Premiere: AnD - Chaos Ascending",
    "Premiere: Tarnish - Black Hole Factory", "CMRK - Dahaka",
    "Decadence - Sunset in Bret", "Ecus - Connex - Second Force",
    "Premiere: Exos - Mocoa Beats", "NHLS - Metamorphose",
    "Premiere: Rohrschack - Postcard From 1985", "Pakard - Verso de Nostalgia",
    "Pakard - Swomp", "Pakard - Tension", "Pakard - El Hombre Girls",
    "Pakard - Do You Hear Me", "Pakard - Reflejos", "Aldos - Isi",
    "BXTR & Diazepin - First Scape", "Danny Wabbit - Muay", "Fhase 87 - La Rage",
    "Semente Da Vida", "Pakard - Mi Destibo Es Lo Que Soy",
    "Pakard, Augustina Alkover - Soul Tribe", "Pakard - No Stress",
    "Paul Begge - 4 Fingers Methods", "HDER - Grain Pluck", "Ku-etzal - Evolution",
    "RVRSRVR - Hasty", "AXLR - Limitless", "I Got the Music - GRAVEKID",
    "NVNS - I Don’t Know to Be Save", "Damp - Fire", "Marco Kanda - Levitate",
    "Nekro TFFV - Capitalism Means Getting Fucked", "Bollmann - Prime Nexus",
    "Matron & Gewoonraves - Knock Knock", "Mayska - Only Party", "Parapher - Y",
    "Parapher - X", "2Vne - Make You Mine", "Chateaux - All Problems Solved",
    "DICA - Gemini", "RDMTN - Street Soul", "Comrave & Ternash - F*ck It",
    "Comrade & Ternash - King Return", "Ternash - Black Hole",
    "Ternash - Arrogant Maron", "Ternash - Belial", "Ternash - Cyber Whistler",
    "ECZODIA - Give Em Hell", "QUASFAR - Hell Damage", "HERESYS - Free Your Mind",
    "Muzan - Algorithm", "Storm - Bass Mind", "CADZOWN - Satisfaction",
    "GALLO - Bass Drop", "Joey Risdon - Perception", "Unholy Devotion - Dogma",
    "Simon - Music Is My Religion", "Eczko - Even When I Lie",
    "Neodrama - Brazila", "Tempot - Grin Macabre", "R-Nin - Transmitted",
    "Jubatus - Korean Eyes", "Dr:Sound - Atache", "Ternash - Midnight Crysis",
    "Comrade & Ternash - F*ck It", "Mounem - Not Like Us",
    "AM - Destructive Strike", "Koda - 369", "DRos - Encore",
    "Klofama - Error", "Ikkhi - Everybody Break Down", "Raxeller - Malicious",
    "YESOLO - Nuclear Fallout", "Mike Steventon - Take Me There",
    "CDRC - All You Got", "Klofama x USH - Fueled On Vodka",
    "Nirvana - Smells Like Teen Spirit", "Outerkult - Hollow Faith",
    "Eczko, Renox - Domination", "Vino - All I Know Is Pain",
    "Hans Zimmer - Dune Theme", "Notax - I Don’t Care", "Perle - IRma",
    "Moshpit FRDL", "Psychotik - Evil Incarnate", "NVNS - I Don’t Know to Be Save",
    "To Infinity and Beyond", "Lady Gaga - Bad Romance",
    "Rorey - Echoes of Darkness", "KXCHR - Do You Wanna Dance",
    "KYCHR - Hou Hou", "Ceejay - Demons Taking Over Me",
    "Dometech - Everyone Lies", "DNNS - Curse Me with a Kickdrum",
    "Rythemboy x Selenite - Shut Your Eyes", "Mahtal - Clap That",
    "Indeed - Freedom Inside Your Illness", "Comrave & Ternash - King Return",
    "State of Minds - Mr Sandman", "Santos & Jxln - Absolute Destruction",
    "Occult Awakening", "2fel - Hijack Mission Ill", "Frik - She's Gone Psycho",
    "Miyuki Omaru - You & Me", "CDRC - All You Got", "Klofama x USH - Fueled on Vodka",
    "Low Impact - F*ck It"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Image */}
      <div 
        className="relative w-full h-[400px] bg-cover bg-center" 
        style={{ backgroundImage: "url('aal.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold">🎵 Tracklist</h1>
          <p className="mt-2 text-lg text-gray-300">Latest Releases & Sets</p>
        </div>
      </div>

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-6 py-4 border-b border-gray-700 bg-black bg-opacity-80">
        <Link href="/" className="text-white text-lg font-bold">MECAGOTHITS</Link>
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/artists" className="hover:text-gray-400">Artists</Link>
          <Link href="/crew" className="hover:text-gray-400">Crew</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
      </nav>

      {/* Tracklist Section */}
      <div className="max-w-4xl mx-auto py-10 px-6">
        <ul className="space-y-4 text-lg text-gray-300">
          {tracks.map((track, index) => (
            <li key={index} className="border-b border-gray-700 pb-2">
              {index + 1}. {track}
            </li>
          ))}
        </ul>
      </div>

      {/* Social Media Links */}
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold">Follow MECA for More</h2>
        <div className="mt-4 flex justify-center space-x-6">
          <Link href="https://beacons.ai/mecagothits" className="hover:text-gray-400 text-lg">
            🔗 Beacons
          </Link>
          <Link href="https://soundcloud.com/mecagothits" className="hover:text-gray-400 text-lg">
            🎵 SoundCloud
          </Link>
          <Link href="https://mecagothits-x1tmtnz.gamma.site" className="hover:text-gray-400 text-lg">
            🌍 Official Site
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-center py-4 border-t border-gray-700">
        <p>© 2025 MEGAHITS. All rights reserved.</p>
      </footer>
    </div>
  );
}
