import { useState } from 'react';
import PreferenceForm from './components/PreferenceForm';
import BookCard from './components/BookCard';
import ScoreChart from './components/ScoreChart';
import ExportButton from './components/ExportButton';
import { mockBooks } from './data/mockBooks';
import { getRecommendations } from './utils/recommendationEngine';
import { loadPreferences } from './utils/storage';
import './App.css';

function App() {
  const [preferences, setPreferences] = useState(loadPreferences());
  const [recommendations, setRecommendations] = useState(
    getRecommendations(mockBooks, loadPreferences())
  );

  const handlePreferencesChange = (newPreferences) => {
    setPreferences(newPreferences);
    const newRecommendations = getRecommendations(mockBooks, newPreferences);
    setRecommendations(newRecommendations);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>📚 Library Book Recommender</h1>
        <p className="app-subtitle">
          Discover your next great read based on your preferences
        </p>
      </header>

      <main className="app-main">
        <PreferenceForm onPreferencesChange={handlePreferencesChange} />

        <ScoreChart books={recommendations} limit={10} />

        <div className="results-header">
          <h2>📖 Recommended Books</h2>
          <ExportButton books={recommendations} preferences={preferences} />
        </div>

        <div className="books-grid">
          {recommendations.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </main>

      <footer className="app-footer">
        <p>Built with React + Vite | Data is synthetic for demonstration</p>
      </footer>
    </div>
  );
}

export default App;
