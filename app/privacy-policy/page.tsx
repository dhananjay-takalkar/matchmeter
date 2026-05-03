import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy – MatchMeter',
  description: 'Read the MatchMeter Privacy Policy. Learn how we handle your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Privacy Policy</h1>
      <p className="text-gray-400 text-sm mb-8">Last updated: May 2025</p>

      <div className="space-y-6 text-gray-700 text-base leading-relaxed">
        <p>
          At MatchMeter, we take your privacy seriously. This Privacy Policy explains what information we collect, how we use
          it, and the choices you have.
        </p>

        <h2 className="text-xl font-bold text-gray-800">1. Information We Collect</h2>
        <p>
          MatchMeter does <strong>not</strong> collect, transmit, or store any personal information on our servers. When you
          enter names into the calculator, all processing happens entirely within your browser. We do not have access to the
          names you enter.
        </p>
        <p>
          Your recent calculation history may be saved to your browser&apos;s <strong>local storage</strong> for convenience.
          This data is stored only on your device and is never sent to us.
        </p>

        <h2 className="text-xl font-bold text-gray-800">2. Cookies</h2>
        <p>
          MatchMeter may use standard browser cookies to improve user experience (e.g., remembering preferences). We do not
          use cookies to identify you personally or track you across the internet.
        </p>
        <p>
          Third-party services integrated into our site (such as Google AdSense) may set their own cookies in accordance with
          their own privacy policies. We encourage you to review those policies separately.
        </p>

        <h2 className="text-xl font-bold text-gray-800">3. Analytics</h2>
        <p>
          We may use privacy-respecting analytics tools to understand general usage patterns (e.g., page views). This data is
          aggregated and anonymised — it cannot be used to identify any individual.
        </p>

        <h2 className="text-xl font-bold text-gray-800">4. Third-Party Services</h2>
        <p>
          Our site may display advertisements served by Google AdSense or other networks. These services may use cookies and
          similar technologies to show you relevant ads. Please refer to Google&apos;s Privacy Policy for more information on how
          Google uses data from ad serving.
        </p>

        <h2 className="text-xl font-bold text-gray-800">5. Children&apos;s Privacy</h2>
        <p>
          MatchMeter is intended for general audiences. We do not knowingly collect personal information from children under
          the age of 13. If you believe a child has provided us with personal information, please contact us immediately.
        </p>

        <h2 className="text-xl font-bold text-gray-800">6. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
          Your continued use of MatchMeter after any changes indicates your acceptance of the updated policy.
        </p>

        <h2 className="text-xl font-bold text-gray-800">7. Contact</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:hello@matchmeter.app" className="text-pink-600 hover:underline">
            hello@matchmeter.app
          </a>.
        </p>
      </div>
    </div>
  );
}
