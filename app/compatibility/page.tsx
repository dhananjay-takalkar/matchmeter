import type { Metadata } from 'next';
import InputForm from '@/components/InputForm';

export const metadata: Metadata = {
  title: 'Compatibility Test – MatchMeter',
  description: 'Check general compatibility between two people with MatchMeter\'s free compatibility test. Get your score in seconds!',
};

export default function CompatibilityPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <div className="text-6xl mb-4">✨</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">Compatibility Test</h1>
        <p className="text-gray-500 text-base">
          How compatible are two people? Enter any two names and get a general compatibility score — romantic, friendly, or anything in between!
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8">
        <InputForm type="compatibility" label1="First Person" label2="Second Person" />
      </div>

      <div className="mt-10 text-sm text-gray-400 text-center">
        Results are for entertainment purposes only and not scientifically accurate.
      </div>
    </div>
  );
}
