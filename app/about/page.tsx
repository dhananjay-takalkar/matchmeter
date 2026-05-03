import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About – MatchMeter',
  description: 'Learn about MatchMeter, the free love, friendship, and compatibility calculator. Find out how it works and what makes it fun.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">About MatchMeter</h1>

      <div className="space-y-6 text-gray-700 text-base leading-relaxed">
        <p>
          <strong>MatchMeter</strong> is a free, fun, and easy-to-use compatibility calculator that lets you instantly check
          the love, friendship, or general compatibility between two people. All you need is two names!
        </p>

        <h2 className="text-xl font-bold text-gray-800 pt-2">Our Mission</h2>
        <p>
          We believe life is better with a little fun. MatchMeter is built to bring laughter, spark conversations, and give you
          something entertaining to share with the people you care about. Whether you are testing your connection with a crush,
          celebrating a friendship, or just curious — we have got you covered.
        </p>

        <h2 className="text-xl font-bold text-gray-800 pt-2">How Does It Work?</h2>
        <p>
          MatchMeter uses a name-based algorithm that processes the characters in both names to produce a unique score between
          0 and 100. The same pair of names will always produce the same score, making results consistent and shareable.
        </p>
        <p>
          The algorithm is designed purely for entertainment — it is not based on astrology, numerology, psychology, or any
          scientific discipline. Think of it as a digital fortune cookie!
        </p>

        <h2 className="text-xl font-bold text-gray-800 pt-2">Three Calculators, One Tool</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Love Calculator</strong> – Are you and your crush meant to be?</li>
          <li><strong>Friendship Calculator</strong> – How strong is your friendship bond?</li>
          <li><strong>Compatibility Test</strong> – A general score for any two people</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 pt-2">Privacy</h2>
        <p>
          We do not store your names on any server. All calculations happen in your browser. Your recent results may be saved
          locally on your device for convenience, but this data never leaves your browser.
        </p>
      </div>
    </div>
  );
}
