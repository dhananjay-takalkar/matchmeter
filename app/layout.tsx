import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'MatchMeter – Love, Friendship & Compatibility Calculator',
  description: 'Find out your compatibility score with MatchMeter! Fun love calculator, friendship test, and compatibility checker. Share your results instantly.',
  keywords: 'love calculator, compatibility test, friendship calculator, name compatibility, match meter',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
