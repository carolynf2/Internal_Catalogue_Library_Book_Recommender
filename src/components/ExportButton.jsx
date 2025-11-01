import './ExportButton.css';

const ExportButton = ({ books, preferences }) => {
  const handleExportJSON = () => {
    const exportData = {
      timestamp: new Date().toISOString(),
      preferences: preferences,
      recommendations: books.map((book) => ({
        title: book.title,
        author: book.author,
        genre: book.genre,
        tone: book.tone,
        series: book.series,
        score: book.score,
        rating: book.rating,
      })),
    };

    const jsonString = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `book-recommendations-${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleExportText = () => {
    let textContent = 'LIBRARY BOOK RECOMMENDATIONS\n';
    textContent += '=' .repeat(50) + '\n\n';
    textContent += `Generated: ${new Date().toLocaleString()}\n\n`;

    textContent += 'Your Preferences:\n';
    textContent += `- Genre: ${preferences.genre === 'all' ? 'All Genres' : preferences.genre}\n`;
    textContent += `- Tone: ${preferences.tone === 'all' ? 'All Tones' : preferences.tone}\n`;
    textContent += `- Series: ${preferences.series === 'all' ? 'All Books' : preferences.series}\n`;
    textContent += `- Author: ${preferences.author || 'Any'}\n\n`;

    textContent += 'Recommended Books:\n';
    textContent += '-'.repeat(50) + '\n\n';

    books.forEach((book, index) => {
      textContent += `${index + 1}. ${book.title}\n`;
      textContent += `   Author: ${book.author}\n`;
      textContent += `   Genre: ${book.genre} | Tone: ${book.tone}\n`;
      textContent += `   Series: ${book.series}\n`;
      textContent += `   Match Score: ${book.score.toFixed(1)}%\n`;
      textContent += `   Rating: ${book.rating}/5 | Pages: ${book.pages}\n`;
      textContent += `   Description: ${book.description}\n\n`;
    });

    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `book-recommendations-${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="export-buttons">
      <button className="export-btn export-json" onClick={handleExportJSON}>
        📄 Export as JSON
      </button>
      <button className="export-btn export-text" onClick={handleExportText}>
        📝 Export as Text
      </button>
    </div>
  );
};

export default ExportButton;
