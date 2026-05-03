import type { Metadata } from 'next';
import InputForm from '@/components/InputForm';

export const metadata: Metadata = {
  title: 'Love Calculator – MatchMeter',
  description: 'Calculate your love compatibility score with MatchMeter\'s free love calculator. Enter two names and find your match percentage instantly!',
};

export default function LovePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <div className="text-6xl mb-4">❤️</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">Love Calculator</h1>
        <p className="text-gray-500 text-base">
          Enter two names to discover your love compatibility score. Are you meant to be together? Find out now!
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8">
        <InputForm type="love" label1="Your Name" label2="Partner's Name" />
      </div>

      <div className="mt-10 text-sm text-gray-400 text-center">
        Results are for entertainment purposes only and not scientifically accurate.
      </div>
    </div>
  );
}
