import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MatchMeter – Free Love, Friendship & Compatibility Calculator',
  description: 'MatchMeter is a free online love calculator, friendship tester, and compatibility checker. Enter two names and get your score instantly!',
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Discover Your <span className="text-pink-600">Match Score</span> 💘
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto mb-10">
          Enter two names and find out your love, friendship, or compatibility score — instantly. Share the fun with friends!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/love"
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-lg transition-transform hover:scale-105"
          >
            ❤️ Love Calculator
          </Link>
          <Link
            href="/friendship"
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-lg transition-transform hover:scale-105"
          >
            🤝 Friendship Test
          </Link>
          <Link
            href="/compatibility"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-lg transition-transform hover:scale-105"
          >
            ✨ Compatibility Check
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: '1', title: 'Enter Two Names', desc: 'Type in your name and the name of your partner, friend, or crush.', icon: '✏️' },
            { step: '2', title: 'Get Your Score', desc: 'Our algorithm instantly calculates your compatibility score from 0 to 100.', icon: '📊' },
            { step: '3', title: 'Share the Result', desc: 'Share your score on WhatsApp or copy the link to send to friends.', icon: '📤' },
          ].map(({ step, title, desc, icon }) => (
            <div key={step} className="bg-white rounded-2xl p-6 shadow text-center">
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO content block */}
      <section className="bg-white border-t border-gray-100 py-16 px-4">
        <div className="max-w-3xl mx-auto text-gray-700 text-base leading-relaxed space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">What is MatchMeter?</h2>
          <p>
            MatchMeter is a free online tool that lets you measure compatibility between two people in a fun and entertaining way.
            Whether you are curious about your <strong>love compatibility</strong>, want to test a <strong>friendship bond</strong>,
            or simply check how well two people get along, MatchMeter gives you an instant score out of 100.
          </p>

          <h2 className="text-2xl font-bold text-gray-800">Love Calculator</h2>
          <p>
            Our <strong>love calculator</strong> uses both names to generate a unique compatibility percentage. It is perfect for
            testing chemistry with a crush, checking if you and your partner are meant to be, or just having fun with your friends.
            Simply type in two names and hit Calculate — you will get your love score instantly along with a personalized message.
          </p>

          <h2 className="text-2xl font-bold text-gray-800">Friendship Compatibility Test</h2>
          <p>
            Want to know how strong your friendship is? Our <strong>friendship compatibility test</strong> gives you a score based
            on two names. It is a lighthearted way to celebrate your best friends, meet new people, or just laugh at the results.
            Share it on WhatsApp and see who gets the highest score!
          </p>

          <h2 className="text-2xl font-bold text-gray-800">General Compatibility Checker</h2>
          <p>
            Not sure if you and someone else are a good match in general? The <strong>compatibility checker</strong> gives a broader
            score that covers all kinds of relationships — romantic, platonic, or professional. It is a great conversation starter
            at parties, group chats, or whenever you want to inject some fun.
          </p>

          <h2 className="text-2xl font-bold text-gray-800">Is the Score Accurate?</h2>
          <p>
            MatchMeter is designed entirely for <strong>entertainment purposes</strong>. The scores are generated algorithmically
            from the characters in both names and are not based on astrology, psychology, or any scientific method.
            Think of it as a fun game — enjoy the results, laugh with friends, and do not take it too seriously!
          </p>

          <h2 className="text-2xl font-bold text-gray-800">Why Use MatchMeter?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Completely free — no sign-up required</li>
            <li>Instant results with a fun, colourful score display</li>
            <li>Easy sharing on WhatsApp and other platforms</li>
            <li>Mobile-friendly design that works on any device</li>
            <li>Three different calculators: Love, Friendship, and Compatibility</li>
          </ul>
        </div>
      </section>
    </>
  );
}
