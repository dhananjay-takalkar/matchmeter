export function generateMessage(score: number, type: string): string {
  if (type === 'love') {
    if (score > 80) return 'Perfect match! You two are soulmates 💖';
    if (score > 60) return 'Great connection! Keep nurturing it 😊';
    if (score > 40) return 'There is potential here — put in the effort 💪';
    if (score > 20) return 'Challenging pairing, but love conquers all 😅';
    return 'Opposites attract... maybe? 🤔';
  }

  if (type === 'friendship') {
    if (score > 80) return 'Best friends forever! 🤝';
    if (score > 60) return 'Solid friendship — you have each other\'s backs 👍';
    if (score > 40) return 'Decent pals, room to grow 😄';
    if (score > 20) return 'Casual acquaintances for now 😐';
    return 'You just met, basically strangers 👀';
  }

  if (type === 'compatibility') {
    if (score > 80) return 'Incredibly compatible — you complete each other ✨';
    if (score > 60) return 'Good compatibility, lots of common ground 🌟';
    if (score > 40) return 'Moderate compatibility — differences make it interesting 🔄';
    if (score > 20) return 'Some friction, but workable 🤷';
    return 'Very different people — opposites in every way 🌀';
  }

  return 'Interesting compatibility! 👀';
}
