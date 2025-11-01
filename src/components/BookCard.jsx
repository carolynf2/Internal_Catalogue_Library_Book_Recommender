import './BookCard.css';

const BookCard = ({ book }) => {
  const scorePercentage = book.score || 0;
  const scoreColor =
    scorePercentage >= 80 ? '#27ae60' :
    scorePercentage >= 60 ? '#f39c12' :
    scorePercentage >= 40 ? '#e67e22' :
    '#e74c3c';

  // Match type labels and colors
  const matchTypeConfig = {
    author: { label: '✍️ Author Match', color: '#9b59b6' },
    preference: { label: '🎯 Preference Match', color: '#3498db' },
    partial: { label: '📚 Partial Match', color: '#95a5a6' },
    low: { label: '📖 Low Match', color: '#bdc3c7' }
  };

  const matchType = book.matchType || 'low';
  const matchConfig = matchTypeConfig[matchType];

  return (
    <div className="book-card">
      <div className="book-card-header">
        <h3 className="book-title">{book.title}</h3>
        <div className="badges-container">
          <div className="score-badge" style={{ backgroundColor: scoreColor }}>
            {scorePercentage.toFixed(0)}%
          </div>
          <div className="match-type-badge" style={{ backgroundColor: matchConfig.color }}>
            {matchConfig.label}
          </div>
        </div>
      </div>

      <div className="book-details">
        <p className="book-author">
          <span className="label">Author:</span> {book.author}
        </p>
        <p className="book-genre">
          <span className="label">Genre:</span> {book.genre}
        </p>
        <p className="book-tone">
          <span className="label">Tone:</span> {book.tone}
        </p>
        <p className="book-series">
          <span className="label">Series:</span> {book.series}
        </p>
      </div>

      <p className="book-description">{book.description}</p>

      <div className="book-footer">
        <span className="book-rating">⭐ {book.rating}/5</span>
        <span className="book-pages">{book.pages} pages</span>
      </div>

      <div className="score-bar">
        <div
          className="score-bar-fill"
          style={{
            width: `${scorePercentage}%`,
            backgroundColor: scoreColor
          }}
        ></div>
      </div>
    </div>
  );
};

export default BookCard;
