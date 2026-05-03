import type { Metadata } from 'next';
import InputForm from '@/components/InputForm';

export const metadata: Metadata = {
  title: 'Friendship Calculator – MatchMeter',
  description: 'Test your friendship compatibility with MatchMeter\'s free friendship calculator. How strong is your bond? Enter two names and find out!',
};

export default function FriendshipPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <div className="text-6xl mb-4">🤝</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">Friendship Calculator</h1>
        <p className="text-gray-500 text-base">
          How strong is your friendship? Enter two names and discover your friendship compatibility score!
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8">
        <InputForm type="friendship" label1="Your Name" label2="Friend's Name" />
      </div>

      <div className="mt-10 text-sm text-gray-400 text-center">
        Results are for entertainment purposes only and not scientifically accurate.
      </div>
    </div>
  );
}
