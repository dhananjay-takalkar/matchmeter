import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact – MatchMeter',
  description: 'Get in touch with the MatchMeter team. We love hearing from our users!',
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-8">
        Have a question, suggestion, or feedback? We would love to hear from you. Reach out using the details below.
      </p>

      <div className="bg-white rounded-2xl shadow p-8 space-y-5">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Email</h2>
          <a
            href="mailto:hello@matchmeter.app"
            className="text-pink-600 hover:underline text-base"
          >
            hello@matchmeter.app
          </a>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Response Time</h2>
          <p className="text-gray-500 text-sm">We typically respond within 1–2 business days.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-1">What You Can Contact Us About</h2>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
            <li>Bug reports or technical issues</li>
            <li>Feature requests</li>
            <li>Partnership or collaboration inquiries</li>
            <li>General feedback</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
