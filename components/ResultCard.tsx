interface ResultCardProps {
  name1: string;
  name2: string;
  score: number;
  message: string;
  type: string;
}

const typeEmoji: Record<string, string> = {
  love: '❤️',
  friendship: '🤝',
  compatibility: '✨',
};

function scoreColor(score: number): string {
  if (score > 75) return 'text-green-600';
  if (score > 45) return 'text-yellow-500';
  return 'text-red-500';
}

function progressColor(score: number): string {
  if (score > 75) return 'bg-green-500';
  if (score > 45) return 'bg-yellow-400';
  return 'bg-red-400';
}

export default function ResultCard({ name1, name2, score, message, type }: ResultCardProps) {
  const emoji = typeEmoji[type] ?? '💫';

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md mx-auto">
      <p className="text-4xl mb-4">{emoji}</p>
      <h2 className="text-2xl font-bold text-gray-800 mb-1">
        {name1} &amp; {name2}
      </h2>
      <p className="text-gray-500 text-sm mb-6 capitalize">{type} Compatibility</p>

      <div className={`text-7xl font-extrabold mb-2 ${scoreColor(score)}`}>{score}%</div>

      <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
        <div
          className={`h-3 rounded-full transition-all duration-700 ${progressColor(score)}`}
          style={{ width: `${score}%` }}
        />
      </div>

      <p className="text-gray-700 text-lg font-medium">{message}</p>
    </div>
  );
}
