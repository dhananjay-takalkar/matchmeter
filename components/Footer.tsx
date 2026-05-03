import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-pink-600 font-bold text-lg">MatchMeter 💘</p>
          <nav className="flex flex-wrap gap-4 text-sm text-gray-600">
            <Link href="/about" className="hover:text-pink-600 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-pink-600 transition-colors">Contact</Link>
            <Link href="/privacy-policy" className="hover:text-pink-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-pink-600 transition-colors">Terms</Link>
            <Link href="/disclaimer" className="hover:text-pink-600 transition-colors">Disclaimer</Link>
          </nav>
        </div>
        <p className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} MatchMeter. For entertainment purposes only.
        </p>
      </div>
    </footer>
  );
}
