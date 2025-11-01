export const mockBooks = [
  {
    id: 1,
    title: "The Quantum Paradox",
    author: "Sarah Chen",
    genre: "sci-fi",
    tone: "suspenseful",
    series: "The Multiverse Chronicles",
    description: "A physicist discovers that parallel universes are colliding, threatening reality itself.",
    rating: 4.5,
    pages: 420
  },
  {
    id: 2,
    title: "Whispers in the Dark",
    author: "Marcus Blackwood",
    genre: "horror",
    tone: "dark",
    series: "standalone",
    description: "An abandoned asylum holds secrets that should have stayed buried.",
    rating: 4.2,
    pages: 356
  },
  {
    id: 3,
    title: "The Dragon's Legacy",
    author: "Elara Moonwhisper",
    genre: "fantasy",
    tone: "epic",
    series: "The Dragonborn Saga",
    description: "A young peasant discovers she's the last heir to an ancient dragon-riding dynasty.",
    rating: 4.7,
    pages: 512
  },
  {
    id: 4,
    title: "Summer Hearts",
    author: "Jennifer Rose",
    genre: "romance",
    tone: "lighthearted",
    series: "Coastal Love Stories",
    description: "Two rivals at a beachside café find that competition might lead to love.",
    rating: 4.0,
    pages: 298
  },
  {
    id: 5,
    title: "Echoes of Empire",
    author: "Dr. Alexander Stone",
    genre: "historical fiction",
    tone: "dramatic",
    series: "standalone",
    description: "The rise and fall of a forgotten Roman general during the empire's decline.",
    rating: 4.6,
    pages: 478
  },
  {
    id: 6,
    title: "The Suburban Secret",
    author: "Mia Thompson",
    genre: "realistic fiction",
    tone: "emotional",
    series: "standalone",
    description: "A teenage girl navigates family secrets and first love in suburban America.",
    rating: 4.3,
    pages: 324
  },
  {
    id: 7,
    title: "Starship Rebellion",
    author: "Sarah Chen",
    genre: "sci-fi",
    tone: "action-packed",
    series: "The Multiverse Chronicles",
    description: "The crew of a rebel starship must prevent an AI from controlling humanity.",
    rating: 4.4,
    pages: 392
  },
  {
    id: 8,
    title: "The Midnight Garden",
    author: "Marcus Blackwood",
    genre: "horror",
    tone: "atmospheric",
    series: "The Shadow Realm",
    description: "A botanist discovers plants that feed on human fear in a cursed greenhouse.",
    rating: 4.1,
    pages: 368
  },
  {
    id: 9,
    title: "Crown of Thorns",
    author: "Lord Edmund Ashford",
    genre: "historical fiction",
    tone: "political",
    series: "The Tudor Throne",
    description: "Intrigue and betrayal in the court of Henry VIII during the English Reformation.",
    rating: 4.8,
    pages: 545
  },
  {
    id: 10,
    title: "Second Chances",
    author: "Jennifer Rose",
    genre: "romance",
    tone: "emotional",
    series: "standalone",
    description: "A divorced single mother finds unexpected love with her daughter's soccer coach.",
    rating: 4.2,
    pages: 312
  }
];

export const genres = ["sci-fi", "horror", "fantasy", "romance", "historical fiction", "realistic fiction"];
export const tones = ["suspenseful", "dark", "epic", "lighthearted", "dramatic", "emotional", "action-packed", "atmospheric", "political"];
export const authors = [...new Set(mockBooks.map(book => book.author))];
export const series = [...new Set(mockBooks.map(book => book.series))];
