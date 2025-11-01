import { useState, useEffect } from 'react';
import { genres, tones, series } from '../data/mockBooks';
import { savePreferences, loadPreferences } from '../utils/storage';
import './PreferenceForm.css';

const PreferenceForm = ({ onPreferencesChange }) => {
  const [preferences, setPreferences] = useState(loadPreferences());

  useEffect(() => {
    // Load preferences on mount
    const saved = loadPreferences();
    setPreferences(saved);
    onPreferencesChange(saved);
  }, []);

  const handleChange = (field, value) => {
    const newPreferences = {
      ...preferences,
      [field]: value
    };
    setPreferences(newPreferences);
    savePreferences(newPreferences);
    onPreferencesChange(newPreferences);
  };

  const handleReset = () => {
    const defaultPrefs = {
      genre: 'all',
      tone: 'all',
      series: 'all',
      author: ''
    };
    setPreferences(defaultPrefs);
    savePreferences(defaultPrefs);
    onPreferencesChange(defaultPrefs);
  };

  return (
    <div className="preference-form">
      <h2>Your Reading Preferences</h2>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <select
            id="genre"
            value={preferences.genre}
            onChange={(e) => handleChange('genre', e.target.value)}
          >
            <option value="all">All Genres</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre.charAt(0).toUpperCase() + genre.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="tone">Tone</label>
          <select
            id="tone"
            value={preferences.tone}
            onChange={(e) => handleChange('tone', e.target.value)}
          >
            <option value="all">All Tones</option>
            {tones.map((tone) => (
              <option key={tone} value={tone}>
                {tone.charAt(0).toUpperCase() + tone.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="series">Series Preference</label>
          <select
            id="series"
            value={preferences.series}
            onChange={(e) => handleChange('series', e.target.value)}
          >
            <option value="all">All Books</option>
            <option value="standalone">Standalone Only</option>
            {series
              .filter((s) => s !== 'standalone')
              .map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="author">Author (fuzzy search)</label>
          <input
            type="text"
            id="author"
            placeholder="Try 'Chen', 'Blackwood', or variations..."
            value={preferences.author}
            onChange={(e) => handleChange('author', e.target.value)}
          />
          <small className="helper-text">
            Supports partial names and typos - books match by author OR other preferences
          </small>
        </div>
      </div>

      <button className="reset-button" onClick={handleReset}>
        Reset Preferences
      </button>
    </div>
  );
};

export default PreferenceForm;
