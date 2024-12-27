// Fisher-Yates Shuffle algorithm
export function shuffleArray(array) {
  const shuffled = [...array]; // Create a copy of the array to avoid mutating the original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
  }
  return shuffled;
}
