import Fuse from 'fuse.js';

/**
 * Fuzzy match author name using Fuse.js
 * Returns a score between 0-100 (higher is better match)
 */
const fuzzyMatchAuthor = (authorQuery, bookAuthor) => {
  if (!authorQuery || authorQuery.trim() === '') {
    return null; // No search query
  }

  // Configure Fuse.js for fuzzy author matching
  const fuse = new Fuse([bookAuthor], {
    threshold: 0.4, // 0.0 = exact match, 1.0 = match anything (0.4 allows moderate typos)
    distance: 100,
    includeScore: true,
    ignoreLocation: true,
  });

  const result = fuse.search(authorQuery.trim());

  if (result.length > 0) {
    // Fuse.js score: 0 = perfect match, 1 = no match
    // Convert to 0-100 scale where 100 = perfect match
    const fuseScore = result[0].score;
    return (1 - fuseScore) * 100;
  }

  return 0; // No match
};

/**
 * Calculate preference score based on genre, tone, and series
 * Returns a score between 0-100
 */
const calculatePreferenceScore = (book, preferences) => {
  let score = 0;
  const weights = {
    genre: 40,
    tone: 35,
    series: 25
  };

  // Genre matching (40%)
  if (preferences.genre && preferences.genre !== 'all') {
    if (book.genre === preferences.genre) {
      score += weights.genre;
    }
  } else {
    // If no preference, give partial credit
    score += weights.genre * 0.3;
  }

  // Tone matching (35%)
  if (preferences.tone && preferences.tone !== 'all') {
    if (book.tone === preferences.tone) {
      score += weights.tone;
    }
  } else {
    score += weights.tone * 0.3;
  }

  // Series matching (25%)
  if (preferences.series && preferences.series !== 'all') {
    if (preferences.series === 'standalone') {
      if (book.series === 'standalone') {
        score += weights.series;
      }
    } else if (book.series === preferences.series) {
      score += weights.series;
    }
  } else {
    score += weights.series * 0.3;
  }

  return score;
};

/**
 * Calculate recommendation score using OR logic
 * Books can score high by matching EITHER author OR preferences
 * Weights: genre (40%), tone (30%), series (20%), author (10%)
 */
export const calculateBookScore = (book, preferences) => {
  const hasAuthorQuery = preferences.author && preferences.author.trim() !== '';

  // Calculate author match score (0-100)
  const authorScore = hasAuthorQuery ? fuzzyMatchAuthor(preferences.author, book.author) : 0;

  // Calculate preference score (0-100)
  const preferenceScore = calculatePreferenceScore(book, preferences);

  // OR Logic: Book scores well if it matches EITHER author OR preferences
  // We take the maximum of the two scores, but boost if both match
  let finalScore;

  if (hasAuthorQuery) {
    // When searching by author, use OR logic:
    // Take the best of author match or preference match, with bonus if both match
    if (authorScore > 50 && preferenceScore > 50) {
      // Both match well - give a bonus
      finalScore = Math.max(authorScore, preferenceScore) + 15;
    } else {
      // At least one matches - use the better score
      finalScore = Math.max(authorScore, preferenceScore);
    }
  } else {
    // No author query - just use preference score
    finalScore = preferenceScore;
  }

  // Cap at 100
  return Math.min(finalScore, 100);
};

/**
 * Get recommended books sorted by score
 */
export const getRecommendations = (books, preferences) => {
  const booksWithScores = books.map(book => {
    const score = calculateBookScore(book, preferences);
    const authorMatchScore = preferences.author && preferences.author.trim() !== ''
      ? fuzzyMatchAuthor(preferences.author, book.author)
      : null;

    return {
      ...book,
      score,
      matchType: determineMatchType(score, authorMatchScore),
      authorMatchScore
    };
  });

  // Sort by score descending
  return booksWithScores.sort((a, b) => b.score - a.score);
};

/**
 * Determine how the book matched (for display purposes)
 */
const determineMatchType = (finalScore, authorMatchScore) => {
  if (authorMatchScore !== null && authorMatchScore > 50) {
    return 'author';
  } else if (finalScore > 60) {
    return 'preference';
  } else if (finalScore > 30) {
    return 'partial';
  }
  return 'low';
};

/**
 * Get top N recommendations
 */
export const getTopRecommendations = (books, preferences, limit = 5) => {
  const recommendations = getRecommendations(books, preferences);
  return recommendations.slice(0, limit);
};
