'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-pink-600 tracking-tight">
          MatchMeter 💘
        </Link>

        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/love" className="hover:text-pink-600 transition-colors">Love</Link>
          <Link href="/friendship" className="hover:text-pink-600 transition-colors">Friendship</Link>
          <Link href="/compatibility" className="hover:text-pink-600 transition-colors">Compatibility</Link>
          <Link href="/about" className="hover:text-pink-600 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-pink-600 transition-colors">Contact</Link>
        </nav>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm font-medium text-gray-700 bg-white border-t border-gray-100">
          <Link href="/love" onClick={() => setMenuOpen(false)} className="hover:text-pink-600">Love</Link>
          <Link href="/friendship" onClick={() => setMenuOpen(false)} className="hover:text-pink-600">Friendship</Link>
          <Link href="/compatibility" onClick={() => setMenuOpen(false)} className="hover:text-pink-600">Compatibility</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-pink-600">About</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-pink-600">Contact</Link>
        </div>
      )}
    </header>
  );
}
