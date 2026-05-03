'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { calculateScore } from '@/lib/calculateScore';

interface InputFormProps {
  type: 'love' | 'friendship' | 'compatibility';
  label1?: string;
  label2?: string;
}

export default function InputForm({ type, label1 = 'Your Name', label2 = 'Their Name' }: InputFormProps) {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name1.trim() || !name2.trim()) {
      setError('Please enter both names.');
      return;
    }
    setError('');
    const score = calculateScore(name1.trim(), name2.trim());
    const params = new URLSearchParams({
      name1: name1.trim(),
      name2: name2.trim(),
      score: String(score),
      type,
    });
    router.push(`/result?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label1}</label>
        <input
          type="text"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
          placeholder="Enter name..."
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          maxLength={50}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label2}</label>
        <input
          type="text"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
          placeholder="Enter name..."
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          maxLength={50}
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-xl transition-colors text-base shadow-md"
      >
        Calculate ✨
      </button>
    </form>
  );
}
