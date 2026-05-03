export function calculateScore(name1: string, name2: string): number {
  const combined = (name1 + name2).toLowerCase();
  let score = 0;

  for (let i = 0; i < combined.length; i++) {
    score += combined.charCodeAt(i);
  }

  return score % 101;
}
