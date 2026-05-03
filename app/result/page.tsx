'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import ResultCard from '@/components/ResultCard';
import ShareCard from '@/components/ShareCard';
import { generateMessage } from '@/lib/generateMessage';

function saveHistory(entry: { name1: string; name2: string; score: number; type: string }) {
  try {
    const existing = JSON.parse(localStorage.getItem('mm_history') || '[]');
    existing.unshift(entry);
    localStorage.setItem('mm_history', JSON.stringify(existing.slice(0, 5)));
  } catch {
    // localStorage may not be available
  }
}

function ResultContent() {
  const params = useSearchParams();
  const router = useRouter();

  const name1 = params.get('name1') || '';
  const name2 = params.get('name2') || '';
  const score = parseInt(params.get('score') || '0', 10);
  const type = params.get('type') || 'compatibility';

  useEffect(() => {
    if (name1 && name2) {
      saveHistory({ name1, name2, score, type });
    }
  }, [name1, name2, score, type]);

  if (!name1 || !name2) {
    return (
      <div className="text-center py-20 text-gray-500">
        <p className="text-lg mb-4">No result to display.</p>
        <button
          onClick={() => router.push('/')}
          className="text-pink-600 underline"
        >
          Go back home
        </button>
      </div>
    );
  }

  const message = generateMessage(score, type);
  const backPath = `/${type}`;

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <ResultCard name1={name1} name2={name2} score={score} message={message} type={type} />
      <ShareCard name1={name1} name2={name2} score={score} type={type} />

      <div className="mt-8 text-center">
        <button
          onClick={() => router.push(backPath)}
          className="inline-block bg-pink-50 hover:bg-pink-100 text-pink-700 font-semibold py-3 px-8 rounded-xl transition-colors"
        >
          Try Again 🔄
        </button>
      </div>

      <p className="mt-8 text-center text-xs text-gray-400">
        This result is for entertainment purposes only and is not scientifically accurate.
      </p>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-gray-400">Loading result...</div>}>
      <ResultContent />
    </Suspense>
  );
}
